import {Persons} from "./Person";
import {useEffect, useState} from "react";
import {getPersonsFromDb} from "../services/firestorePersons";
import {Section} from "./Section";

export function PersonsFromDb() {
    const [personsFromDb, setPersonsFromDb] = useState([]);

    async function loadPersons() {
        const persons = await getPersonsFromDb();
        console.log({persons});
        setPersonsFromDb(persons);
    }

    useEffect(() => {
        loadPersons();
    } , []);

    return <Section title="Personen uit de database">
        <button onClick={() => loadPersons()}>load</button>
        <Persons persons={personsFromDb}/>
    </Section>;
}