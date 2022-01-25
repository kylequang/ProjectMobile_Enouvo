import { collection, getDocs } from "firebase/firestore";
import { db } from '../../src/database/firebase';

export const getAllCentres = async () => {
    const data = [];
    const querySnapshot = await getDocs(collection(db, "Centres"));
    querySnapshot.forEach((doc) => {
        data.push(doc.data());
    });
    return data;
}

export const getAllDashboard = async () => {
    const data = [];
    const querySnapshot = await getDocs(collection(db, "Dashboard"));
    querySnapshot.forEach((doc) => {
        data.push(doc.data());
    });
    return data;
}

export const getAllMore = async () => {
    const data = [];
    const querySnapshot = await getDocs(collection(db, "More"));
    querySnapshot.forEach((doc) => {
        data.push(doc.data());
    });
    return data;
}