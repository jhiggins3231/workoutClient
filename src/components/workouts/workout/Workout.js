import React from 'react';
import './workout.css';

const Workout = (props) => {
    console.log(props);
    return (
        <tr>
            <td>{props.testData.nameOfWorkout}</td> 
            <td>{props.testData.definition}</td>
            <td>{props.testData.result}</td>
            <td>{props.testData.owner}</td>
        </tr>
    )
}



export default Workout;