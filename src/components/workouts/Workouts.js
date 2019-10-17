import React, { useState, useEffect } from 'react';
import './workouts.css';

import Workout from './workout/Workout';


const testDataWorkouts = [
    {
    nameOfWorkout: 'Push Up',
    definition: 'description',
    result: 'sore arms',
    owner: 1
    },
    {   
    nameOfWorkout: 'Sit up',
    definition: 'description',
    result: 'sore stomach',
    owner: 1
    },
    {   
    nameOfWorkout: 'Plank',
    definition: 'description',
    result: 'sore sides and/or stomach',
    owner: 1
}]

const Workouts = (props) => {

    const [workouts, setWorkouts] = useState([]);

    const WorkoutRows = () => {

        const workoutColumns = {
            nameOfWorkout:'Workout Name',
            definition: 'Workout Definition',
            result: 'Workout Result',
            owner: 'Owner Id'
        }
        return [<Workout key={'column names'} testData={workoutColumns} />].concat(
            testDataWorkouts.map((workoutInfo, index) => {
                // console.log(workoutInfo, index);
                return <Workout key={index} testData={workoutInfo} />
            })
        )
    }
    return (
        <table>
            <tbody>
            {/* <Workout testData={testDataWorkouts} /> */}
            {WorkoutRows()}
            </tbody>
        </table>
    )
}


export default Workouts;