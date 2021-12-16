import React, { Component } from "react";
import Exercise from "./exercise";
import Header from "./header";

class workout extends React.Component {
  state = {
    workoutList: [
      {
        id: 0,
        exerciseName: "Bench Press",
        sets: 4,
        reps: 8,
        completeSetCount: 0,
      },
      {
        id: 1,
        exerciseName: "Incline Dumbell Press",
        sets: 3,
        reps: 12,
        completeSetCount: 0,
      },
      {
        id: 2,
        exerciseName: "Over Head Press",
        sets: 4,
        reps: 8,
        completeSetCount: 0,
      },
      {
        id: 3,
        exerciseName: "Lateral Side Raises",
        sets: 3,
        reps: 10,
        completeSetCount: 0,
      },
    ],
  };

  styles = {
    backgroundColor: "#379683",
  };

  handleSetIncrement = (exercise) => {
    const workoutList = [...this.state.workoutList];
    const index = workoutList.indexOf(exercise);
    workoutList[index] = { ...exercise };
    if (workoutList[index].completeSetCount < workoutList[index].sets) {
      workoutList[index].completeSetCount++;
    }
    this.setState({ workoutList });
  };

  handleSetDecrement = (exercise) => {
    const workoutList = [...this.state.workoutList];
    const index = workoutList.indexOf(exercise);
    workoutList[index] = { ...exercise };
    if (workoutList[index].completeSetCount > 0) {
      workoutList[index].completeSetCount--;
    }
    this.setState({ workoutList });
  };

  handleSetComplete = (exercise) => {};

  handleWorkoutFinish = () => {};

  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="" style={this.styles}>
          {this.state.workoutList.map((exercise) => (
            <Exercise
              key={exercise.id}
              exercise={exercise}
              onIncrement={this.handleSetIncrement}
              onDecrement={this.handleSetDecrement}
            />
          ))}
          <div className="d-grid gap-2 col-6 mx-auto p-2">
            <button className="btn btn-primary" type="button">
              Finish Workout
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default workout;
