// const path = require("path");
// const multer = require("multer");

// const storage=multer.diskStorage({
//     destination:(req, file, cb) =>{
//         cb(null,"images")
//     },
//     filename:(req, file, cb) =>{
//         cb(null, Date.now() + path.extname(file.originalname))
//     }
// })

// const upload =multer({
//     storage:storage,
//     limits:{fileSize: '5000000'},
//     fileFilter: (req, file, cb)=> {
//         const fileTypes= /jpeg|jpg|png|gif/
//         const mimetype=fileTypes.test(file.mimetype)
//         const extname=fileTypes.test(path.extname(file.originalname))

//         if(mimetype && extname){
//             return cb(null,true)
//         }
//         cb('Give proper file fomrat to upload')
//     }
// }).single('image')

// router.post("/upload", upload.single("file"), (req, res) => {
//     if (req.file) {
//     res.send("Single file uploaded successfully");
//     } else {
//     res.status(400).send("Please upload a valid image");
//     }
//     });

// module.exports=upload



// const multer  = require('multer')
// const upload = multer({ dest: 'path' })
// app.post('/upload', upload.single('avatar'), function (req, res) {
//    // req.file is the name of your file in the form above, here 'uploaded_file'
//    // req.body will hold the text fields, if there were any 
//    console.log(req.file, req.body)
// });


// const formData = new FormData();
// formData.append("image", image.value);
// // formData.append("files", files.files[0])

// fetch("http://localhost:30001/upload_files", {
//     method: 'POST',
//     body: formData,
//     headers: {
//       "Content-Type": "multipart/form-data"
//     }
// })
//     .then((res) => console.log(res))
//     .catch((err) => ("Error occured", err));

//     app.post("/upload_files", uploadFiles);
// function uploadFiles(req, res) {
//     console.log(req.body);
// }

// const {upload} =require('../../midupload')
// const path = require("path");
// const multer = require("multer");

// router.post("/", upload.single('image'), (req, res) => {
//   if (!req.file) {
//       console.log("No file upload");
//   } else {
//       console.log(req.file.filename)
//       var imgsrc = 'http://localhost:3001/images/' + req.file.filename
//       var insertData = "INSERT INTO products(image)VALUES(?)"
//       db.query(insertData, [imgsrc], (err, result) => {
//           if (err) throw err
//           console.log("file uploaded")
//       })
//   }
// });