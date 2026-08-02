interface FormProp {
    name:string,
    number:string,
    handleSubmit: React.SubmitEventHandler<HTMLFormElement>,
    handleNameChange: React.ChangeEventHandler<HTMLInputElement>,
    handleNumberChange: React.ChangeEventHandler<HTMLInputElement>,
}

export default function ContactForm({name,number,handleSubmit, handleNameChange, handleNumberChange}:FormProp) {
    return (
        <div>
            <form onSubmit={(handleSubmit)}>
                <label>name: </label>
                <input value={name} onChange={handleNameChange}/>
                <br />
                <label>number: </label>
                <input value={number} onChange={handleNumberChange}/>
                <br />
                <button type="submit">add</button>
            </form>
        </div>
    )
}