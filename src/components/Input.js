import '../components/Input.css'

const Input = ({text, result}) => {
    return <div className='calc-input-wrapper'>
                <div className='calc-result'>
                    <h1>{result}</h1>
                </div>

                <div className='calc-text'>
                    <h3>{text}</h3>
                </div>
        </div>
}

export default Input;