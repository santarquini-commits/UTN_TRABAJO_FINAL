import React from "react";
import "../style/Sidebar.css";


function Sidebar({ contactos, onSelectContacto }) {
    return (
        <div className="sidebar">
            {contactos.map((c) => (
                <div
                    key={c.id}
                    className="contacto"
                    onClick={() => onSelectContacto(c)}
                >
                    <img src={c.foto} alt={c.nombre} className="foto-contacto" />
                    <span>{c.nombre}</span>
                </div>
            ))}
        </div>
    );
}


const contactos = [
    {
        id: 1,
        nombre: "Juan",
        foto: <img src={`${process.env.PUBLIC_URL}/img/juan.png`} alt="Juan" />,
        mensajes: [
            { autor: "Juan", texto: "Hola, ¿cómo estás?", hora: "13:00", tipo: "recibido" }
        ]
    },
    {
        id: 2,
        nombre: "María",
        foto: <img src={`${process.env.PUBLIC_URL}/img/maria.png`} alt="María" />,
        mensajes: [
            { autor: "María", texto: "¿Listo para la reunión?", hora: "14:00", tipo: "recibido" }
        ]
    }
];


export default Sidebar;
