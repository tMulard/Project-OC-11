import './Title.css'

const Title = ({text, variant}) => {
    return (<h1 className={`Title ${variant ? variant : ""}`}>{text}</h1>)
}

export default Title