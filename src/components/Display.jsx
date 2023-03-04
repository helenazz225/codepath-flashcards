import React from "react";
import Card from "./Card";
import { useState } from "react";

const FLASHCARD_INDEX = {
    1: "What are Georgia Tech's mascots?",
    2: "What is the name of the college of computing?",
    3: "How many buildings did the school have when it was founded in 1885?",
    4: "How did the first two engineers who graduated from Georgia Tech decide who had the honor of receiving the first degree?",
    5: "What are Georgia Tech fans called?"

}
const FLASHCARD_INFO = {
    "What are Georgia Tech's mascots?": "The Ramblin' Reck and Buzz",
    "What is the name of the college of computing?" : "Klaus",
    "How many buildings did the school have when it was founded in 1885?" : "2 buildings",
    "How did the first two engineers who graduated from Georgia Tech decide who had the honor of receiving the first degree?" : "They tossed a coin",
    "What are Georgia Tech fans called?" : "Yellow Jackets",
}

const Display = () => {
    // const [cardNum, setCardNum] = useState(1);
    const [words, setWords] = useState(FLASHCARD_INDEX[1])
    const [lastWords, setLastWords] = useState(FLASHCARD_INDEX[1])
    const [cardColor, setCardColor] = useState('')
    // const [currWords, changeWords] = useState(FLASHCARD_INDEX[cardNum])
    var cardNum = 1
    // var lastWords = FLASHCARD_INDEX[1]
    const handleCardNum = () => {
        cardNum = (Math.floor(Math.random() * 5) + 1)
        setWords(FLASHCARD_INDEX[cardNum])
        setCardColor('')
    }
    const handleWords = () => {
        if (Object.keys(FLASHCARD_INFO).includes(words)) {
            setLastWords(words)
            setWords(FLASHCARD_INFO[words])
            setCardColor('answer')
        } else {
            setWords(lastWords)
            setCardColor('')
        }
    }
    return (
        <div className="Display">
            <h1>Georgia Tech</h1>
            <h5>Learn about the different buildings around campus, as well as some fun historical facts!</h5>
            <h5>Number of cards: {Object.keys(FLASHCARD_INFO).length}</h5>
            <div onClick={handleWords} className="card-container"><Card words={words} color={cardColor}/></div>
            <button onClick={handleCardNum}> Next</button>
            {/* <p>{lastWords}</p> */}
        </div>
    )
}

export default Display