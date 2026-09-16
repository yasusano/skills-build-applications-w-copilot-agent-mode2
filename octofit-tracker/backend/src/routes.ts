import { Router } from 'express';
import { Activity, Leaderboard, Team, User, Workout } from './models.js';

function createCollectionRouter(model: { find: () => { lean: () => Promise<unknown[]> } }) {
  const router = Router();

  router.get('/', async (_request, response, next) => {
    try {
      response.json(await model.find().lean());
    } catch (error) {
      next(error);
    }
  });

  return router;
}

export const usersRouter = createCollectionRouter(User);
export const teamsRouter = createCollectionRouter(Team);
export const activitiesRouter = createCollectionRouter(Activity);
export const leaderboardRouter = createCollectionRouter(Leaderboard);
export const workoutsRouter = createCollectionRouter(Workout);