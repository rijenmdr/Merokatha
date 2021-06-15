import React, { useEffect, useRef, useState } from 'react'

const HomeBackground=()=> {
    const [currentImage, setCurrentImage] = useState(0)
    const imageRef = useRef()
    const [images, setImages] = useState([
        {
            title : "CREATE",
            image : "https://www.rushdah-ir.com/wp-content/uploads/2018/03/sliders1-1.jpg",
        },
        {
            title : "READ",
            image : "https://wallpapercave.com/wp/wp4549752.jpg"
        },
        {
            title : "SHARE",
            image:"https://cdn2.hubspot.net/hubfs/202339/canvas/images/parallax/Website-Design-Background.png"
        }
    ]) 

    const switchImage=()=> {
        setCurrentImage(prev=>prev+1)
      }
    useEffect(() => {
        setInterval(switchImage, 3000);
    }, [])

    useEffect(() => {
        if(currentImage>=images.length){
            setCurrentImage(0)
        }
    }, [currentImage])
    
    return (
        <div className="home-layout">
            <div className="background-image">
                <div className="background-title">
                    <div className="reveal">{images[currentImage]?.title}</div>
                    <div className="title">Story</div>
                    <button className="btn mt-20">Explore Stories</button>
                </div>
               
                <img
                    ref={imageRef}
                    src={images[2]?.image}
                    alt="images"
                />
            </div>
        </div>
    )
}

export default HomeBackground
