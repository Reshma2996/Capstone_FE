import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Landing from "./pages/Landing";
import LoginWrapper from "./components/LoginWrapper";
import Register from "./pages/Register";
import Login from "./pages/Login"; // Import the Login component

const router = createBrowserRouter ([
  {
    path: '/',
    element: <Landing />,
    children: [
      {
        index: true,
        element: <LoginWrapper />
      },
      {
        path: 'register',
        element: <Register />
      },
      {
        path: 'login',
        element: <Login /> // Include the Login component here
      }
    ]
  }
]);

const App = () => {
  return <RouterProvider router={router} />
}

export default App;
