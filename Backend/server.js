import dotenv from 'dotenv';
import app from './app.js';

dotenv.config();

const port = process.env.PORT || 9111;

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port} 🚀`);
});
