import React, { Component } from "react";

class Reminder extends Component {
  render() {
    return (
      <div className="recordatorio">
        <h3>Selección anterior: {this.props.prevChoice}</h3>
        <h4>Historial de opciones elegidas: </h4>
        <ul>{this.props.history}</ul>
      </div>
    );
  }
}

export default Reminder;
