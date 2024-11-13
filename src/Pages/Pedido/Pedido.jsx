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
                        <label className='buttonDate'></label>
                    </div>
                    <div className="image">
                        <video src="src/assets/PagePedido/PEDIDO_VIDEO_OFiCIAL.MP4" loop autoPlay></video>
                    </div>
                </div>
            </div>
        </>
    )
}


/*
const agora = new Date();

const day = String(agora.getDate()).padStart(2, '0')

const month = String(agora.getMonth() + 1).padStart(2, '0')

const year = String(agora.getFullYear())

const dateNow  = `${day}/${month}/${year}`




const pedido = new Date('01 09 2024')

const diffInTime = Math.abs(pedido - dateNow)

const timeInOneDay = 1000 * 60 * 60 * 24

const diffInDays = diffInTime / timeInOneDay

    console.log(diffInDays);
*/
/*
var dataPassado = new Date("September 09, 2024").getTime();

setInterval(function() {
    var dataAtual = new Date().getTime();

    var segundosTotais = (dataPassado - dataAtual)/1000
    console.log(segundosTotais)
},1000);
*/