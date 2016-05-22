import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component {
	constructor(){
		super();
		this.nombre = "Liam";
	}
	getNombre(){
		return this.nombre;
	}
	render() {
		return(<h1>Hola {this.getNombre()}</h1>);
	}
}

const app = document.getElementById('app');

ReactDOM.render(<Layout/>,app);