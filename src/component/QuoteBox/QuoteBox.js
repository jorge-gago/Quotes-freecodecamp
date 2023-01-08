import React from 'react'
import {QuoteIn} from '../QuoteIn/QuoteIn'
import Styles from './Quotebox.module.css'

const QuoteBox = () => {
    return (
        <div id="quote-box" className={Styles.elemento}>
           <QuoteIn />
        </div>
    )
}
export {QuoteBox}