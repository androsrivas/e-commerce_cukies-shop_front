import React from "react";
import NavSection from "../atoms/NavSection";

function Navigation() {
  return (
    <section className="flex justify-evenly">
        <NavSection title="Enlaces" links={["Inicio", "Tienda", "Sobre Cukies", "Contacto"]}/>
        <NavSection title="Ayuda" links={["Opciones de pago", "Devolciones", "Política de privacidad"]}/>
    </section>
  )
}

export default Navigation