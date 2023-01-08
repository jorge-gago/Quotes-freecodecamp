import React from 'react'
import {useState, useEffect} from 'react'
import Styles from './in.module.css'

const QuoteText = ({text}) => {
    return (
    <div id="text">
        {text}
    </div>
    )
}

const QuoteAutor = ({autor}) => {
    return (
    <div id="author" className={Styles.autor}>
        autor: {autor} 
    </div>
    )
}

const NewQuote = ({parentFunction}) => {
    return (
        <button id="new-quote" onClick={parentFunction}>new quote</button>
    )
}

const TweetQuote = () => {
    return (
        <a id="tweet-quote" href="twitter.com/intent/tweet">tweet</a>
    )
}

const QuoteIn = () =>{
    const [state, setState] = useState([])
    
    useEffect( ( )=>{
        setState(
            quotes[Math.floor(Math.random()*quotes.length)]
        )
    }, [])

    const handleClick = () => {
        setState(
            quotes[(quotes.indexOf(state) + 1) % quotes.length]
        )
    }

    return (
        <div className={Styles.parent}>
            <div>
                <QuoteText className="texto" text={state.texto}/>
                <QuoteAutor autor={state.autor}/>
            </div>
            <div>
                <TweetQuote />
                <NewQuote parentFunction={handleClick}/>
            </div>
        </div>
    )
}

export {QuoteIn}


const quotes =[
    {texto:"hola", autor:"yo"},
    {texto:"saludos", autor:"I"},
    {texto:"chao", autor:"O"}
]