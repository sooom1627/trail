# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
	// other rules...
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
		project: ["./tsconfig.json", "./tsconfig.node.json"],
		tsconfigRootDir: __dirname,
	},
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## ディレクトリ構成

```js
─ node_modules // プロジェクトの依存関係
─ src // ソースコード
　 ├ components // 再利用可能なUIコンポーネント
　 │ 　├ accordion
　 │ 　├ icons
　 │ 　├ input
　 │ 　├ menu
　 │ 　└ templates
　 ├ lib // ビジネスロジックとデータ管理
　 │ 　├ quickTask // QuickTask機能に関連するコード
　 │ 　│ 　├ components
　 │ 　│ 　├ feature
　 │ 　│ 　├ hooks
　 │ 　│ 　├ interface
　 │ 　│ 　└ stores
　 │ 　└ task // Task機能に関連するコード
　 │ 　 　├ components
　 │ 　 　├ dataAccess
　 │ 　 　├ feature
　 │ 　 　├ hooks
　 │ 　 　├ interface
　 │ 　 　├ stores
　 │ 　 　└ utils
　 ├ pages // ページレベルのコンポーネント
　 └ types // TypeScriptの型定義
```

## プロジェクトのセットアップ

このプロジェクトをローカルで実行するには、以下の手順を実行します：

1. リポジトリをクローンします：`git clone <リポジトリのURL>`
2. 依存関係をインストールします：`npm install`
3. プロジェクトを起動します：`npm run start`

## テスト

テストを実行するには、以下のコマンドを使用します：`npm run test`

## ビルド

本番用のビルドを生成するには、以下のコマンドを使用します：`npm run build`

## コントリビューション

プルリクエストは大歓迎です。大きな変更をする前に、まずは問題を開いて何を変更したいのか話し合ってください。

## ライセンス

このプロジェクトは MIT ライセンスの下でライセンスされています。詳細は[LICENSE](LICENSE)ファイルをご覧ください。
