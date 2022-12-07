import express from 'express';
import { connectToDB } from './utils/connectToDB.js';
import by_symbol from './routes/by_symbol.js';
import all_courses from './routes/all_courses.js';
import all_instructors from './routes/all_instructors.js';
import setRating from './routes/setRating.js';
import pageReview from './routes/pageReview.js';


const app = express();

connectToDB().once('open', async () => {
  console.log('Successfully connected to MongoDB using Mongoose!🥳');
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

by_symbol(app);
all_courses(app);
all_instructors(app);
setRating(app);
pageReview(app);

export default app;
