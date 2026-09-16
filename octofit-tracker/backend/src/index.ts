import express from 'express';
import { apiBaseUrl } from './config/api.js';
import { connectDatabase } from './config/database.js';
import {
  activitiesRouter,
  leaderboardRouter,
  teamsRouter,
  usersRouter,
  workoutsRouter,
} from './routes.js';

const app = express();
const port = Number(process.env.PORT) || 8000;

app.use(express.json());

app.use('/api/users', usersRouter);
app.use('/api/teams', teamsRouter);
app.use('/api/activities', activitiesRouter);
app.use('/api/leaderboard', leaderboardRouter);
app.use('/api/workouts', workoutsRouter);

app.get('/api/health', (_request, response) => {
  response.json({ status: 'ok', apiBaseUrl });
});

connectDatabase()
  .then(() => {
    app.listen(port, () => {
      console.log(`OctoFit backend listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Unable to connect to MongoDB:', error);
    process.exit(1);
  });