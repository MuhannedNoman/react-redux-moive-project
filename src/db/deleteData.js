import { doc, deleteDoc } from "firebase/firestore";
import { db } from "./config/firebase";

export default async function deleteDataFromDB(collec, id){
  await deleteDoc(doc(db, collec, id));
};