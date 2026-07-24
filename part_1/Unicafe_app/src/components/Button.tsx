interface ButtonProp {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    text: string;
}

const Button = ({onClick,text}:ButtonProp) => {
    return (
        <>
        <button onClick={onClick}>{text}</button>
        </>
    )
}

export default Button