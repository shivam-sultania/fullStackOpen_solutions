interface HeaderProps {course: string}

const Header = (props:HeaderProps) => {
    return (
        <h1>{props.course}</h1>
    )
}

export default Header;