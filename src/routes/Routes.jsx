import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/LayoutMain";
import App from "../App";
import PrivetRoute from "./PrivetRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: (
          // <PrivetRoute>
            <App />
          // </PrivetRoute>
        ),
      },
      // {
      //   path: "/login",
      //   element: <Login_Page />,
      // },
      // {
      //   path: "/expense-by-property/edit",
      //   element: (
      //     <PrivetRoute>
      //       <ExpenseBypropertyedit></ExpenseBypropertyedit>
      //     </PrivetRoute>
      //   ),
      // },
    ],
  },
]);
