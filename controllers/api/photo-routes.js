require('dotenv').config();
const router = require('express').Router();
const multer = require('multer');
const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');

const upload = multer();


const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
    region: 'us-west-2'
})


router.post('/', upload.single('photo'), function (req, res, next) {
    console.log(uuidv4());
    const photoId = uuidv4();
    const params = { Bucket: 'vibe-ucb-photos', Key: photoId, Body: req.file.buffer };
    s3.upload(params, function(err, data) {
        if (err) {
            res.status(500).json({message: 'Failed to upload a photo'});
            return;
        }
        res.json({message: 'Success!', photoId: photoId});
    })
});

module.exports = router;
