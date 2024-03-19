import express from 'express';
import router from './routes/information';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/information', router);

app.listen(PORT, () => {
  console.log(`Backend server is running on port ${PORT}`);
});
