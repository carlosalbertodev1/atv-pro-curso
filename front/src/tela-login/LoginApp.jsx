import './LoginApp.css'
import FundoPreto from "../assets/fundo.avif"

function Login () {
    return (
        <>
        <div className="principal">
            <div className="navbar">
                <nav class="navbar md:navbar-expand bg-1">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">INSTAGRAM</a>
                        <button class="btn-icon navbar-toggler" type="button" data-bs-toggle="drawer" data-bs-target="#navbarDrawer" aria-controls="navbarDrawer" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon" aria-hidden="true"></span>
                        </button>
                        
                    </div>

                </nav>
            </div>
            <div className="conteiner-infos">/
                <div className="carrossel">
                    <div className="add-foto">
                        <img src={FundoPreto} alt="telapreta" />
                        <div className="titulo">

                            <h1>Felicidade, interatividade e conhecimento.</h1>

                        </div>
                        <div className="foto">
                            <img id = "fotinha"src="https://placehold.co/700x400" alt="erapraterfoto" />
                        </div>
                    </div>
                </div>
                <div className="login">
                    <div className="infoslogin">
                        <div className="logue">
                            <h1>log into instagram</h1>
                        </div>
                        <div className="caixa-email">
                            <div className='comentario'>
                                <label for="pedir-email">Email address</label>

                            </div>
                                <input type="email" className="inputs" id="pedir-email" placeholder="name@example.com"/>
                        </div>
                        <div className="caixa-senha">
                            <div className='comentario'>
                            <label for="pedir-senha">Password</label>

                            </div>
                                <input type="password" className="inputs" id="pedir-senha" placeholder="Password"/>
                        </div>

                        <div class="d-grid gap-2">
                            <button class="btn-solid theme-primary" type="button">Button</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Login;