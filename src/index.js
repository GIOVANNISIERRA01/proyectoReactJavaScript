import reactDom from"react-dom/client";
import IndexApp from "./IndexApp.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import RegistApp from "./Registro/RegistApp.jsx";
import LoginApp from "./Login/LoginApp.jsx";

/* importar  las  extenciones  de  react  router dom  */
import{
    createBrowserRouter,
    RouterProvider,
    createRoutesFromElements,
    Route
} from "react-router-dom";


const router=createBrowserRouter(
    createRoutesFromElements(
       <Route path="/" element={<IndexApp/>}>,
        <Route path="/registro" element={<RegistApp/>}/>,
        <Route path="/login" element={<LoginApp/>}/>,
    </Route>
    )
);



const root=reactDom.createRoot(document.getElementById('root'))

root.render(

   <React.StrictMode>
    <RouterProvider router={router} />
   </React.StrictMode>

)
