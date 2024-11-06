import './Housing.scss'
import Collapse from '@/components/Collapse/Collapse'
import useHouses from '@/hooks/useHouses'
import { useParams } from 'react-router-dom'
import Tag from "@/components/Tag/Tag"
import Star from '@/components/Star/Star'
import { useState, useEffect } from 'react'
import Lightbox from '@/components/Lightbox/Lightbox.jsx'


const Housing = () => {
    //Récupération de l'id dans la route, visible dans l'url
    const {houseId} = useParams()
    //Récupération des data
    const houses = useHouses()
    //Unique moyen de modifier/refresh le DOM, à la place des Queryselector
    const [house, setHouse] = useState()

    //Récupération des données de la maison si présente dans la data
    useEffect(() => {
        if (houses) {
            setHouse(houses.find((el) => el.id === houseId ))
        }
    }, [houses])//effet de bord = rejoue si une donnée change dans le tableau houses
    
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
                        <div className="Presentation">
                            <div className='LeftSide'>
                                <div className='Title'>
                                    <h1>{house.title}</h1>
                                    <p>{house.location}</p>
                                </div>

                                <div className="Tags">
                                    {house.tags.map(tag => <Tag key={tag} text={tag} />)}
                                </div>
                            </div>

                            <div className="RightSide">
                                <div className="Stars">
                                    {renderStars()}
                                </div>
                                <div className='Author'>
                                    <h3>{house.host.name}</h3>
                                    <img src={house.host.picture} alt="AuthorPortrait" />
                                </div>
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