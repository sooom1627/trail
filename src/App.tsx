import "./App.css";
import { IndexPage } from "./pages/IndexPage";
import { TaskPage } from "./lib/task";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TagsManagePage } from "./pages/tagsManagePage";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route index element={<IndexPage leftChildren={<TaskPage />} />} />
					<Route path="tags" element={<TagsManagePage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
