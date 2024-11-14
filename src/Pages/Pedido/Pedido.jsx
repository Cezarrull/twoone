import { Header } from '../../Components/Hedaer/Header'
import './Pedido.css'

export function Pedido() {
    return(
        <>
        <Header />
            <div className="pedidoBody">
                <div className="container">
                    <div className="text">
                        <h2>DIA DO PEDIDO 01/09/2024</h2>
                        <p>
                            E foi no dia 01 de novembro de 2024, que convidei a mulher dos meus sonhos, para ser o amor da minha vida!
                        </p>
                        <p>
                            Juntos a <span className='buttonDate' id='days'>{message}</span> dias!
                        </p>
                    </div>
                    <div className="image">
                        <video src="src/assets/PagePedido/PEDIDO_VIDEO_OFiCIAL.MP4" loop autoPlay></video>
                    </div>
                </div>
            </div>
        </>
    )
}

// function CountDays
    const agora = new Date();
    const pedido = new Date('09 01 2024')
    
    const diffInTime = Math.abs(pedido - agora)
    
    const timeInOneDay = 1000 * 60 * 60 * 24
    
    const diffInDays = diffInTime / timeInOneDay + 1

    const diffInDaysValue = diffInDays.toFixed(0) 

    const message = String(diffInDaysValue);