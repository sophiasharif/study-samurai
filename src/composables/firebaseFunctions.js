import { db } from "../firebase/config";
import { collection, getDocs, where, query } from "firebase/firestore";

// returns an array of objects

//.title
//.unit
//.subtopics an array
async function getUnits() {
  const col = collection(db, "textbookSections");
  let docs = [];
  const snapshot = await getDocs(col);
  snapshot.docs.forEach((doc) => {
    docs.push({ ...doc.data(), id: doc.id });
  });
  console.log(docs[0]);
  return docs;
}

// enter in an integer unit as a parameter (like "1" in "MV1")
// function an array of strings of subtopic names.
async function getSubtopicsInUnit(unit) {
  const textbookSectionsColRef = collection(db, "textbookSections");
  const mvQuery = query(textbookSectionsColRef, where("unit", "==", unit));
  const snapshot = await getDocs(mvQuery);
  const res = snapshot.docs[0].data().subtopics;
  return res;
}

// parameter is a subtopic name
// returns an array of question objects
async function getQuestionsBySubtopic(subtopic) {
  const col = collection(db, "questions");
  const q = query(col, where("subtopics", "array-contains", subtopic));
  const snapshot = await getDocs(q);
  const res = [];
  snapshot.docs.forEach((doc) => res.push({ ...doc.data() }));
  return res;
}

async function getQuestionsByUnit(unit) {
  let res = [];
  const subtopics = await getSubtopicsInUnit(unit);
  console.log("subtopics ", subtopics);
  for (let i = 0; i < subtopics.length; i++) {
    const questions = await getQuestionsBySubtopic(subtopics[i]);
    res.push(...questions);
  }
  return res;
}

// const questionsColRef = collection(db, "questions");
// const questions = ref([]);

// getDocs(questionsColRef).then((snapshot) => {
//   let docs = [];
//   snapshot.docs.forEach((doc) => {
//     docs.push({ ...doc.data(), id: doc.id });
//   });
//   questions.value = docs;
// });

export {
  getSubtopicsInUnit,
  getQuestionsBySubtopic,
  getQuestionsByUnit,
  getUnits,
};
