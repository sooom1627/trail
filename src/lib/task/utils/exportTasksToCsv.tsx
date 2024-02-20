import { useRecoilState } from "recoil";
import { tasksState } from "../stores/task/taskAtom";
import React from "react";
import { ExportIcon } from "@/components/icons/action/ExportIcon";
import Encoding from "encoding-japanese"; // encoding-japaneseをインポート
import { getTagNameById } from "@/lib/dashboard/utils/getTagNamebyID";
import { tagsState } from "@/lib/tag/stores/tagsAtom";
import { taskSplitter } from "./useTaskSplitter";

//This file is needed refactoring

const formatDate = (date?: Date) => {
	if (!date) return "";
	const year = date.getFullYear();
	const month = (date.getMonth() + 1).toString().padStart(2, "0");
	const day = date.getDate().toString().padStart(2, "0");
	return `${year}/${month}/${day}`;
};

const escapeForCSV = (value: string) => {
	if (value.includes(",") || value.includes("\n") || value.includes('"')) {
		// ダブルクォーテーションを二重にする
		const escapedValue = value.replace(/"/g, '""');
		// 値をダブルクォーテーションで囲む
		return `"${escapedValue}"`;
	}
	return value;
};

const getCurrentFormattedDate = () => {
	const now = new Date();
	const year = now.getFullYear();
	const month = (now.getMonth() + 1).toString().padStart(2, "0");
	const day = now.getDate().toString().padStart(2, "0");
	const hours = now.getHours().toString().padStart(2, "0");
	const minutes = now.getMinutes().toString().padStart(2, "0");
	return `${year}${month}${day}${hours}${minutes}`;
};

const useConvertTasksToCSV = () => {
	const [tasks] = useRecoilState(tasksState);
	const [tags] = useRecoilState(tagsState);
	const { todoTasks } = taskSplitter(tasks, "priority");
	const csvRows: string[] = [
		["No", "タスク名", "タグ", "優先度", "メモ", "期限"].join(","),
	];
	todoTasks.forEach((task, index) => {
		let exportTagName = "";

		if (task.tag) {
			const [tagName] = getTagNameById(task.tag || "", tags);
			exportTagName = tagName;
		}
		csvRows.push(
			[
				index + 1,
				escapeForCSV(task.title),
				exportTagName ? escapeForCSV(exportTagName) : "-",
				task.priority,
				task.memo ? escapeForCSV(task.memo) : "",
				task.deadLine ? formatDate(task.deadLine) : "-",
			].join(",")
		);
	});

	return csvRows.join("\n");
};

const downloadCSV = (
	csvString: string,
	filename: string = `TodoTasks-${getCurrentFormattedDate()}.csv`
): void => {
	// Shift-JISにエンコード
	const sjisArray = Encoding.convert(Encoding.stringToCode(csvString), "SJIS");
	const uint8Array = new Uint8Array(sjisArray);

	// Blobオブジェクトの作成
	const blob = new Blob([uint8Array], { type: "text/csv;charset=Shift_JIS" });
	const url = URL.createObjectURL(blob);
	const link = document.createElement("a");
	link.href = url;
	link.download = filename;
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
};

// タスクデータをCSVファイルとしてエクスポートする関数コンポーネント
const ExportTasksToCsvButton: React.FC = () => {
	const csvString = useConvertTasksToCSV();

	const handleDownload = () => {
		// 確認ダイアログを表示
		const isConfirmed = window.confirm(
			"Do you want to download the CSV file for tasks with the Todo status?"
		);
		if (isConfirmed) {
			// OKが押された場合、CSVファイルのダウンロードを実行
			downloadCSV(csvString);
		}
	};
	return (
		<div onClick={handleDownload}>
			<ExportIcon />
		</div>
	);
};

export default ExportTasksToCsvButton;
