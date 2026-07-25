const Anecdote = ({message,anecdote,vote}:{message:string,anecdote:string,vote:number}) => {
    return (
        <div>
            <h1>{message}</h1>
            {anecdote}
            <br />
            has {vote} votes
        </div>
    )
}

export default Anecdote