import './Thumb.css'

const Thumb = ({text, image}) => {

    return (
            <div className='Thumb'>  
                <img src={image} alt="cover" />
                <h3>{text}</h3>
            </div>
    );
}

export default Thumb