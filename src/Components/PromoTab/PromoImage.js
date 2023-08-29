import React from 'react'

function PromoImage(props) {
    return (
        <div>
            <div className="promoImage">
                <img width={'100%'} src={props.img} alt="" />
            </div>
        </div>
    )
}

export default PromoImage
