import React from 'react';
import s from './Card.module.css'
import {ReactComponent as Border} from '../../assets/images/Border.svg'
import img from '../../assets/images/Back.png'


const Card = () => {
    return (
        <div className={s.content}>
            <div className={s.card}>
                <img src={img} alt=""/>
                <Border />
                <div className={s.text}>
                    <h4>Сказочное заморское яство</h4>
                    <h2>Нямушка</h2>
                    <h3>с фуа-гра</h3>
                    <p><span>10</span> порций <br/> мышь в подарок</p>
                </div>
                <div className={s.size}>
                    <h2>0.5</h2>
                    <span>кг</span>
                </div>
            </div>
            <div className={s.additionalInfo}>
                <p>Чего сидишь? Порадуй котэ, <span>купи</span></p>
            </div>
        </div>
    );
};

export default Card;