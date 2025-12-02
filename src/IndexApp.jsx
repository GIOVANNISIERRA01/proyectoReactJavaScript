import "./Styles/IndexApp.css"
import Navbar from "./Nav/NavApp";
import { Outlet } from "react-router-dom";





const IndexApp =()=>{  //este es un tipo  de  funcion  flecha

    const user ="Andres"

    return(

        <>
            <Navbar/>

        <h1 className="saludo">Hola  mundo, bienvenido {user}</h1>
        <p>Esta es una aplicación de ejemplo utilizando React Router.</p>
        <Outlet />
    

        <section></section>

        <div></div>
        </>
    )
}

export default IndexApp;
