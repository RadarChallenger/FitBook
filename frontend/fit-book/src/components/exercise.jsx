import React, { Component } from 'react';

class exercise extends React.Component {
    render() { 
        return (
        <React.Fragment>
            <div className='container'>        
                <h3>{this.props.exercise.exerciseName}</h3>
                <h3>{this.props.exercise.completeSetCount}/{this.props.exercise.sets} SETS</h3>
                <h3>{this.props.exercise.reps} REPS</h3>
                <button type="button" className="btn btn-danger btn-number"  data-type="minus" data-field="quant[2]">
                    <span class="glyphicon glyphicon-minus"></span>
                </button>
                <button onClick={() => this.props.onIncrement(this.props.exercise)} type="button" className="btn btn-success btn-number" data-type="plus" data-field="quant[2]">
                    <span class="glyphicon glyphicon-plus"></span>
                </button>
            </div>
        </React.Fragment>
        );
    }
}
 
export default exercise;