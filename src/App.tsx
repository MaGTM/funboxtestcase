import React from 'react';
import './App.css';
import Card from "./components/Card/Card";
import {IProduct} from "./models/IProduct";

const productData: IProduct[] = [
    {
        id: 1,
        available: true,
        filling: 'с фуа-гра',
        portion: 10,
        gift: '10# порций|#мышь в подарок',
        size: 0.5,
        afterSelectedText: 'Печень утки разварная с артишоками.'
    },
    {
        id: 2,
        filling: 'с рыбой',
        available: true,
        portion: 40,
        gift: '40# порций|2# мыши в подарок',
        size: 2,
        afterSelectedText: 'Головы щучьи с чесноком да свежайшая сёмгушка.'
    },
    {
        id: 3,
        filling: 'с курой',
        available: false,
        notAvailableText: 'с курой',
        portion: 100,
        gift: '100# порций|5# мышей в подарок заказчик доволен',
        size: 5
    }
]

function App() {
    const cardsArray = productData.map(item => {
        return <Card product={item} key={item.id}/>
    })
    return (
        <div className="App">
            <h1>Ты сегодня покормил кота?</h1>
            <div className={'Cards'}>
                {cardsArray}
            </div>
        </div>
    );
}

export default App;
