import Home from '../../Componentes/Home/Home.js'
import Navbar from '../../Componentes/Navbar/Navbar.js'
import '../main.css'

function Inicio() {
    return (
        <>
            <div className='dashboard-container'>
                <div className='contenedor-navbar'>
                    <h2 className='APIsTittle'>APIs</h2>
                    <Navbar value ='home'/>
                </div>

                <div className='api-content'>
                    <Home/>
                </div>
            </div>
        </>
    )
}

export default Inicio