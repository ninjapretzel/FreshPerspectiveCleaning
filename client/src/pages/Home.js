import React from "react"
import M from "materialize-css"
import { Carousel } from "react-materialize"
import $ from "jquery"

import img1 from "../images/1.jpg"
import img2 from "../images/2.jpg"
import img3 from "../images/3.jpg"
import img4 from "../images/4.jpg"
import img5 from "../images/5.jpg"
import img6 from "../images/6.jpg"
import img7 from "../images/7.jpg"
import img8 from "../images/8.jpg"
import img9 from "../images/9.jpg"
import img10 from "../images/10.jpg"

const images = [ 
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
]

class Home extends React.Component {

    componentDidMount() {
        let root = $("#HomeCarousel");
        root.attr("style", `height: ${window.screen.availWidth * 2/3}px`)
    }
    
    render() {
        return (
            <div className="">
            <Carousel 
                carouselId="HomeCarousel"
                images={images}
                options={{
                    fullWidth: true,
                }}
            
            />
            </div>
        )
    }
}

export default Home