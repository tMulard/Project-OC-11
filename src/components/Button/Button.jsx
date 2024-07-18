import { useEffect, useState } from 'react'
import './Button.css'

const Button = ({text}) => {
    const [result, setResult] = useState(0)
    
    useEffect(() => {
        console.log(result)
    }, [result])

    const onClickBtn = () => {
        
        setResult(result + 1)
    }
    return (<button onClick={onClickBtn}>{text} {result}</button>)
}

export default Button