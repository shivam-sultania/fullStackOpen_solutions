import type { PersonInterface } from "../interfaces"

export default function Person({person}:{person:PersonInterface}) {
    return (<li> {person.name} {person.number}</li>)
}