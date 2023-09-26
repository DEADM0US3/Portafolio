import CondicionAtmosferica from '../../Componentes/CondicionAtmosferica/CondicionAtmosferica.js'
import Navbar from '../../Componentes/Navbar/Navbar.js'
import '../main.css'

function EstadoTiempo() {
    return (
        <>
            <div className='dashboard-container'>
                <div className='contenedor-navbar'>
                    <h2 className='APIsTittle'>APIs</h2>
                    <Navbar value ='weather' />
                </div>

                <div className='api-content'>
                    <CondicionAtmosferica/>
                </div>
            </div>
        </>
    )
}

export default EstadoTiempo