import CollectionPage from './CollectionPage.jsx'

export default function Leaderboard() {
  return <CollectionPage endpoint="leaderboard" title="Leaderboard" description="A friendly snapshot of this week's points race." columns={[{ key: 'rank', label: 'Rank' }, { key: 'user', label: 'Athlete' }, { key: 'team', label: 'Team' }, { key: 'points', label: 'Points' }]} />
}