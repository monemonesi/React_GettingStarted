import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      { id: 0, value: 10 },
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 }
    ]
  };

  handleIncrement = counter => {
    const updatedCounters = [...this.state.counters];
    const index = updatedCounters.indexOf(counter);
    updatedCounters[index] = { ...counter };
    updatedCounters[index].value++;
    this.setState({ counters: updatedCounters });
  };

  handleDelete = counterId => {
    console.log("handleEvent called", counterId);
    const updtedCounters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: updtedCounters });
  };

  handleReset = () => {
    const updatedCounters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counter: updatedCounters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
