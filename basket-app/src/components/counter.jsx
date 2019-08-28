import React, { Component } from "react";

//this must be a CONTROLLED COMPONENT:
//it receive all the data from the parent component, and it raise events when the components need to be updated
//all the data modification must be done in the parent component
class Counter extends Component {
  //the state has been removed because it is a controlled component
  /*
  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 }); //setState tell react that there have been an update!
  };*/

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-"; //hold all the common classes description
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
