import React, {useEffect,useState} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Obi from '../assets/img/Obi.png';
const Films = (props) => 
{
    const {idFilms} = useParams();
    const [film, setFilm] = useState({});
    const [resultado, setResultado] = useState(0);

    useEffect(() => {
        axios.get(`https://swapi.dev/api/films/${idFilms}`)
            .then(response =>  {
                setFilm({
                    title: response.data.title,
                    director: response.data.director,
                    producer: response.data.producer,
                    day: response.data.release_date
                })
                setResultado(0)
            }
            ).catch((err) =>  setResultado(err.response.status));
    },[idFilms])

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
                    <h1>{film.title}</h1>
                    <p>Director : {film.director}</p>
                    <p>Producer (s) : {film.producer}</p>
                    <p>Release Date : {film.day}</p>
                </div>
            } 
        </div>
    )
}

export default Films;