import React, { useState } from "react";
import Message from "./Message";
import "../style/ChatScreen.css";

function ChatScreen({ contacto, enviarMensaje }) {
    const [nuevoMensaje, setNuevoMensaje] = useState("");

    const handleEnviar = () => {
        enviarMensaje(nuevoMensaje);
        setNuevoMensaje("");
    };

    return (
        <div className="chat-container">
            <header className="chat-header">
                <img src={contacto.foto} alt={contacto.nombre} className="foto-perfil-header" />
                <h3>{contacto.nombre}</h3>
            </header>

            <section className="messages">
                {contacto.mensajes.map((m, i) => (
                    <Message key={i} autor={m.autor} texto={m.texto} hora={m.hora} tipo={m.tipo} />
                ))}
            </section>

            <footer className="chat-input">
                <input
                    type="text"
                    value={nuevoMensaje}
                    onChange={(e) => setNuevoMensaje(e.target.value)}
                    placeholder="Escribe un mensaje..."
                />
                <button onClick={handleEnviar}>Enviar</button>
            </footer>
        </div>
    );
}

export default ChatScreen;

