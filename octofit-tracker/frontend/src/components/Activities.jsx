import CollectionPage from './CollectionPage.jsx'

const activitiesEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/activities/`
  : 'http://localhost:8000/api/activities/'

export default function Activities() {
  return <CollectionPage endpoint={activitiesEndpoint} title="Activities" description="Recent movement logged by the OctoFit community." columns={[{ key: 'type', label: 'Activity' }, { key: 'durationMinutes', label: 'Minutes' }, { key: 'distanceMiles', label: 'Miles' }, { key: 'points', label: 'Points' }, { key: 'completedAt', label: 'Completed' }]} />
}