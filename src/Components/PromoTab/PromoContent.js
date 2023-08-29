import React from 'react'
import './style.css'

function PromoContent(props) {
    return (
        <div class="promoContent">
            <h2>{props.head}</h2>
            <p>{props.content}</p>
            <button className='watchNow'>Watch Now</button>
        </div>
    )
}

export default PromoContent
