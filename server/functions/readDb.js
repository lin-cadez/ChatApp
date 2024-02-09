import { getFirestore, collection, getDocs } from "firebase/firestore";
import firebaseConfig from "./../creds.js";
import { initializeApp } from "firebase/app";
const app = initializeApp(firebaseConfig);

export async function readDB(req, res) {
    const db = getFirestore(app);
    const collectionRef = collection(db, "your_collection_name_here"); // Replace 'your_collection_name_here' with your actual collection name

    try {
        const querySnapshot = await getDocs(collectionRef);
        const data = [];

        querySnapshot.forEach((doc) => {
            data.push(doc.data());
        });

        console.log("Documents data:", data);
        res.json({"data":data});
    } catch (error) {
        console.error("Error getting documents:", error);
        res.status(500).json({ message: "Error getting documents!" });
    }
}
