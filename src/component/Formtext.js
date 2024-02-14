import React, { useState } from 'react'

export default function Formtext(props) {

    // function for set text to uppercase
    const handelupclick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handelupclicklow = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }

    // function for on change text 
    const handelonchange = (event) => {
        // console.log(event.target.value)
        setText(event.target.value)
    }

    const [text, setText] = useState('')
    return (
        <>
            <div className="container-el  my-4">
                <div>
                    <h2>{props.Heading}</h2>
                    <div className="mb-3">

                        <textarea className="form-control" value={text} onChange={handelonchange} id="exampleFormControlTextarea1" rows="6"></textarea>
                    </div>
                    <button type="button " onClick={handelupclick} className="btn btn-primary mx-2">uppercase</button>

                    <button type="button" onClick={handelupclicklow} className="btn btn-success mx-2">lovercase</button>
                </div>
            </div>
            <div className="container-el  my-4">
                <h1>Count no of word and carrector</h1>
                <p>{text.split(" ").length} word and {text.length} character</p>
                <p> {0.008 * text.split(" ").length} Mineats read</p>
                <h1>Preview</h1>
                <p>{text}</p>
            </div>
        </>
    )
}
