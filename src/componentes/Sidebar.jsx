import React from "react";
import "../style/Sidebar.css";


function Sidebar({ contactos, onSelectContacto }) {
    return (
        <div className="sidebar">
            {contactos.map((c) => (
                <div
                    key={c.id}
                    className="contacto"
                    onClick={() => onSelectContacto(c)}  // 👈 actualiza el contacto seleccionado
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
        foto: "/img/juan.png",
        mensajes: [
            { autor: "Juan", texto: "Hola, ¿cómo estás?", hora: "13:00", tipo: "recibido" }
        ]
    },
    {
        id: 2,
        nombre: "María",
        foto: "/img/maria.png",
        mensajes: [
            { autor: "María", texto: "¿Listo para la reunión?", hora: "14:00", tipo: "recibido" }
        ]
    }
];


export default Sidebar;
