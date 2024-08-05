import { app } from "@/app";
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running at POST: ${port}`);
}).on('error', (error) => {
  throw new Error(error.message);
});
