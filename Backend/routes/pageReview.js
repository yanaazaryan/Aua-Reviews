import { connectToDB } from '../utils/connectToDB.js';

const addPageReview = (req, res) => {
    connectToDB().collection('reviews').insertOne((req.body), (err, res) => {  
        if (err) {
            throw err;
        } 
    });
};

export default function register(app) {
    app.post('/review', addPageReview);
};
