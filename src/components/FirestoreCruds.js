import React, { useEffect, useState } from 'react'

import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
function FirestoreCruds() {
  const [DocId, setDocId] = useState(null)

  let collRef = collection(db, "Notes")
  useEffect(() => {

    addFire()

  }, [])

  const addFire = async () => {
    try {
      const docRef = await addDoc(collRef, {
        first: "Ada",
        last: "Lovelace",
        born: 1815
      });
      console.log("Document written with ID: ", docRef?.id);

      setDocId(docRef?.id)
    } catch (e) {
      console.error("Error adding document: ", e);
    }

  }

  return (
    <>
      <div>FirestoreCruds</div>
      <h1>{DocId}</h1>
    </>
  )
}

export default FirestoreCruds