//gabriela cespedes
import { Component } from "react"
import Persona from "../Persona/Persona"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personas: [
        {
          nombre: "Jane",
          apellido: "Doe",
          edad: 45,
          colorCabello: "Black"
        },
        {
          nombre: "John",
          apellido: "Smith",
          edad: 88,
          colorCabello: "Brown"
        },
      ]
    }
  }
 //metodo para ingremetar edad de una persona
  incrementarEdad = (index) => {
      this.setState({
        personas: this.state.personas.map((persona, i) => {
          if (i === index) {
            return { ...persona, edad: persona.edad + 1 };
          }
          return persona;
        })
      });
  }

  render() {
    return(
      <>
      {this.state.personas.map((persona, index) => {
        return (<Persona key = {index}
                        nombre = {persona.nombre}
                        apellido = {persona.apellido}
                        edad = {persona.edad}
                        colorCabello = {persona.colorCabello}
                        incrementarEdad= {() => this.incrementarEdad(index)}/>)
      })
      }
      </>
    )
  }
}

export default App
