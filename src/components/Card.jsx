import React from "react";
import { useState } from "react";

const Card = (props) => {
    const [side, setSide] = useState(props.question)
    // const handleSide = () => {
    //     // console.log('test')
    //     if (side == props.question) {
    //         setSide(props.answer)
    //     } else {
    //         setSide(props.question)
    //     }
    // }
    return (
        <div className="Card">
            <p>{props.words}</p>
        </div>
    )
}

export default Card