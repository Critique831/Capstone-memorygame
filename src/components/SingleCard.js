import './SingleCard.css'

function SingleCard({card, handleChoice, flipped, disabled}){

    const handleClick = () => {
        if(!disabled){
            handleChoice(card)
        }
    }

    return(
        <div>
            <div className="card">
                <div className={flipped ? "flipped": ""}>
                    {/* <img className="front" src={card.src} alt="card front"/> */}
                    <h1 className="front">{card.src}</h1>
                    <img className="back" src="/img/cardcover.png" alt="card back" onClick={handleClick}/>
                </div>
            </div>
        </div>
    )
}

export default SingleCard;