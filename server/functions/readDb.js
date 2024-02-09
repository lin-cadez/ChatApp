import { initializeApp } from "firebase/app";
import firebaseConfig from "./../creds.js";
const app = initializeApp(firebaseConfig);

export async function readDB(req, res) {
    const db = getFirestore(app);
    const docRef = doc(db, "1", "age");
    getDoc(docRef)
        .then((doc) => {
            if (doc.exists()) {
                console.log("Document data:", doc.data());
                res.json(doc.data());
            } else {
                console.log("No such document!");
                res.json({ message: "No such document!" });
            }
        })
        .catch((error) => {
            console.log("Error getting document:", error);
            res.json({ message: "Error getting document!" });
        });
}

