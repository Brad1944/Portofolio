// Simple express server with routes
import express from 'express';

// Import all routes from routes/io.ts
import { router as ioRoutes } from './routes/io';

const app = express();
const port = 8080;

app.use(express.json());
app.use('/io', ioRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});