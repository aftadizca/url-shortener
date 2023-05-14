// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app"
import { getFirestore, collection, query, orderBy, doc, setDoc, getDoc, getDocs, deleteDoc, Firestore } from 'firebase/firestore'
import { FIREBASE } from '$env/static/private'

interface URL {
    name: string
    url: string
}

const firebaseConfig = JSON.parse(FIREBASE)

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export async function setURL(id: string, url: string) {
    return await setDoc(doc(db, 'url', id), { url: url })
}

export async function getURL(id: string) {
    return await getDoc(doc(db, 'url', id))
}


export async function getAllURL() {
    let data
    await getDocs(collection(db, 'url')).then(x => data = x.docs.map(doc => ({ "name": doc.id, "url": doc.data().url })))
    return [...(data || [])]
}

export async function deleteURL(id: string) {
    return await deleteDoc(doc(db, 'url', id))
}