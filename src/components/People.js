import React, {useEffect,useState} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Obi from '../assets/img/Obi.png';

const People = (props) => 
{
    const {idPeople} = useParams();
    const [people, setPeople] = useState({});
    const [hw, setHw] = useState("");
    const [resultado, setResultado] = useState(0);

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${idPeople}`)
            .then(response => {
                setPeople({
                    name: response.data.name,
                    height: response.data.height,
                    hair: response.data.hair_color,
                    birth: response.data.birth_year,
                    homeworld: response.data.homeworld
                })
                setResultado(0)
            }
            ).catch((err) => setResultado(err.response.status));
    },[idPeople])

    useEffect(() => {
        axios.get(`${people.homeworld}`)
            .then(response => 
                setHw(response.data.name)
            )
    },[people.homeworld])

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
                        <h1>{people.name}</h1>
                        <p>Height : {people.height}</p>
                        <p>Hair Color : {people.hair}</p>
                        <p>Birth Year : {people.birth}</p>
                        <p>Homeworld : {hw}</p>
                    </div>
            } 
        </div>
    )
}

export default People;