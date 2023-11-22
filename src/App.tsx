import "./App.css";
import { Layout } from "./components/Layout";
import { TaskPage } from "./features/task";

function App() {
	return (
		<Layout>
			<TaskPage />
		</Layout>
	);
}

export default App;
