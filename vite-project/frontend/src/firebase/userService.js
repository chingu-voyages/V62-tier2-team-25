import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./config";

export async function saveUserProfile(user) {
  if (!user?.uid) return;

  const payload = {
    uid: user.uid,
    email: user.email || "",
    name: user.displayName || "",
    photoURL: user.photoURL || "",
    updatedAt: serverTimestamp(),
    createdAt: serverTimestamp(),
  };

  await setDoc(doc(db, "users", user.uid), payload, { merge: true });
}

export async function saveCareerPathResult({ uid, prompt, response }) {
  if (!uid) return;

  await setDoc(
    doc(db, "careerPaths", `${uid}-${Date.now()}`),
    {
      uid,
      prompt,
      response,
      createdAt: serverTimestamp(),
    },
    { merge: true },
  );
}
