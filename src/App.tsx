import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginForm  from './Services/LoginFrom';
import Header from './Services/Header';
import './TCS.css'

const App: React.FC = () => {
    return (
        <>
            <Header/>
            <main className="bd-main">
                <div className="bd-side-background">
                    <div className="bd-main-container container">
                        <div className="out-line">
                            <LoginForm/>
                        </div>
                    </div>
                </div>
            </main>
            {/* <div className="App">
                <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                Learn React
                </a>
                </header>
                </div> */}
        </>
    );
}

export default App;
