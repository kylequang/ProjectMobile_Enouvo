import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { db } from '../../src/database/firebase';

export const getAllCentres = async () => {
    const data = [];
    const querySnapshot = await getDocs(collection(db, "Centres"));
    querySnapshot.forEach((doc) => {
        data.push(doc.data());
    });
    return data;
}