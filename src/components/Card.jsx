import React from "react";
import { useState } from "react";

const Card = (props) => {
    const [side, setSide] = useState(props.question)
    const [guess, setGuess] = useState('')
    // const handleSide = () => {
    //     // console.log('test')
    //     if (side == props.question) {
    //         setSide(props.answer)
    //     } else {
    //         setSide(props.question)
    //     }
    // }
    const handleChange = (e) => {
        setGuess(e.target.value)
    }
    return (
        <div className={'Card ' + props.color}>
            <p>{props.words}</p>
            {/* <input value={guess} onChange={handleChange}></input>
            <button>Submit</button> */}
        </div>
    )
}

export default Card