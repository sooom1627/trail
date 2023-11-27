import "./App.css";
import { IndexPage } from "./pages/IndexPage";
import { TaskPage } from "./features/task";

function App() {
	return <IndexPage leftChildren={<TaskPage />} />;
}

export default App;
