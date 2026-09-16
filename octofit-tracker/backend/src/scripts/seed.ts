import mongoose from 'mongoose';
import { connectDatabase } from '../config/database.js';
import { Activity, Leaderboard, Team, User, Workout } from '../models.js';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await connectDatabase();

    await Promise.all([
      User.deleteMany({}),
      Team.deleteMany({}),
      Activity.deleteMany({}),
      Leaderboard.deleteMany({}),
      Workout.deleteMany({}),
    ]);

    const users = await User.insertMany([
      { name: 'Avery Chen', email: 'avery.chen@example.com', grade: 10 },
      { name: 'Jordan Williams', email: 'jordan.williams@example.com', grade: 11 },
      { name: 'Samira Patel', email: 'samira.patel@example.com', grade: 9 },
    ]);

    const teams = await Team.insertMany([
      { name: 'Trailblazers', coach: 'Paul Octo', members: [users[0]._id, users[1]._id] },
      { name: 'Peak Performers', coach: 'Paul Octo', members: [users[2]._id] },
    ]);

    await Activity.insertMany([
      { user: users[0]._id, type: 'Running', durationMinutes: 32, distanceMiles: 3.1, points: 42, completedAt: new Date('2026-09-12') },
      { user: users[1]._id, type: 'Strength training', durationMinutes: 45, points: 38, completedAt: new Date('2026-09-13') },
      { user: users[2]._id, type: 'Walking', durationMinutes: 50, distanceMiles: 2.4, points: 30, completedAt: new Date('2026-09-14') },
    ]);

    await Leaderboard.insertMany([
      { user: users[0]._id, team: teams[0]._id, points: 420, rank: 1 },
      { user: users[1]._id, team: teams[0]._id, points: 380, rank: 2 },
      { user: users[2]._id, team: teams[1]._id, points: 300, rank: 3 },
    ]);

    await Workout.insertMany([
      { name: 'Quick Cardio Boost', category: 'Cardio', difficulty: 'Beginner', durationMinutes: 20, description: 'Alternate brisk walking and jogging for a steady energy boost.' },
      { name: 'Full Body Circuit', category: 'Strength', difficulty: 'Intermediate', durationMinutes: 30, description: 'Complete bodyweight squats, push-ups, lunges, and planks.' },
      { name: 'Mobility Reset', category: 'Flexibility', difficulty: 'Beginner', durationMinutes: 15, description: 'Move through gentle stretches for hips, shoulders, and back.' },
    ]);

    console.log('Seeded the octofit_db database with test data');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
