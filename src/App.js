
import './App.css';
import { useState } from 'react'
import { baseColaboradores } from './baseColaboradores';
function App() {

  const [nuevoColaborador, setNuevoColaborador] = useState({ nombre: "", correo: "" });
  const [listadoColaboradores, setListadoColaboradores] = useState(baseColaboradores)

  const capturaInput = (e, propiedad) => {
    setNuevoColaborador({ ...nuevoColaborador, [propiedad]: e.target.value })
    console.log(nuevoColaborador)

  }
  const envioDatos = () => {
    setListadoColaboradores([...listadoColaboradores, { ...nuevoColaborador, id: Date.now() }])
  }
  const [buscadorColaboradores, setBuscadorColaboradores] = useState("");

  const buscadorColaborador = (e) => {
    setBuscadorColaboradores(e.target.value)
  }


  return (
    <div className="App">

      <div>
        <div className='buscador'><h2>Buscador de colaboradores</h2><input onChange={buscadorColaborador}></input><br></br><br></br></div>
        <div className='contenedor'><h2>Agregar Colaboradores</h2><label> Nombre del colaborador </label>
          <input name="name" placeholder='Ingrese el nombre' onChange={(ev) => {
            capturaInput(ev, "nombre")
          }} ></input>
          <label> Correo del colaborador </label>
          <input type="email" name="correo" placeholder='Ingrese el correo' onChange={(ev) => { capturaInput(ev, "correo") }} />
          <br></br><br></br><button onClick={envioDatos}>Agregar colaborador</button></div>

        <ul>
          <h2>Listado de Colaboradores</h2>
          {listadoColaboradores.filter((colaborador) => {
            return (
              colaborador.nombre.toLowerCase().includes(buscadorColaboradores.toLocaleLowerCase()))
          }).map(colaborador => { return < li key={colaborador.id} > nombre: {colaborador.nombre}- correo: {colaborador.correo}</li> })}
        </ul></div >

    </div>
  );
}

export default App;
