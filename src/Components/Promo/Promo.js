import React from 'react'
import PromoTemplate from '../PromoTemplate/PromoTemplate'

function Promo() {


    const promoTemplates = [
        {
            content: "You can enjoy your favorite content on a wide range of devices such as smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players, and many other compatible devices for your viewing pleasure.",
            head: "Enjoy on your TV",
            img: 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png',
            isRightBanner: true
        },
        {
            content: "Effortlessly save your favorite shows and movies, ensuring you never run out of entertainment options. With a convenient watchlist, you'll always have a curated selection of content ready for your viewing pleasure",
            head: "Download your shows to watch offline",
            img: 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg',
            isRightBanner: false
        },
        {
            content: "Enjoy a boundless streaming experience as you indulge in endless movies and TV shows across various devices. Whether you're on your phone, tablet, laptop, or TV, the world of entertainment is at your fingertips.",
            head: "Watch everywhere",
            img: 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png',
            isRightBanner: true
        },
        {
            content: "Embark on exciting adventures with beloved characters tailored exclusively for children, creating a dedicated space that caters to their imagination and curiosity. This enriching experience comes as a complimentary inclusion with your membership",
            head: "Create profiles for kids",
            img: 'https://occ-0-2484-64.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d',
            isRightBanner: false
        }
    ];




    return (
        <div>
            { 
                promoTemplates.map((template, index) => (
                    <PromoTemplate
                        key={index}
                        content={template.content}
                        head={template.head}
                        img={template.img}
                        isRightBanner={template.isRightBanner}
                    />
                ))
            }
        </div>
    )
}

export default Promo
