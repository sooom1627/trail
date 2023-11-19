import { Sidebar } from "./Sidebar";

interface LayoutProps {
	children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<div className="flex w-full">
			<Sidebar />
			<div className="h-screen p-8 grow">{children}</div>
		</div>
	);
};
