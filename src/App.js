import React, {useState} from "react";
import {BrowserRouter, Route, Switch,Link} from 'react-router-dom'
import Select from 'react-select'
import './App.css'
import Films from './components/Films';
import People from './components/People';
import Planets from "./components/Planets";
import Species from "./components/Species";
import Starships from "./components/Starships";
import Vehicles from "./components/Vehicles";

const opciones = [
  { value: 'people', label:'People'},
  { value: 'films', label:'Films'},
  { value: 'starships', label:'Starships'},
  { value: 'vehicles', label:'Vehicles'},
  { value: 'species', label:'Species'},
  { value: 'planets', label:'Planets'}
]

const App = () => {

  const [url,setUrl] = useState("");
  const [opcion,setOpcion] = useState("")
  const [identificador, setIdenficador] = useState("");

  const SelectChange = ({value}) => 
  {
    setOpcion(value);
  }

  const limpiarCampo = () => 
  {
    setIdenficador("");
  }

  return (
    <div className="container margin">
      <BrowserRouter>
        <div className="row ">
          <div className="col-6">
            <div className="mb-3 row">
              <label className="col-sm-3 col-form-label">Search for : </label>
              <div className="col-sm-9">
                <Select options={opciones} onChange = {SelectChange}/>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="row d-flex align-items-center">
              <div className="col-auto">
                <label className="visually-hidden">id</label>
              </div>
              <div className="col-auto">
                <input className="form-control" type = "number"  onChange={(e) => {setIdenficador(e.target.value);setUrl("/"+opcion+"/"+e.target.value)}} value={identificador}/>
              </div>
              <div className="col-auto">
                <Link to = {url} className="btn btn-secondary" onClick={limpiarCampo}>Search</Link>
              </div>
            </div>
          </div>
        </div>
        <Switch>
          <Route path="/people/:idPeople" render = {(routerProps) => <People {... routerProps}/>}/>
          <Route path="/films/:idFilms" render = {(routerProps) => <Films {... routerProps}/>}/>
          <Route path="/starships/:idStarship" render = {(routerProps) => <Starships {... routerProps}/>}/>
          <Route path="/vehicles/:idVehicles" render = {(routerProps) => <Vehicles {... routerProps}/>}/>
          <Route path="/species/:idSpecies" render = {(routerProps) => <Species {... routerProps}/>}/>
          <Route path="/planets/:idPlanets" render = {(routerProps) => <Planets {... routerProps}/>}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;