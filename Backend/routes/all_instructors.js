import { connectToDB } from '../utils/connectToDB.js';

const getInstructors = (req, res) => {
    connectToDB().collection('instructors').find().toArray((err, result) => {
        res.send(result);
        if (err) {
            throw err;
        }   
    });
};

export default function register(app) {
	app.get('/instructors', getInstructors);
};