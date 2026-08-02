import type {PersonProp} from './Listing'

export default function Person({person}:{person:PersonProp}) {
    return (<li>{person.name} {person.number}</li>)
}