import {useEffect, useState} from "react";
import {Section} from "./Section";
import {getMenuCardFromDb} from "../services/firestoreMenuCard";
import {MenuCard} from "./MenuCard";

export function MenuCardFromDb() {
    const [menuCardFromDb, setMenuCardFromDb] = useState([]);

    async function loadMenuCard() {
        const products = await getMenuCardFromDb();
        console.log({products});
        setMenuCardFromDb(products);
    }

    useEffect(() => {
        loadMenuCard();
    }, []);

    console.log({menuCardFromDb});

    return <Section title="Menu uit de database">
        <button onClick={() => loadMenuCard()}>load</button>
        <MenuCard products={menuCardFromDb} />
    </Section>;
}