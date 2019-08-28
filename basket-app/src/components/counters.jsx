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

  handleDelete = counterId => {
    console.log("handleEvent called", counterId);
    const updtedCounters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: updtedCounters });
  };

  render() {
    return (
      <div>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            value={counter.value}
            id={counter.id}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
