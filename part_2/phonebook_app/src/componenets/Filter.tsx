interface FilterProp {
    text:string, 
    handleChange:React.ChangeEventHandler<HTMLInputElement>,
}

export default function Filter({text,handleChange}:FilterProp) {
    return (
        <div>
            filter shown with <input value={text} onChange={handleChange}/>
        </div>
    )
}