import './Collapse.css'
import source from '../../assets/arrow_collapse.png'
import { useState } from 'react'

const Collapse = ({title, children}) => {    
    const [isOpen, setIsOpen] = useState(false)

    return (
            <div className='Collapse'> 
                <div className="Clickable" onClick={() => setIsOpen(!isOpen)}>
                    <h3>{title}</h3>
                    <div className={isOpen ? 'upsideDown' : ''}>
                        <img src={source}/>
                    </div>
                </div>
                <div className={`Content ${isOpen ? '' : 'hidden'}`}>
                    {children}
                </div>
            </div>
    );
}

export default Collapse