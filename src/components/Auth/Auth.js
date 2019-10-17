import React, {useState} from 'react';
import './Auth.css';

const Auth = (props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState('');

const title = () => {
    return login ? 'Login' : 'Signup'; //check state of login to see if it is true. displays login/signup depending on state of activity
}

const loginToggle = (event) => {
    event.preventDefault();
    setLogin(!login);//toggles between login/signup button states
    setEmail('');
    setPassword('');
    setFirstName('');
    setLastName('');
}

const signupFields = () => !login ?
    (
        <div>
            <label htmlFor='firstName'>First Name:</label>
            <br/>
            <input type='text' id='firstName' value={firstName} onChange={ (e) => setFirstName(e.target.value)}/>
            <br/>
            <label htmlFor='lastName'>Last Name:</label>
            <br/>
            <input type='text' id='lastName' value={lastName} onChange={ (e) => setLastName(e.target.value)}/>
        </div>
    ) : null;

return(
        <div>
            <form>
                <h1>{title()}</h1>
                {signupFields()}
                <label htmlFor='email'>Email:</label>
                <br/>
                <input type='text' id='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                <br/>
                <label htmlFor='password'>Password:</label>
                <br/>
                <input type='password' id='email' value={password} onChange={(e) => setPassword(e.target.value)}/>
                <br/>
                <button onClick={loginToggle}>Login/Sign Up</button>
                <br/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}


export default Auth;