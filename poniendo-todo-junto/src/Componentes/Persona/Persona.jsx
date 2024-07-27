//gabriela cespedes
import { Component } from "react"

class Persona extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <>
            <h2>{this.props.apellido}, {this.props.nombre} </h2>
            <p>Age: {this.props.edad}</p>
            <p>Hair Color: {this.props.colorCabello}</p>
            <button onClick={this.props.incrementarEdad}>Birthday Button fot {this.props.nombre} {this.props.apellido}</button>
            </>
        )
    }
}
export default Persona;