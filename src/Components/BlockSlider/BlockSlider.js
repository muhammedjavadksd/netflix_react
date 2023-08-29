import React, { useEffect, useState } from 'react'
import BlockItem from '../BlockItem/BlockItem'
import './assets/css/style.css'
import 'slick-carousel/slick/slick.css'
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import axios from '../../CONST/axios';
import constant from '../../CONST/const';


function BlockSlider(props) {

    let settings = {
        dots: false,
        infinite: false,
        slidesToShow: props.highLights ? 4 : 6,
        slidesToScroll: 1,
        autioPlay: false,
    };

    let [blockState, blockUseState] = useState([]);

    useEffect(() => {
        if (props.url != undefined && props.url != null) {
            axios.get(constant.apiBaseUrl + props.url).then(function (data) {
                blockUseState(data.data.results)
            })
        }
    }, [])

    return (
        <div className='blockItem'>
            <h4 className='blockHead'>{props.title} Moveis</h4>
            <Slider {...settings}  >

                {
                    blockState.map(function (data, index) {
                        return <BlockItem  data={data} isHigh={props.highLights}></BlockItem>
                    })
                }


            </Slider>

        </div>
    )
}

export default BlockSlider



