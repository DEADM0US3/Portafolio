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
    const [estadoActual, setEstadoActual] = useState("Quintana Roo");
    const [cargando, setCargando] = useState(false);

    const consultarDatos = () => {
        setCargando(true); // Mostrar el mensaje de carga

        fetch(`${url}?state=${estadoActual}`)
            .then((res) => res.json())
            .then((condicionAtm) => {
                setDatos(condicionAtm.results);
                setCargando(false); // Ocultar el mensaje de carga cuando los datos se carguen
            })
            .catch((error) => {
                console.error("Error al obtener datos:", error);
                setCargando(false); // Ocultar el mensaje de carga en caso de error
            });
    }

    useEffect(() => {
        consultarDatos();
    }, [estadoActual]);

    return (
        <>
            <div>
                <h1>Estado del Tiempo</h1>
            </div>
            <select className="selectState"
                onChange={(e) => setEstadoActual(e.target.value)}
            >
                <option value="">Selecciona una opción</option>
                {estadosMx.map((opcion) => (
                    <option key={opcion.id} value={opcion.name}>
                        {opcion.name}
                    </option>
                ))}
            </select>

            {cargando ? (
                <p>Cargando datos...</p>
            ) : (
                <div className="container-cards">
                    {Array.from(new Set(datos.map((ciudad) => ciudad.name))).map((nombreCiudad, index) => {
                        const ciudadData = datos.find((ciudad) => ciudad.name === nombreCiudad);
                        return (
                            <div key={index} className="card">
                                <h6>Ciudad: {nombreCiudad}</h6>
                                <p><i>Estado del clima: {ciudadData.skydescriptionlong}</i></p>
                                <p><i>Temperatura: {ciudadData.tempc}°</i></p>
                            </div>
                        );
                    })}
                </div>
            )}
        </>
    );
}

export default CondicionAtmosferica;
