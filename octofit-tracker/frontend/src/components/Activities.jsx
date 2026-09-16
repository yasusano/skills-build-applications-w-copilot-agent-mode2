import CollectionPage from './CollectionPage.jsx'

export default function Activities() {
  return <CollectionPage endpoint="activities" title="Activities" description="Recent movement logged by the OctoFit community." columns={[{ key: 'type', label: 'Activity' }, { key: 'durationMinutes', label: 'Minutes' }, { key: 'distanceMiles', label: 'Miles' }, { key: 'points', label: 'Points' }, { key: 'completedAt', label: 'Completed' }]} />
}