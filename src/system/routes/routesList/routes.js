import Dashboard from "../../../views/dashboard/dashboard";
import Login from "../../../views/login/login";
import Signup from "../../../views/signup/signup";
import UserGroup from "../../../views/userGroup/userGroup";
import Users from "../../../views/users/users";
const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: <Dashboard />,
    protected: true,
    hasSideBar: true,
  },
  {
    path: "/userGroup",
    name: "UserGroup",
    component: <UserGroup />,
    protected: true,
    hasSideBar: true,
  },
  {
    path: "/users",
    name: "Users",
    component: <Users />,
    protected: true,
    hasSideBar: true,
  },
  {
    path: "/login",
    name: "Login",
    component: <Login />,
    protected: false,
    hasSideBar: false,
  },
  {
    path: "/signup",
    name: "SignUp",
    component: <Signup />,
    protected: false,
    hasSideBar: false,
  },
];

export default routes;
