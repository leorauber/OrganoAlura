import './SelectList.css'

export default function SelectList(props){
    function changeSelect(e){
        props.onChange(e.target.value)
    }
    return (
        <div className='select-list'>
            <label>{props.label}</label>
            <select onChange={changeSelect} value={props.valor} required={props.required}>
                <option value=''></option>
                {props.times.map(time => {
                    return <option key={time}>{time}</option>
                })}
            </select>
        </div>
    )
}