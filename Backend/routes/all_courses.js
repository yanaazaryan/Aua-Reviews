import { connectToDB } from '../utils/connectToDB.js';

const getCourses = (req, res) => {
    connectToDB().collection('courses').find().toArray((err, result) => {
        res.send(result);
        if (err) {
            throw err;
        }   
    });
};

export default function register(app) {
	app.get('/courses', getCourses);
};