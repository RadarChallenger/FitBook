import React, { Component } from 'react';
import Exercise from './exercise';

class workout extends React.Component {
    state = {
        workoutList: [
            { id: 0, exerciseName: "Bench Press", sets: 4, reps: 8, completeSetCount: 0 },
            { id: 1, exerciseName: "Incline Dumbell Press", sets: 3, reps: 12, completeSetCount: 0 },
            { id: 2, exerciseName: "Over Head Press", sets: 4, reps: 8, completeSetCount: 0 },
            { id: 3, exerciseName: "Lateral Side Raises", sets: 3, reps: 10, completeSetCount: 0 }
        ]
    }

    handleSetIncrement = (exercise) => {
        const workoutList = [...this.state.workoutList];
        const index = workoutList.indexOf(exercise);
        workoutList[index] = { ...exercise };
        workoutList[index].completeSetCount++;
        this.setState({ workoutList });
    }

    handleSetDecrement = (exercise) => {

    }

    handleSetComplete = (exercise) => {

    }

    handleWorkoutFinish = () => {

    }

    render() { 
        return (
            <div>
                {this.state.workoutList.map((exercise) => (
                    <Exercise 
                        key={exercise.id}
                        exercise={exercise}
                        onIncrement={this.handleSetIncrement}
                        onDecrement={this.handleSetDecrement}
                    />
                ))}
            </div>
        );
    }
}
 
export default workout;