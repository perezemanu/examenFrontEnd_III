import data from './components/data.json';
import React, { Component } from 'react';
import Options from './components/Options';
import Reminder from  './components/Reminder';
import Swal from 'sweetalert2';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [],
      counter: 0,
      prevChoice: '',
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.counter !== this.state.counter) {
      this.state.history.push(this.state.prevChoice);
    }
  }

  handleClick = (e) => {
    const id = e.target.id;
    if (this.state.counter >= 7) {
      Swal.fire({
        title: 'Bienvenido nuevamente al mundo real! ',
        text: "¿Volvemos a comenzar la aventura?",
        // icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#4c2882',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Volvamos a empezar!'
      }).then((result) => {
        if (result.isConfirmed) {
          // eslint-disable-next-line no-restricted-globals
          location.reload();
        }
      });
    } else if (id === 'A' && this.state.prevChoice !== 'A') {
      this.setState({
        counter: this.state.counter + 1,
        prevChoice: 'A',
      });
    } else if (id === 'A' && this.state.prevChoice === 'A') {
      this.setState({
        counter: this.state.counter + 2,
      });
    } else if (id === 'B' && this.state.prevChoice === 'A') {
      this.setState({
        counter: this.state.counter + 3,
        prevChoice: 'B',
      });
    } else if (id === 'B'&& this.state.prev !== "A") {
      this.setState({
        counter: this.state.counter + 2,
        prevChoice: 'B',
      });
    }
  };

  render() {
    return (
      <div className="layout">
        <h1 className="historia">{data[this.state.counter].historia}</h1>
        <Options
          handleClick={this.handleClick}
          optionA={data[this.state.counter].opciones.a}
          optionB={data[this.state.counter].opciones.b}
        />
        <Reminder
          prevChoice={this.state.prevChoice}
          history={this.state.history.map(
            (e, index) => (
              <li key={index}>{e}</li>
            ),
            data[this.state.counter].id
          )}
        />
      </div>
    );
  }
}

export default App;
