import AWS from 'aws-sdk';
import dotenv from 'dotenv';

dotenv.config({path:".env"});
AWS.config.update({region: process.env.REGION});

const options = {
    apiVersion: '2006-03-01',
    params: {
      Bucket: process.env.BUCKET_NAME
    },
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    signatureVersion: 'v4'
  }
const s3 = new AWS.S3(options);

const uploadFile = async(file) =>{
    const uploadParams = {
        Bucket: process.env.BUCKET_NAME,
        Key: file.originalname,
        Body: file.buffer
    }
    const data =await s3.upload(uploadParams).promise();
    return {key: data.Key, location: data.Location};
}

const deleteFile = async(key) =>{
    const uploadParams = {
        Bucket: process.env.BUCKET_NAME,
        Key: key,
    }
    const data =await s3.deleteBucket(uploadParams).promise();
    return data.$response;
}


export default {
    uploadFile,
    deleteFile,
}