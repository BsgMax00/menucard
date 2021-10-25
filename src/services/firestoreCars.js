import "firebase/firestore";
import {firestoreDatabase} from "./firestore";

const COLLECTION_CARS = "cars";

export async function getCarsFromDb() {
    if (!firestoreDatabase) return [];

    const result = await firestoreDatabase.collection(COLLECTION_CARS).get();
    if (result.empty) return [];

    return result.docs.map(doc => ({...doc.data(), id: doc.id}));
}

