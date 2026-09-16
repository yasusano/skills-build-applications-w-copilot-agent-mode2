import CollectionPage from './CollectionPage.jsx'

const workoutsEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`
  : 'http://localhost:8000/api/workouts/'

export default function Workouts() {
  return <CollectionPage endpoint={workoutsEndpoint} title="Workouts" description="Personalized ideas for the next training session." columns={[{ key: 'name', label: 'Workout' }, { key: 'category', label: 'Category' }, { key: 'difficulty', label: 'Level' }, { key: 'durationMinutes', label: 'Minutes' }, { key: 'description', label: 'Details' }]} />
}