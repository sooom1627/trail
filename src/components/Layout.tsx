import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { Sidebar } from "./Sidebar";

interface LayoutProps {
	children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<>
			<ToastContainer
				position="top-left"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
			/>
			<div className="flex w-full px-4">
				<Sidebar />
				<div className="w-full px-8 max-h-screen">{children}</div>
			</div>
		</>
	);
};
