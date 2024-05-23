import '../components/Button.css'


const Button = ({ value, color, handleClick }) => {
    return <div 
    onClick={() => handleClick(value)}
    className='calc-buttons'
    style={{backgroundColor: color}}> { value } </div>   
}

export default Button;