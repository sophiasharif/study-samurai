import { db } from "../firebase/config";
import { collection, getDocs, where, query } from "firebase/firestore";


// enter in an integer unit as a parameter (like "1" in "MV1")
// function an array of strings of subtopic names.
async function getSubtopicsInUnit(unit) {
    const textbookSectionsColRef = collection(db, "textbookSections");
    const mvQuery = query(textbookSectionsColRef, where("unit", "==", unit));
    const snapshot = await getDocs(mvQuery);
    const res = snapshot.docs[0].data().subtopics
    return res;
}

// parameter is a subtopic name
// returns an array of question objects
async function getQuestionsBySubtopic(subtopic) {
    const col = collection(db, "questions");
    const q = query(col, where("subtopics", "array-contains", subtopic));
    const snapshot = await getDocs(q);
    const res = []
    snapshot.docs.forEach(doc => res.push({...doc.data()}))
    return res;
}

export { getSubtopicsInUnit, getQuestionsBySubtopic }