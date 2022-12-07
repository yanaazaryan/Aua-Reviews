import { connectToDB } from '../utils/connectToDB.js';

const updateRatingCourse = (req, res) => {
    let symbol = req.params.symbol;

    connectToDB().collection('courses').updateMany({ symbol: symbol }, {$set: req.body}, (err, res) => {  
        if (err) {
            throw err;
        } 
    });
};

const updateRatingInstructor = (req, res) => {
    let symbol = req.params.symbol;

    connectToDB().collection('instructors').updateMany({ symbol: symbol }, {$set: req.body}, (err, res) => {  
        if (err) {
            throw err;
        } 
    });
};

export default function register(app) {
    app.put('/rating/course/:symbol', updateRatingCourse);
    app.put('/rating/instructor/:symbol', updateRatingInstructor);
};
