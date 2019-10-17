import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';
import Workouts from './components/workouts/Workouts';

function App() {

const [sessionToken, setSessionToken] = useState(undefined);
// the first value is equal to what we initially pass into our useState. In this case it is 'undefined'

const viewConductor = () => {
  return sessionToken !== undefined ? <Workouts token={sessionToken}/> : <Auth setSession=
  {setSessionToken}/>
}

  return (
    <div className="App">
    <Navbar />
    {/* <Auth />  */}
     {/* {sessionToken} */}
     {viewConductor()}
     
    </div>
  );
}

export default App;



// array destructuring

// let [first, second, third] = ['The Fellowship', 'Hunt for Red', 'U571'];
// gives a variable to each string inside of the array object.
//e.g. first = the fellowship, second = hunt for red, etc etc
// console.log(first, second, third);


// let[a, , c] = ['mercury', 'venus', 'earth'];
// console.log(a, c);


// let planet = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Uranus', 'Neptune', 'Pluto'];
// let [first, , third, ...others] = planet;
// console.log(first);
// console.log(third);
// console.log(others);
