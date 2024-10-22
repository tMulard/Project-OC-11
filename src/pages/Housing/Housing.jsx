import './Housing.css'
import Collapse from '../../components/Collapse/Collapse'
import useHouses from '../../hooks/useHouses'
import { useParams } from 'react-router-dom'
import Tag from "@/components/Tag/Tag"
import Star from '../../components/Star/Star'
import { useState, useEffect } from 'react'
import Lightbox from '../../components/Lightbox/Lightbox.jsx'


const Housing = () => {
    const {houseId} = useParams()
    const houses = useHouses()
    const [house, setHouse] = useState()

    useEffect(() => {
        if (houses) {
            setHouse(houses.find((el) => el.id === houseId ))
        }
    }, [houses])
    
    const renderStars = () => {
        const maxStar = 5
        let starsStatus = []

        for (let i = 0; i < maxStar; i++) {
            if ( i < parseInt(house.rating)) {
                starsStatus.push('active')
            } else {
                starsStatus.push('inactive')
            } 
        }

        return starsStatus.map((status, index) => <Star status={status} key={index} />)
    }

    return (
        <>
            {house ? (
                <>
                    <Lightbox pics={house.pictures} />
                    <section>
                        <div className='Presentation'>
                            <div className='Title'>
                                <h1>{house.title}</h1>
                                <p>{house.location}</p>
                            </div>

                            <div className='Author'>
                                <h3>{house.host.name}</h3>
                                <img src={house.host.picture} alt="AuthorPortrait" />
                            </div>
                        </div>

                        <div className="Ratings">
                            <div className="Tags">
                                {house.tags.map(tag => <Tag key={tag} text={tag} />)}
                            </div>

                            <div className="Stars">
                                {renderStars()}
                            </div>
                        </div>

                        <div className="Description">
                            <Collapse title="Description">
                                {house.description}
                            </Collapse>
                            
                            <Collapse title="Equipements">
                                {house.equipments.map((eq) => <p>{eq}</p>)}
                            </Collapse>
                        </div>
                    </section>
                </>
                )
                : (
                    <div>Loading...</div>
                )}
            
        </>
    )
}

export default Housing