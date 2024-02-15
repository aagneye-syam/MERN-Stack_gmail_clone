import Main from "./pages/Main";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react";
import { routes } from "./routes/routes";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path={routes.main.path} element={<routes.main.element />}>
        <Route
          path={`${routes.main.path}/:type`}
          element={<routes.main.element />}
        />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
