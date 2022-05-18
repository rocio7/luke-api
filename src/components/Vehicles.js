import React, {useEffect,useState} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Obi from '../assets/img/Obi.png';

const Vehicles = (props) => 
{
    const {idVehicles} = useParams();
    const [vehicle, setVehicle] = useState({});
    const [resultado, setResultado] = useState(0);

    useEffect(() => {
        axios.get(`https://swapi.dev/api/vehicles/${idVehicles}`)
            .then(response =>  {
                setVehicle({
                    name: response.data.name,
                    model: response.data.model,
                    clase: response.data.vehicle_class,
                    manufacturer: response.data.manufacturer,
                    passengers: response.data.passengers,
                    crew : response.data.crew
                })
                setResultado(0)
            }
            ).catch((err) => setResultado(err.response.status));
    },[idVehicles])

    return(
        <div className="d-flex justify-content-center margin">
            { 
                resultado === 404 ? 
                    <div className="cont-img">
                        <p>These are not the droids you are looking for.</p>
                        <img src={Obi} alt="Imagen Error" />
                    </div>
                :
                    <div>
                        <h1>{vehicle.name}</h1>
                        <p>Model : {vehicle.model}</p>
                        <p>Clase : {vehicle.clase}</p>
                        <p>Manufacturer : {vehicle.manufacturer}</p>
                        <p>N° passengers : {vehicle.passengers}</p>
                        <p>N° crew : {vehicle.crew}</p>
                    </div>
            } 
        </div>
    )
}

export default Vehicles;