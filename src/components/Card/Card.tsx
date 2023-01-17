import React, {FC, useState} from 'react';
import s from './Card.module.css'
import {ReactComponent as Border} from '../../assets/images/Border.svg'
import {ReactComponent as LightBack} from '../../assets/images/LightBack.svg'
import img from '../../assets/images/Back.png'
import {IProduct} from "../../models/IProduct";

interface CardProps {
    product: IProduct
}

const Card: FC<CardProps> = ({product}) => {
    const [isSelected, setIsSelected] = useState<boolean>(false)

    const clickHandler = () => {
        if(product.available) {
            switch (isSelected) {
                case true:
                    setIsSelected(false)
                    break
                case false:
                    setIsSelected(true)
            }
        }
    }

    return (
        <div className={s.content + ' ' + (!product.available ? s.disabled : '')}>
            <div className={s.card} onClick={clickHandler}>
                <img src={img} alt="cat picture"/>
                <Border className={s.border + ' ' + (isSelected ? s.active : '')}/>
                <div className={s.text}>
                    <h4 style={{color: isSelected ? '#D91667' : ''}}>{isSelected ? 'Котэ не одобряет?' : 'Сказочное заморское яство'}</h4>
                    <h2>Нямушка</h2>
                    <h3>{product.filling}</h3>
                    <div className={s.gift}>
                        {product.gift.split('|').map(item => {
                            return <p><span>{item.split('#')[0]}</span>{item.split('#')[1]}</p>
                        })}
                    </div>
                </div>
                <div className={s.size} style={{backgroundColor: isSelected ? '#D91667': ''}}>
                    <h2>{product.size}</h2>
                    <span>кг</span>
                </div>
                <LightBack className={s.lightBack}/>
            </div>
            <div className={s.additionalInfo}>
                {product.available ?
                    isSelected ?
                        <p>{product.afterSelectedText}</p>
                        :
                        <p>Чего сидишь? Порадуй котэ, <span onClick={clickHandler}>купи</span></p>
                :
                    <p>Печалька, {product.notAvailableText} закончился</p>
                }
            </div>
        </div>
    );
};

export default Card;