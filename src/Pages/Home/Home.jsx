import { Header } from '../../Components/Hedaer/Header';
import './Home.css'

export function Home() {
    return (
        <>
        <Header />
            <div className="homeBody">
                <div className="container">
                    <div className="text">
                        <h2>TESTE SOBRE ALINHAMENTO DE TEXTO PARA DIV</h2>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum omnis exercitationem voluptates perferendis temporibus pariatur, et animi ipsum, accusamus doloremque unde fugit veniam repudiandae, cumque dignissimos rem voluptatem eligendi soluta?
                        </p>
                    </div>
                    <div className="image"></div>
                </div>
            </div>
        </>
    )
}