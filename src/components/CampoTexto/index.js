import './CampoTexto.css'

export default function CampoTexto (props){
    function changeText(e){
        props.onChange(e.target.value)
    }

    return (
        <div className='campo-texto'>
            <label>{props.label}</label>
            <input 
                value={props.valor}
                onChange={changeText}
                placeholder={props.placeholder} 
                required={props.required}
            >    
            </input>
        </div>
    )
}