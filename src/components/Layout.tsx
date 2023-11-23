import { Sidebar } from "./Sidebar";

interface LayoutProps {
	children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<div className="flex w-full px-4">
			<Sidebar />
			<div className="w-full px-8 max-h-screen">{children}</div>
		</div>
	);
};
