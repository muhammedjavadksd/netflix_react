import React from 'react'
import PromoImage from '../PromoTab/PromoImage';
import PromoContent from '../PromoTab/PromoContent';
import './assets/css/style.css'

function PromoTemplate(props) {

    let RightComponent;
    let LeftComponent;

    if (props.isRightBanner) {
        RightComponent = <PromoImage img={props.img}></PromoImage>
        LeftComponent = <PromoContent content={props.content} head={props.head}></PromoContent>
    } else {
        RightComponent = <PromoContent content={props.content} head={props.head}></PromoContent>
        LeftComponent = <PromoImage img={props.img}></PromoImage>
    }

    return (
        <div className='promoItem'>
            <div className="container_main">
                <div class="promoFlex">
                <div className='promoBanner'>
                    {LeftComponent} 
                </div>
                <div className='promoContent'>
                    {RightComponent}
                </div>
                    </div>
                  
            </div>
        </div>
    )
}

export default PromoTemplate
