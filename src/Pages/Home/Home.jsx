import { Header } from '../../Components/Hedaer/Header';
import './Home.css'

export function Home() {
    return (
        <>
        <Header />
            <div className="homeBody">
                <a href="/Pedido" className="buttonHref">
                    <div className="container">
                        <div className="text">
                            <h2>ONDE TUDO COMEÇOU</h2>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum omnis exercitationem voluptates perferendis temporibus pariatur
                            </p>
                        </div>
                        <div className="image">
                            <img src="src/assets/175BCBD1-DDF5-4961-9449-16C9499CFE6F.JPEG" alt="One" />
                        </div>
                    </div>
                </a>
                <a href="#" className="buttonHref">
                    <div className="containerTwo">
                        <div className="imageTwo">
                            <img src="src/assets/IMG_9643.JPEG" alt="Two" />
                        </div>
                        <div className="textTwo">
                            <h2>TESTE SOBRE ALINHAMENTO DE TEXTO PARA DIV</h2>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum omnis exercitationem voluptates perferendis temporibus pariatur
                            </p>
                        </div>
                    </div>
                </a>
                <a href="#" className="buttonHref">
                    <div className="container">
                        <div className="text">
                            <h2>TESTE SOBRE ALINHAMENTO DE TEXTO PARA DIV</h2>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum omnis exercitationem voluptates perferendis temporibus pariatur
                            </p>
                        </div>
                        <div className="image">
                            <img src="src/assets/IMG_9136.JPEG" alt="Three" />
                        </div>
                    </div>
                </a>
                <a href="#" className="buttonHref">
                    <div className="containerTwo">
                        <div className="imageTwo">
                            <img src="src/assets/IMG_0778.JPEG" alt="Four" />
                        </div>
                        <div className="textTwo">
                            <h2>TESTE SOBRE ALINHAMENTO DE TEXTO PARA DIV</h2>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum omnis exercitationem voluptates perferendis temporibus pariatur
                            </p>
                        </div>
                    </div>
                </a>
            </div>
        </>
    )
}