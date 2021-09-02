import { collection, addDoc } from "firebase/firestore"; 
import { db } from './config/firebase';

export default async function addDataToDB(collec, postData={}){
  try {
    const docRef = await addDoc(collection(db, collec), postData);
    const documentID = docRef.id;
    return [documentID, postData];
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}