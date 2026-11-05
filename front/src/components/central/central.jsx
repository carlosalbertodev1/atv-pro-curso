import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
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
                    <p id = "seguidores"> 2 <strong class= "postagem">postagem</strong>  561 <strong class= "postagem">seguidores</strong> 853 <strong class= "postagem">seguintes</strong></p>
                    <p id = "bios">
                    TypeError: sleep() missing 8 required hours<br/>
                    Dev junior.py carregando... 12% <br/>
                    18:24…💨🍃<br/>
                    💍<br/>
                    18y</p> 

                    <div className="seguir">

                    <button className = "botoes" type="submit">Editar</button>
                    <button className = "botoes" type="submit">Ver arquivos</button>

                    </div>
                </div>
                <div className="destaques">
                    <div className = "destacando">
                        <div class="container-fluid">
                            <img className = "fotinhas"src="https://placehold.co/150x150" alt="" />
                            <p>Destaque 1</p>
                        </div>
                        <div class="container-fluid">
                            <img className = "fotinhas"src="https://placehold.co/150x150" alt="" />
                            <p>Destaque 2</p>
                        </div>
                        <div class="container-fluid">
                            <img className = "fotinhas"src="https://placehold.co/150x150" alt="" />
                            <p>Destaque 3</p>
                        </div>

                        </div>
                </div>
            </div>

        </div>
        </>
    )
}

export default Central