import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  return res.send('Hello from the information route!');
});

export default router;
