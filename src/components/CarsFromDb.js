import {useEffect, useState} from "react";
import {Section} from "./Section";
import {Cars} from "./Cars";
import {getCarsFromDb} from "../services/firestoreCars";

export function CarsFromDb() {
    const [carsFromDb, setCarsFromDb] = useState([]);

    async function loadCars() {
        const cars = await getCarsFromDb();
        console.log({cars});
        setCarsFromDb(cars);
    }

    useEffect(() => {
        loadCars();
    }, []);

    return <Section title="Auto's uit de database">
        <button onClick={() => loadCars()}>load</button>
        <Cars cars={carsFromDb}/>
    </Section>;
}