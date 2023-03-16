import React from "react";
import Card from "./Card";
import { useState } from "react";

const FLASHCARD_INDEX = {
    1: "What are Georgia Tech's mascots?",
    2: "What is the name of the college of computing?",
    3: "How many buildings did the school have when it was founded in 1885?",
    4: "How did the first two engineers who graduated from Georgia Tech decide who had the honor of receiving the first degree?",
    5: "What are Georgia Tech fans called?",
    6: "Where is Georgia Tech located?",
    7: "What is the name of the patch of grass in the center of campus?",
    8: "What is the name of the business school?",
    9: "What is the name of the grocery store on midtown?",
    10: "Which coffee seller has two locations on campus?"

}
const FLASHCARD_INFO = {
    "What are Georgia Tech's mascots?": "The Ramblin' Reck and Buzz",
    "What is the name of the college of computing?" : "Klaus",
    "How many buildings did the school have when it was founded in 1885?" : "2 buildings",
    "How did the first two engineers who graduated from Georgia Tech decide who had the honor of receiving the first degree?" : "They tossed a coin",
    "What are Georgia Tech fans called?" : "Yellow Jackets",
    "Where is Georgia Tech located?" : "Atlanta",
    "What is the name of the patch of grass in the center of campus?" : "Tech green",
    "What is the name of the business school?" : "Scheller",
    "What is the name of the grocery store on midtown?" : "Midtown",
    "Which coffee seller has two locations on campus?" : "Blue Donkey"

}

const Display = () => {
    // const [cardNum, setCardNum] = useState(1);
    const [arrayOrder, setArrayOrder] = useState(Array.from({length: 10}, (_, i) => i + 1))
    const [currArrayNum, setCurrArrayNum] = useState(0)
    const [words, setWords] = useState(FLASHCARD_INDEX[arrayOrder[currArrayNum]])
    const [lastWords, setLastWords] = useState(FLASHCARD_INDEX[arrayOrder[currArrayNum]])
    const [cardColor, setCardColor] = useState('')
    const [guess, setGuess] = useState('')
    const [message, setMessage] = useState('')
    const [currAnswer, setCurrAnswer] = useState(FLASHCARD_INFO[FLASHCARD_INDEX[arrayOrder[currArrayNum]]])
    // console.log(arrayOrder)
    // const test = [...Array(10)].map(e=>(Math.random()*10|0) + 1)
    // console.log(arrayOrder)

    // const [currWords, changeWords] = useState(FLASHCARD_INDEX[cardNum])
    var cardNum = 1
    // var lastWords = FLASHCARD_INDEX[1]
    // const handleArrayOrderTest = () => {
    //     // console.log(arrayOrder)
    //     // array.sort((a, b) => 0.5 - Math.random());
    //     setArrayOrder([...arrayOrder].sort((a, b) => 0.5 - Math.random()));
    //     // console.log(arrayOrder)
    // }
    const handleArrayOrder = () => {
        let currOrder = [...arrayOrder].sort((a, b) => 0.5 - Math.random())
        // handleArrayOrderTest()
        console.log(arrayOrder)
        setWords(FLASHCARD_INDEX[currOrder[0]])
        setCurrAnswer(FLASHCARD_INFO[FLASHCARD_INDEX[currOrder[0]]])
        setCardColor('')
        setMessage('')
        setGuess('')
        setArrayOrder(currOrder)
    }
    const handleArrayNumNext = () => {
        // console.log(currArrayNum)
        if (currArrayNum == 9) {
            setWords(FLASHCARD_INDEX[arrayOrder[0]])
        } else {
            setWords(FLASHCARD_INDEX[arrayOrder[currArrayNum + 1]])
        }
        if (currArrayNum == 9) {
            setCurrAnswer(FLASHCARD_INFO[FLASHCARD_INDEX[arrayOrder[0]]])
        } else {
            setCurrAnswer(FLASHCARD_INFO[FLASHCARD_INDEX[arrayOrder[currArrayNum + 1]]])
        }
        if (currArrayNum == 9) {
            setCurrArrayNum(0)
        } else {
            setCurrArrayNum(currArrayNum + 1)
        }
        setCardColor('')
        setMessage('')
        setGuess('')
    }
    // const updateWords = () => {
    //     setWords(FLASHCARD_INDEX[arrayOrder[currArrayNum]])
    // }
    const handleArrayNumBack = () => {
        // console.log(currArrayNum)
        if (currArrayNum == 0) {
            setWords(FLASHCARD_INDEX[arrayOrder[9]])
        } else {
            setWords(FLASHCARD_INDEX[arrayOrder[currArrayNum - 1]])
        }
        if (currArrayNum == 0) {
            setCurrAnswer(FLASHCARD_INFO[FLASHCARD_INDEX[arrayOrder[9]]])
        } else {
            setCurrAnswer(FLASHCARD_INFO[FLASHCARD_INDEX[arrayOrder[currArrayNum - 1]]])
        }
        if (currArrayNum == 0) {
            setCurrArrayNum(9)
        } else {
            setCurrArrayNum(currArrayNum - 1)
        }
        setCardColor('')
        setMessage('')
        setGuess('')
        
    }
    // const handleCardNum = () => {
    //     cardNum = (Math.floor(Math.random() * 5) + 1)
    //     setWords(FLASHCARD_INDEX[cardNum])
    //     setCurrAnswer(FLASHCARD_INFO[FLASHCARD_INDEX[cardNum]])
    //     setCardColor('')
    //     setMessage('')
    //     setGuess('')
    // }
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
    const handleChange = (e) => {
        setGuess(e.target.value)
    }
    const checkMessage = () => {
        console.log(currAnswer.toLowerCase())
        if (guess.toLowerCase() == (currAnswer.toLowerCase())) {
            console.log(true)
            setMessage('correct!')
        } else {
            setMessage('wrong!')
        }
    }

    return (
        <div className="Display">
            <h1>Georgia Tech</h1>
            <h5>Learn about the different buildings around campus, as well as some fun historical facts!</h5>
            <h5>Number of cards: {Object.keys(FLASHCARD_INFO).length}</h5>
            <div onClick={handleWords} className="card-container"><Card words={words} color={cardColor}/></div>
            <div class="guess">
                <input value={guess} onChange={handleChange}></input>
                <button onClick={checkMessage}>Submit</button>
                <p>{message}</p>
            </div>
            <button onClick={handleArrayNumBack}> Back</button>
            <button onClick={handleArrayNumNext}> Next</button>
            <div>
                <button onClick={handleArrayOrder}>Shuffle Card Order</button>
            </div>
            {/* <p>{lastWords}</p> */}
        </div>
    )
}

export default Display