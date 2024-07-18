import './Gallery.css'
import { Link } from 'react-router-dom'
import Thumb from '@/components/Thumb/Thumb'
import useHouses from '../../hooks/useHouses'

const Gallery = () => {
    const houses = useHouses()
    
    return (
      <section className="Gallery">
        {!houses ? (
          <div>Loading...</div>
        ) : (
          houses.map((house) => (
              <Link to={`/housing/${house.id}`} key={house.id}>
                <Thumb text={house.title} image={house.cover} />
              </Link>
            ))
        )}
      </section>
    );
}

export default Gallery