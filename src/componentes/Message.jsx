import React from "react";
import "../style/Message.css";

function Message({ autor, texto, hora, tipo }) {
    return (
        <div className={`mensaje ${tipo}`}>
            <div className="contenido">
                
                <p className="texto">{texto}</p>
                <span className="hora">{hora}</span>
                
            </div>
        </div>
    );
}

export default Message;