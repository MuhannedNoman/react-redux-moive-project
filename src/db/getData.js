import { collection, getDocs } from "firebase/firestore";
import { db } from './config/firebase';

export default async function getDatasFromDB(collec){
  const querySnapshot = await getDocs(collection(db, collec));
  const allData = [];
  querySnapshot.forEach((doc) => {
    allData.push({
      id: doc.id,
      ...doc.data()
    });
  });
  return allData;
}