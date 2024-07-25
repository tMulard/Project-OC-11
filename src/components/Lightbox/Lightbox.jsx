import { useState } from "react"
import "./LightBox.css"
import arrowLeft from '@/assets/arrow_left.svg'
import arrowRight from '@/assets/arrow_right.svg'

const Lightbox = ({pics}) => {

    const [index, setIndex] = useState(0)
    
    const increase = () => {
        if (index === (pics.length-1)) {
            setIndex(0)
        }
         else {
            setIndex(index+1)
        }
    }

    const decrease = () => {
        if (index === 0) {
            setIndex(pics.length-1)
        }
        else {
            setIndex(index-1)
        }
    }
    
    return (
        <div className="lightbox-container">
            <div className="arrow-left" onClick={decrease}><img src={arrowLeft}/></div>
            <div className="arrow-right" onClick={increase}><img src={arrowRight}/></div>

            <img src={pics[index]} />
        </div>
    )
}

export default Lightbox