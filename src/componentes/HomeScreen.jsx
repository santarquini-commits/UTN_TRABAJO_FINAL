import React, { useState } from "react";
import Sidebar from "./Sidebar";
import ChatScreen from "./ChatScreen";
import "../style/HomeScreen.css";

function HomeScreen() {
    const [contactos, setContactos] = useState([
        {
            id: 1,
            nombre: "Juan",
            foto: `${process.env.PUBLIC_URL}/img/juan.png`,
            mensajes: [
                { autor: "Juan", texto: "Hola, ¿cómo estás?", hora: "13:00", tipo: "recibido" }
            ]
        },
        {
            id: 2,
            nombre: "María",
            foto: `${process.env.PUBLIC_URL}/img/maria.png`,
            mensajes: [
                { autor: "María", texto: "¿Listo para la reunión?", hora: "14:00", tipo: "recibido" }
            ]
        }
    ]);

    const [contactoSeleccionado, setContactoSeleccionado] = useState(null);

    // función para enviar mensaje al contacto actual
    const enviarMensaje = (texto) => {
        if (!contactoSeleccionado || texto.trim() === "") return;

        const horaActual = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

        const nuevoMensaje = {
            autor: "Tú",
            texto,
            hora: horaActual,
            tipo: "enviado"
        };

        setContactos(contactos.map(c =>
            c.id === contactoSeleccionado.id
                ? { ...c, mensajes: [...c.mensajes, nuevoMensaje] }
                : c
        ));
    };

    return (
        <div className="home-screen">
            <Sidebar contactos={contactos} onSelectContacto={setContactoSeleccionado} />
            <div className="chat-area">
                {contactoSeleccionado ? (
                    <ChatScreen
                        contacto={contactos.find(c => c.id === contactoSeleccionado.id)} // 👈 contacto actualizado
                        enviarMensaje={enviarMensaje}
                    />
                ) : (
                    <p className="placeholder">Selecciona un chat</p>
                )}
            </div>
        </div>
    );
}

export default HomeScreen;
