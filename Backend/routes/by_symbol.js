import { connectToDB } from '../utils/connectToDB.js';

const getBySymbolCourse = (req, res) => {
    let symbol = req.params.symbol;

    connectToDB().collection('courses').find({ symbol: symbol }).toArray((err, result) => {
        res.send(result);
        if (err) {
            throw err;
        }   
    });
};

const getBySymbolInstructor = (req, res) => {
    let symbol = req.params.symbol;

    connectToDB().collection('instructors').find({ symbol: symbol }).toArray((err, result) => {
        res.send(result);
        if (err) {
            throw err;
        }   
    });
};

const updateBySymbolCourse = (req, res) => {
    let symbol = req.params.symbol;

    connectToDB().collection('courses').updateMany({ symbol: symbol }, { $push: { reviews: req.body.review }}, (err, res) => {  
        if (err) {
            throw err;
        } 
    });
};

const updateBySymbolInstructor = (req, res) => {
    let symbol = req.params.symbol;

    connectToDB().collection('instructors').updateMany({ symbol: symbol }, { $push: { reviews: req.body.review }}, (err, res) => {  
        if (err) {
            throw err;
        } 
    });
};

export default function register(app) {
	app.get('/course/:symbol', getBySymbolCourse);
    app.get('/instructor/:symbol', getBySymbolInstructor);
    app.put('/course/:symbol', updateBySymbolCourse);
    app.put('/instructor/:symbol', updateBySymbolInstructor);
};
