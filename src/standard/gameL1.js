import {useState,useEffect} from 'react';
import './gameL1.css';
import SingleCard from '../components/SingleCard';
import { updateLeaderboard } from '../leaderboardUtils';

const cardImages = [
    {"src": "img/css.png", matched: false},
    {"src": "img/google.png", matched: false},
    {"src": "img/html.png", matched: false},
    {"src": "img/js.png", matched: false},
]

function StandardGameL1() {
    const [cards, setCards] = useState([]);
    const [turns, setTurns] = useState(0);
    const [card1, setCard1] = useState(null);
    const [card2, setCard2] = useState(null);
    const [finished, setFinished] = useState(false);
    const [disabled,setDisabled] = useState(false);
    
    useEffect (() => {
        shuffle();
    }, []);

    useEffect(() => {
        if (card1 && card2) {
            setDisabled(true)
            if(card1.src === card2.src){
                setCards(prev => {
                    return prev.map(card => {
                        if(card.src === card1.src){
                            return {...card, matched: true}
                        }else{
                            return card
                        }
                    })
                })
                resetTurn()
            }else{
                setTimeout(() => resetTurn(), 1000)
            }
        }
    },[card1, card2])

    useEffect(() => {
        if(cards.length !== 0){
            let flag = 0;
            cards.forEach((card) => {
                if (card.matched) {
                    flag += 1 
                } 
            });
            if(flag === cards.length){
                setFinished(true)
            }else{
                setFinished(false)
            }
        }
    }, [cards]);

    useEffect(() => {
        if(finished){
            console.log("Congratulations!!!!!")
        }
    },[finished])

    //shuffle
    const shuffle = () => {
        const shuffledCards = [...cardImages, ...cardImages]
        .sort(() => Math.random() - 0.5)
        .map((card) => ({...card, id: Math.random()}))

        setCard1(null)
        setCard2(null)
        setCards(shuffledCards)
        setTurns(0)
        setFinished(false)
    }

    const handleChoice = (card) => {
        if(card1 !== null) {
            card1.id === card.id ? console.log("Multiple clicks") :setCard2(card)
        } else {
            setCard1(card)
        }
    }

    const resetTurn = () =>{
        setCard1(null)
        setCard2(null)
        setTurns(prev => prev + 1)
        setDisabled(false)
    }

    //Storing good marks to leaderboard
    useEffect(() => {
        if (finished) {
          const level=1;
          updateLeaderboard(level, turns);
        }
      }, [finished, turns]);

    return(
        <div className='App'>
            <h1>Memory Game</h1>
            <p>
                <button onClick={shuffle}>New Game</button>
            </p>
            <div className='card-gridL1'>
                {cards.map(card => (
                    <SingleCard key={card.id} card={card} handleChoice={handleChoice} flipped={card===card1||card===card2||card.matched} disabled={disabled}/>
                ))}
            </div>
            <p>Turns: {turns}</p>
        </div>
    )
}

export default StandardGameL1;