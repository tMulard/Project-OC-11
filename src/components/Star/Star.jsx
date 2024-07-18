import './Star.css'
import active from '@/assets/star-rating-active.svg'
import inactive from '@/assets/star-rating-inactive.svg'

const Star = ({status}) => {

    return (
            <div className='Star'>
                <img src={status === "active" ? active : inactive} />
            </div>
    );
}

export default Star