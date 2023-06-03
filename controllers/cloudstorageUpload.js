const processFile = require("../Middlewares/uploadGcloud");
const { format } = require("util");
const { Storage } = require("@google-cloud/storage");
// Instantiate a storage client with credentials
const storage = new Storage({ keyFilename: "capstone-exploreka-c23-bs357-66b3022e3bb4.json" });
const bucket = storage.bucket("exploreka");
const upload = async (req, res) => {
    try {
        await processFile(req, res);

        if (!req.file) {
            return res.status(400).send({ message: "Please upload a file!" });
        }

        // Create a new blob in the bucket and upload the file data.
        const blob = bucket.file(req.file.originalname);
        const blobStream = blob.createWriteStream({
            resumable: false,
        });

        blobStream.on("error", (err) => {
            res.status(500).send({ message: err.message });
        });

        blobStream.on("finish", async (data) => {
            // Create URL for directly file access via HTTP.
            const publicUrl = format(
                `https://storage.googleapis.com/${bucket.name}/${blob.name}`
            );

            try {
                // Make the file public
                await bucket.file(req.file.originalname).makePublic();
            } catch {
                return res.status(500).send({
                    message:
                        `Uploaded the file successfully: ${req.file.originalname}, but public access is denied!`,
                    url: publicUrl,
                });
            }

            res.status(200).send({
                message: "Uploaded the file successfully: " + req.file.originalname,
                url: publicUrl,
            });
        });

        blobStream.end(req.file.buffer);
    } catch (err) {
        if (err.code === "LIMIT_FILE_SIZE") {
            return res.status(500).send({
                message: "File size cannot be larger than 2MB!",
            });
        }

        res.status(500).send({
            message: `Could not upload the file: ${req.file.originalname}. ${err}`,
        });
    }
};

const getListFiles = async (req, res) => {
    try {
        const [files] = await bucket.getFiles();
        let fileInfos = [];

        files.forEach((file) => {
            fileInfos.push({
                name: file.name,
                url: file.metadata.mediaLink,
            });
        });

        res.status(200).send(fileInfos);
    } catch (err) {
        console.log(err);

        res.status(500).send({
            message: "Unable to read list of files!",
        });
    }
};

const download = async (req, res) => {
    try {
        const [metaData] = await bucket.file(req.params.name).getMetadata();
        res.redirect(metaData.mediaLink);

    } catch (err) {
        res.status(500).send({
            message: "Could not download the file. " + err,
        });
    }
};

module.exports = {
    getListFiles,
    download,
    upload
};

// const { Storage } = require('@google-cloud/storage')
// const util = require("util");
// const Multer = require("multer");
// const maxSize = 2 * 1024 * 1024;
//
// let processFile = Multer({
//     storage: Multer.memoryStorage(),
//     limits: { fileSize: maxSize },
// }).single("file");
//
// let processFileMiddleware = util.promisify(processFile);
//
// // Initialize storage
// const storage = new Storage({
//     keyFilename: `./capstone-exploreka-c23-bs357-66b3022e3bb4.json`,
// })
//
// const imagePath =
// const bucketName = 'exploreka'
// const bucket = storage.bucket(bucketName)
//
// // Sending the upload request
// bucket.upload(
//     `${imagePath}`,
//     {
//         destination: `Photo_Profile/${imagePath}`,
//     },
//     function (err, file) {
//         if (err) {
//             console.error(`Error uploading ${imagePath}: ${err}`)
//         } else {
//             console.log(`Image ${imagePath} uploaded to ${bucketName}.`)
//
//             // Making file public to the internet
//             file.makePublic(async function (err) {
//                 if (err) {
//                     console.error(`Error making file public: ${err}`)
//                 } else {
//                     console.log(`File ${file.name} is now public.`)
//                     const publicUrl = file.publicUrl()
//                     console.log(`Public URL for ${file.name}: ${publicUrl}`)
//                 }
//             })
//
//         }
//     }
// )
