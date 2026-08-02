import Person from "./Person"

export interface PersonProp {
    name: string,
    number: string,
    id: number,
}

interface ListingProp {
    persons: PersonProp[],
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