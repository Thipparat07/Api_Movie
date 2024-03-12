// //Routerหาเส้นทาง
// import express from "express";
// import multer from 'multer';
// import path from "path"
// import { getStorage, ref, getDownloadURL, uploadBytesResumable } from "firebase/storage"
// import { initializeApp } from "firebase/app";
// export const router = express.Router();
// import dotenv from 'dotenv';

// // Load environment variables from .env file
// dotenv.config();

// const firebaseConfig = {
//   apiKey: process.env.FIREBASE_API_KEY,
//   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.FIREBASE_PROJECT_ID,
//   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.FIREBASE_APP_ID,
//   measurementId: process.env.FIREBASE_MEASUREMENT_ID
// };


// initializeApp(firebaseConfig);
// const storage = getStorage();

// class FileMiddleware {
//     //Attribute  filename
//     filename = "";

//     //Attribute  diskLoader
//     //Create opject of diskLoader for saving file
//     public readonly diskLoader = multer({
//         //storage = define folder (disk) to be saved
//         storage: multer.memoryStorage(),
//         limits: {
//             fileSize: 67108864, // 64 MByte
//         },
//     });
// }

// const fileUpload = new FileMiddleware();

// router.post("/", fileUpload.diskLoader.single("file"), async (req, res) => {

//     const filename = Date.now() + "-" + Math.round(Math.random() * 10000) + ".png";

//     const storageRef = ref(storage, "/imagse/" + filename);

//     const metadata = {
//         contentType: req.file!.mimetype
//     }

//     const snapshot = await uploadBytesResumable(storageRef, req.file!.buffer, metadata);

//     const url = await getDownloadURL(snapshot.ref);

//     res.status(200).json({
//         file: url + fileUpload.filename
//     });
// })



// //GET/upload
// router.get('/', (req, res) => {
//     res.send('Method Get in upload.ts');
// });

// Router for handling routes
// import express from "express";
// import multer from 'multer';
// import { getStorage, ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
// import { initializeApp } from "firebase/app";
// import dotenv from 'dotenv';

// // Load environment variables from .env file
// dotenv.config();

// // Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.FIREBASE_API_KEY,
//   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.FIREBASE_PROJECT_ID,
//   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.FIREBASE_APP_ID,
//   measurementId: process.env.FIREBASE_MEASUREMENT_ID
// };

// // Initialize Firebase
// initializeApp(firebaseConfig);

// // Get a reference to Firebase Storage
// const storage = getStorage();

// // Define a class for file middleware
// class FileMiddleware {
//   // Attribute filename
//   filename = "";

//   // Attribute diskLoader
//   // Create object of diskLoader for saving file
//   public readonly diskLoader = multer({
//     // Define folder (disk) to be saved
//     storage: multer.memoryStorage(),
//     limits: {
//       fileSize: 67108864, // 64 MByte
//     },
//   });
// }

// // Create an instance of FileMiddleware
// const fileUpload = new FileMiddleware();

// // Define the router
// const router = express.Router();

// // Handle POST request for file upload
// router.post("/", fileUpload.diskLoader.single("file"), async (req, res) => {
//   const filename = Date.now() + "-" + Math.round(Math.random() * 10000) + ".png";
//   const storageRef = ref(storage, "/images/" + filename);

//   const metadata = {
//     contentType: req.file!.mimetype
//   }

//   const snapshot = await uploadBytesResumable(storageRef, req.file!.buffer, metadata);
//   const url = await getDownloadURL(snapshot.ref);

//   res.status(200).json({
//     file: url + fileUpload.filename
//   });
// });

// // Handle GET request for upload
// router.get('/', (req, res) => {
//   res.send('Method Get in upload.ts');
// });

// export { router };


