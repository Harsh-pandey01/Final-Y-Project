import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/HomePage.jsx";
import AboutPage from "./Pages/AboutPage.jsx";
import LoginPage from "./Pages/LoginPage.jsx";
import SignUpPage from "./Pages/SignUpPage.jsx";
import { FirebaseContextProvider } from "./context/FirebaseContext.jsx";
import { LoginContextProvider } from "./context/LoginContext.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import UserDetail from "./Pages/UserDetail.jsx";


// Creating the Routes

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/login",
        element: (
          <ProtectedRoute>
            <LoginPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/signup",
        element: (
          <ProtectedRoute>
            <SignUpPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/userdetail/:userUUID",
        element: (
          <UserDetail />
        ),
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <LoginContextProvider>
    <FirebaseContextProvider>
      <RouterProvider router={router} />
    </FirebaseContextProvider>
  </LoginContextProvider>
);
