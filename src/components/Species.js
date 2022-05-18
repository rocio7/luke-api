import React, {useEffect,useState} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Obi from '../assets/img/Obi.png';

const Species = (props) => 
{
    const {idSpecies} = useParams();
    const [specie, setSpecies] = useState({});
    const [resultado, setResultado] = useState(0);

    useEffect(() => {
        axios.get(`https://swapi.dev/api/species/${idSpecies}`)
            .then(response =>  {
                setSpecies({
                    name: response.data.name,
                    lifespan: response.data.average_lifespan,
                    films: response.data.films.length,
                    people: response.data.people.length
                })
                setResultado(0)
            }
            ).catch((err) => setResultado(err.response.status));
    },[idSpecies])

    return(
        <div className="d-flex justify-content-center margin">
            { 
                resultado === 404 ? 
                    <div className="cont-img">
                        <p>These are not the droids you are looking for.</p>
                        <img src={Obi} alt="Imagen Error" />
                    </div>
                :
                    <div >
                        <h1>{specie.name}</h1>
                        <p>Average lifespan : {specie.lifespan}</p>
                        <p>N° films : {specie.films}</p>
                        <p>N° characters : {specie.people}</p>
                    </div>
            } 
        </div>
    )
}

export default Species;