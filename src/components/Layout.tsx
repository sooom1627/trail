import { Sidebar } from "./Sidebar";

interface LayoutProps {
	children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<div className="flex w-full">
			<Sidebar />
			<div className="w-full p-8 max-h-screen">{children}</div>
		</div>
	);
};
