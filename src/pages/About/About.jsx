import './About.css'
import Collapse from '../../components/Collapse/Collapse'

const About = () => {

    const data = [
        {
            title: "Fiabilité",
            content: 'lorem ipsum dolor sit amet....'
        },
        {
            title: "Respect",
            content: 'lorem ipsum dolor sit amet....'
        },
        {
            title: "Service",
            content: 'lorem ipsum dolor sit amet....'
        },
        {
            title: "Séurité",
            content: 'lorem ipsum dolor sit amet....'
        }
    ]

    return (
        <section>
            <div className='AboutHeader'></div>
               <div className="AboutBody">
                {
                    data.map((el) => (
                        <Collapse title={el.title}>{el.content}</Collapse>
                    ))
                }
            </div>
        </section>
    );
}

export default About