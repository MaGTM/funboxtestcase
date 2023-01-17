import React from 'react';
import './App.css';
import Card from "./components/Card/Card";

function App() {
    return (
        <div className="App">
            <h1>Ты сегодня покормил кота?</h1>
            <div className={'Cards'}>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    );
}

export default App;
