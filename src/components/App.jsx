import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { RestrictedRoute } from "./RestrictedRoute.jsx";
import { PrivateRoute } from "./PrivateRoute.jsx";
import { lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { selectIsRefreshing } from "../redux/auth/selectors.js";
import Layout from "./Layout.jsx";
import { refreshUser } from "../redux/auth/operations.js";

const HomePage = lazy(() => import("../pages/HomePage/HomePage.jsx"));
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage.jsx"));
const RegisterPage = lazy(
  () => import("../pages/RegisterPage/RegisterPage.jsx"),
);
const ContactsPage = lazy(
  () => import("../pages/ContactsPage/ContactsPage.jsx"),
);

// vfmkm@fn.com
// realonelove

function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute component={<ContactsPage />} redirectTo="/login" />
          }
        />
      </Routes>
    </Layout>
  );
}

export default App;
