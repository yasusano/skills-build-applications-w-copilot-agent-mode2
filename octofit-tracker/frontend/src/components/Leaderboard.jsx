import CollectionPage from './CollectionPage.jsx'

const leaderboardEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`
  : 'http://localhost:8000/api/leaderboard/'

export default function Leaderboard() {
  return <CollectionPage endpoint={leaderboardEndpoint} title="Leaderboard" description="A friendly snapshot of this week's points race." columns={[{ key: 'rank', label: 'Rank' }, { key: 'user', label: 'Athlete' }, { key: 'team', label: 'Team' }, { key: 'points', label: 'Points' }]} />
}