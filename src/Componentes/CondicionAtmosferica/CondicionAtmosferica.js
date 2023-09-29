import React, { useState, useEffect } from "react";
import './CondicionAtmosferica.css'

function CondicionAtmosferica() {
    const url = "https://api.datos.gob.mx/v1/condiciones-atmosfericas";
    const estadosMx = [
                { id: 1, name: "Aguascalientes" },
                { id: 2, name: "Baja California" },
                { id: 3, name: "Baja California Sur" },
                { id: 4, name: "Campeche" },
                { id: 5, name: "Chiapas" },
                { id: 6, name: "Chihuahua" },
                { id: 7, name: "Ciudad de Mexico" },
                { id: 8, name: "Coahuila" },
                { id: 9, name: "Colima" },
                { id: 10, name: "Durango" },
                { id: 11, name: "Estado de Mexico" },
                { id: 12, name: "Guanajuato" },
                { id: 13, name: "Guerrero" },
                { id: 14, name: "Hidalgo" },
                { id: 15, name: "Jalisco" },
                { id: 16, name: "Michoacan" },
                { id: 17, name: "Morelos" },
                { id: 18, name: "Nayarit" },
                { id: 19, name: "Nuevo Leon" },
                { id: 20, name: "Oaxaca" },
                { id: 21, name: "Puebla" },
                { id: 22, name: "Queretaro" },
                { id: 23, name: "Quintana Roo" },
                { id: 24, name: "San Luis Potosi" },
                { id: 25, name: "Sinaloa" },
                { id: 26, name: "Sonora" },
                { id: 27, name: "Tabasco" },
                { id: 28, name: "Tamaulipas" },
                { id: 29, name: "Tlaxcala" },
                { id: 30, name: "Veracruz" },
                { id: 31, name: "Yucatan" },
                { id: 32, name: "Zacatecas" }];

    const [datos, setDatos] = useState([]);
    const [estadoActual, setEstadoActual] = useState("");
    const [cargando, setCargando] = useState(false);
    const [estadoVacio, setEstadoVacio] = useState(false);

    const consultarDatos = () => {
        if (estadoActual === "") {
            setEstadoVacio(true);
            return;
        }

        setCargando(true);

        fetch(`${url}?state=${estadoActual}`)
            .then((res) => res.json())
            .then((condicionAtm) => {
                setDatos(condicionAtm.results);
                setCargando(false);
            })
            .catch((error) => {
                console.error("Error al obtener datos:", error);
                setCargando(false);
            });
    }

    useEffect(() => {
        consultarDatos();
    }, [estadoActual]);

    return (
        <>
            <div>
                <h1 className=' font-bold text-4xl'>Estado del Tiempo</h1>
            </div>
            <select className="selectState"
                onChange={(e) => [setEstadoActual(e.target.value), setEstadoVacio(false)]}
                disabled={cargando ? true : false}
            >
                <option value="" >Selecciona una opción</option>
                {estadosMx.map((opcion) => (
                    <option key={opcion.id} value={opcion.name}>
                        {opcion.name}
                    </option>
                ))}
            </select>

            {estadoVacio ? <p style={{ color: "red", fontSize: "30px" }}>Por favor, selecciona un estado.</p> : null}

            {cargando ? (
                <p style={{fontSize: "30px"}}>Cargando datos...</p>
            ) : 
            datos.length == 0 && estadoVacio == false ? (<p style={{ color: "red", textAlign: "center", fontSize: "30px"}}>Sin datos para mostrar</p>) : 
            (
                <div className="container-cards">
                    {Array.from(new Set(datos.map((ciudad) => ciudad.name))).map((nombreCiudad, index) => {
                        const ciudadData = datos.find((ciudad) => ciudad.name === nombreCiudad);

                        return (
                            <div key={index} className="card">
                                <h6>Ciudad: {nombreCiudad}</h6>
                                <p><i>Estado del clima: {ciudadData.skydescriptionlong}
                                {/* {ciudadData.skydescriptionlong.toLowerCase().includes("soleado") ? "☀️" :
                                ciudadData.skydescriptionlong.toLowerCase().includes("nublado") ? "☁️" : 
                                ciudadData.skydescriptionlong.toLowerCase().includes("lluv") ? "🌧️" : 
                                ciudadData.skydescriptionlong.toLowerCase().includes("tor") ? "⛈️" : null
                                } */}
                                </i></p>
                                <p><i>Temperatura: {ciudadData.tempc}°</i></p>
                                <p style={{fontSize:"30px"}}>{ciudadData.skydescriptionlong.toLowerCase().includes("soleado") ? "☀️" :
                                ciudadData.skydescriptionlong.toLowerCase().includes("nublado") ? "☁️" : 
                                ciudadData.skydescriptionlong.toLowerCase().includes("lluv") ? "🌧️" : 
                                ciudadData.skydescriptionlong.toLowerCase().includes("tor") ? "⛈️" : null
                                }</p>
                            </div>
                        );
                    })}
                    
                </div>
            )}
        </>
    );
}

export default CondicionAtmosferica;
