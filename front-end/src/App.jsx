import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  HomeLayout,
  Landing,
  Register,
  Login,
  DashBoard,
  Error,
  AddJob,
  Admin,
  AllJobs,
  DeleteJob,
  EditJob,
  Profile,
  Stats,
} from "./pages";

const checkDefaulttheme=()=>{
  const isDarkTheme= localStorage.getItem('darkTheme')==='true';
  document.body.classList.toggle('dark-theme',isDarkTheme);
  return isDarkTheme

}

const isDarkThemeEnabled=checkDefaulttheme()

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "add-job",
        element: <AddJob />,
      },
      {
        path: "admin",
        element: <Admin />,
      },
      {
        path: "all-jobs",
        element: <AllJobs />,
      },
      {
        path: "dashboard",
        element: <DashBoard isDarkThemeEnabled={isDarkThemeEnabled}/>,
        children:[
          {
            index:true,
            element:<AddJob />
          },
          {
            path: "admin",
            element: <Admin />,
          },
          {
            path:'profile',
            element:<Profile />
          },
          {
            path:'stats',
            element:<Stats />
          }
        ]
      },
      {
        path: "delete-job",
        element: <DeleteJob />,
      },
      {
        path: "edit-job",
        element: <EditJob />,
      },
      {
        path: "error",
        element: <Error />,
      },
      {
        path: "login",
        element: <Login />,
        exact: true,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "stats",
        element: <Stats />,
      },
      // {
      //   path: "*",
      //   element: <Error />, // ou une autre page de votre choix
      // },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
