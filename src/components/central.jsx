import { Button } from "bootstrap"
import "./central.css"
function Central () {
    return (
        <>
        <div className="conteiner-principal">
            <div className="infos-perfil">
                <div className="foto-perfil">
                
                     <img id = "perfil"src="https://placehold.co/500x500" alt="foto-perfil" />

                </div>
                <div className="usuario">
                    <h1 id = "nome">junin.8p</h1>
                    <p id = "seguidores"> 2 <strong class= "postagem">postagem</strong>  561 <strong class= "postagem">seguidores</strong>       853 <strong class= "postagem">seguintes</strong></p>
                    <div className="seguir">

                    <button className = "botoes" type="submit">Editar</button>
                    <button className = "botoes" type="submit">Editar</button>
                    

                </div>
                </div>
            
            </div>
            

        </div>


        </>
    )
}

export default Central