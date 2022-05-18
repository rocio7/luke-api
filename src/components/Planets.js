import React, {useEffect,useState} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Obi from '../assets/img/Obi.png';

const Planets = (props) => 
{
    const {idPlanets} = useParams();
    const [planet, setPlanet] = useState({});
    const [resultado, setResultado] = useState(0);

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${idPlanets}`)
            .then(response =>  {
                setPlanet({
                    name: response.data.name,
                    climate: response.data.climate,
                    terrain: response.data.terrain,
                    population: response.data.population
                })
                setResultado(0)
            }
            ).catch((err) => setResultado(err.response.status));
    },[idPlanets])

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
                        <h1>{planet.name}</h1>
                        <p>Climate : {planet.climate}</p>
                        <p>Terrain : {planet.terrain}</p>
                        <p>N° population : {planet.population}</p>
                    </div>
            } 
        </div>
    )
}

export default Planets;