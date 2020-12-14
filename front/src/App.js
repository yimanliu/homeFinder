import React, { useState } from 'react';
import './App.css';
import Dashboard from './components/scripts/Dashboard.js';
import Login from './components/scripts/Login.js';
import RegisterForm from './components/scripts/RegisterForm.js';

function App() {
  const [user, setUser] = useState();
  const [register, setRegister] = useState(false);
  const [login, setLogin] = useState(false);

  const setHomepage = () => {
    if (login && !user && !register) {
      return (
        <div className={'app-login'}>
          <Login setUser={setUser} setRegister={setRegister} />
        </div>
      );
    } else if (!login && !register && !user) {
      return (
        <div className="jumbotron" id="introduction">
          <h1 className="display-4" style={{ fontSize: '25px' }}>
            Welcome to BetterHome!
          </h1>
          <hr className="my-4" />
          <p>
            BetterHome is an online platform that helps people find a better
            place to live. Custom all your needs – from warm home to luxury
            house – use our website to find your next home.
          </p>
          <p className="lead">
            <button
              className="btn btn-primary btn-lg"
              style={{
                color: '#D70F4E',
                border: 'none',
                backgroundColor: 'transparent',
                fontSize: '17px',
              }}
              onClick={() => setLogin(true)}
            >
              {' '}
              <i
                className="fas fa-sign-in-alt"
                style={{ color: '#D70F4E', fontSize: '1.5em' }}
              ></i>
              Sign in to explore
            </button>
          </p>
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div className="App">
      <nav
        className="navbar navbar-light bg-light justify-content-between"
        id="home-nav"
        aria-label="homepagenav"
      >
        <h1 className="navbar-brand" style={{ color: '#d70f4e' }}>
          BetterHome
        </h1>
      </nav>
      {setHomepage()}
      {user && <Dashboard user={user} setLogin={setLogin} />}
      {register && <RegisterForm />}
    </div>
  );
}

export default App;
