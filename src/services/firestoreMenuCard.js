import "firebase/firestore";
import {firestoreDatabase} from "./firestore";

const COLLECTION_PRODUCTS = "products";

export async function getMenuCardFromDb() {
    if (!firestoreDatabase) return [];

    const result = await firestoreDatabase.collection(COLLECTION_PRODUCTS).get();
    if (result.empty) return [];

    return result.docs.map(doc => ({...doc.data(), id: doc.id}));
}

