import CollectionPage from './CollectionPage.jsx'

export default function Workouts() {
  return <CollectionPage endpoint="workouts" title="Workouts" description="Personalized ideas for the next training session." columns={[{ key: 'name', label: 'Workout' }, { key: 'category', label: 'Category' }, { key: 'difficulty', label: 'Level' }, { key: 'durationMinutes', label: 'Minutes' }, { key: 'description', label: 'Details' }]} />
}