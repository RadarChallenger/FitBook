import React, { Component } from "react";

class exercise extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="p-2">
          <div className="container">
            <div className="row" align="center">
              <div className="col">
                <span>{this.props.exercise.exerciseName}</span>
              </div>
              <div className="col">
                <span>
                  {this.props.exercise.completeSetCount}/
                  {this.props.exercise.sets} SETS
                </span>
              </div>
              <div className="col">
                <span>{this.props.exercise.reps} REPS</span>
              </div>
            </div>
            <br />
          </div>
          <div className="container">
            <div className="row" align="center">
              <div className="col">
                <input
                  type="weight"
                  className="form-control"
                  id="weightInput"
                  placeholder="weight"
                />
              </div>
              <div className="col">
                <button
                  onClick={() => this.props.onDecrement(this.props.exercise)}
                  type="button"
                  className="btn btn-danger btn-number"
                  data-type="minus"
                  data-field="quant[2]"
                >
                  <span className="glyphicon glyphicon-minus">-</span>
                </button>
                <button
                  onClick={() => this.props.onIncrement(this.props.exercise)}
                  type="button"
                  className="btn btn-success btn-number"
                  data-type="plus"
                  data-field="quant[2]"
                >
                  <span className="glyphicon glyphicon-plus">+</span>
                </button>
              </div>
            </div>
            <hr
            style={{
              color: "#051F20",
              height: 5,
            }}
          />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default exercise;
