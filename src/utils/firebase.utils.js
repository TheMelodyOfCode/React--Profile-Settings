// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { 
    getFirestore, 
    doc,
    // getDoc, 
    // setDoc,
    // updateDoc,
    collection,
    writeBatch,
    // query,
    // getDocs,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAv7g5iENUmDyCcV2xJK_Q8b4saUaRdqKU",
  authDomain: "profilesettings-396e5.firebaseapp.com",
  projectId: "profilesettings-396e5",
  storageBucket: "profilesettings-396e5.appspot.com",
  messagingSenderId: "437035133332",
  appId: "1:437035133332:web:ec0fc46c2711fd9af18781"
};

// Initialize Firebase
initializeApp(firebaseConfig);

/* This singleton instanciates Firestore and directly points to the 
DB inside in our console on the website */
export const db = getFirestore();




// ### UPLOAD FILES TO DB !! ###
// #############################
export const addCollectionAndDocuments = async (collectionKey, documentsToAdd) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);
      documentsToAdd.forEach((object)=>{
      const docRef = doc(collectionRef, object.title.toLowerCase());
      batch.set(docRef, object );
    });
    await batch.commit();
    console.log('done uploading the documents baby!');
  }

// ### put hook in jsx file and import file to upload 
// just let it run once and out-comment again 
// you can also directly upload from the firestore website if you want
    // import NAME_OF_FILE_TO_UPLOAD from '../FILE_LOCATION';
    // impport method
    // useEffect(()=> {
    //     addCollectionAndDocuments('COLLECTION_NAME', NAME_OF_FILE_TO_UPLOAD)
    // }, []);