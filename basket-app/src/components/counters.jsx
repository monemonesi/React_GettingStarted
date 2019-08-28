import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
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
      <div>
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
