import Person from "./Person"
import type { PersonInterface } from "../interfaces"

interface ListingProp {
    persons: PersonInterface[],
    filter: string,
}

export default function Listing({persons,filter}:ListingProp) {
    return (
        <div>
        <ul>
          {persons
          .filter(person => person.name.toLowerCase().includes(filter.trim().toLowerCase()))
          .map((person) => <Person key={person.id} person={person}/> )}
        </ul>
      </div>
    )
}