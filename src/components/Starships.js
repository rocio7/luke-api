import React, {useEffect,useState} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Obi from '../assets/img/Obi.png';

const Starships = (props) => 
{
    const {idStarship} = useParams();
    const [starships, setStarships] = useState({});
    const [resultado, setResultado] = useState(0);

    useEffect(() => {
        axios.get(`https://swapi.dev/api/starships/${idStarship}`)
            .then(response =>  {
                setStarships({
                    name: response.data.name,
                    model: response.data.model,
                    manufacturer: response.data.manufacturer,
                    length: response.data.length,
                    passengers: response.data.passengers
                })
                setResultado(0)
            }
            ).catch((err) => setResultado(err.response.status));
    },[idStarship])

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
                        <h1>{starships.name}</h1>
                        <p>Model : {starships.model}</p>
                        <p>Manufacturer : {starships.manufacturer}</p>
                        <p>Length : {starships.length}</p>
                        <p>N° passengers : {starships.passengers}</p>
                    </div>
            } 
        </div>
    )
}

export default Starships;