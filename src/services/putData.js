import { collection, getDocs, addDoc } from 'firebase/firestore'
import { db } from '../../src/database/firebase'

export const createCentre = async (name, image) => {
  const centreCollectionRef = collection(db, 'Centres')
  await addDoc(centreCollectionRef, { name: name, image: image })
  await getDocs(collection(db, 'Centres'))
}
