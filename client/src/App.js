import Main from "./pages/Main";
import {Routes,Route, RouterProvider, createBrowserRouter, createRoutesFromElement} from 'react';

const router =createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="" element={} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
