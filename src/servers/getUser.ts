import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "./firebase";

export const getUser = async (email: string) => {
  let user = null;
  const q = query(collection(firestore, "Users"), where("email", "==", email));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    user = { ...data, id: doc.id };
  });
  if (user != null) {
    return user;
  }
};
