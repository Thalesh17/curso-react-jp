import React, { useState } from 'react';
import styles from "./style.css";
import Card from './Card';

export default function Boleto (){

    const [cards, setCards] = useState([]);
    const [random, setRandom] = useState('#'+(Math.random()*0xFFFFFF<<0).toString(16));
    const [countCard, setCount] = useState(1);

    function handleAddCard() {
        setRandom('#'+(Math.random()*0xFFFFFF<<0).toString(16));
        setCount(countCard + 1);
        setCards([ ...cards, 
            <Card
                title= "Card Aula 02"
                description= "Card de numero "
                countCard= {countCard}
                randomColor= {random}
            />            
        ]);
    }

    return (
        <div>
            {cards.map((card, index) => 
               <div key={index}>
                {card}
               </div>
            )}
            <button className="buttonCard" onClick={handleAddCard}>
                Adicionar Card
            </button>
        </div>
    );
}