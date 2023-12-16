import { Route, Routes } from "react-router-dom";
import { routesConfig } from "./routesConfig";

export const AppRouter = () => {
	return (
		<Routes>
			{routesConfig.map((route) => (
				<Route path={route.path} element={route.element} />
			))}
		</Routes>
	);
};
