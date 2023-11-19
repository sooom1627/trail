import { Sidebar } from "./Sidebar";

interface LayoutProps {
	children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<div className="flex w-full">
			<Sidebar />
			<div className="h-screen py-8 px-4 grow">{children}</div>
		</div>
	);
};
