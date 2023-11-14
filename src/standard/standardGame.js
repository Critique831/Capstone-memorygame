import {useState,useEffect} from 'react';
import './standardGame.css';
import SingleCard from '../components/SingleCard';

const cardImages = [
    {"src": "🙂", matched: false},
    {"src": "😀", matched: false},
    {"src": "😂", matched: false},
    {"src": "🙃", matched: false},
    {"src": "😉", matched: false},
    {"src": "😊", matched: false}
]

function StandardGame() {
    const [cards, setCards] = useState([]);
    const [turns, setTurns] = useState(0);
    const [card1, setCard1] = useState(null);
    const [card2, setCard2] = useState(null);
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
    },[card1, card2, cards])

    //shuffle
    const shuffle = () => {
        const shuffledCards = [...cardImages, ...cardImages]
        .sort(() => Math.random() - 0.5)
        .map((card) => ({...card, id: Math.random()}))

        setCard1(null)
        setCard2(null)
        setCards(shuffledCards)
        setTurns(0)
    }

    const handleChoice = (card) => {
        card1 ? setCard2(card) : setCard1(card)
    }

    const resetTurn = () =>{
        setCard1(null)
        setCard2(null)
        setTurns(prev => prev + 1)
        setDisabled(false)
    }

    return(
        <div>
            <h1>Memory Game</h1>
            <p>
                <button onClick={shuffle}>New Game</button>
            </p>
            <div className='card-grid'>
                {cards.map(card => (
                    <SingleCard key={card.id} card={card} handleChoice={handleChoice} flipped={card===card1||card===card2||card.matched} disabled={disabled}/>
                ))}
            </div>
            <p>Turns: {turns}</p>
        </div>
    )
}

export default StandardGame;