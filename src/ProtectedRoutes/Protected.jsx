import { Navigate, Outlet } from "react-router-dom";

const Protected = ({ children }) => {

  let isAuthenticated = localStorage.getItem("token");
  console.log(isAuthenticated,'checkProtectedSide')

  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }

  return children ? children : <Outlet />;
};

export default Protected;
