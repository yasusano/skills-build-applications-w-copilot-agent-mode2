import CollectionPage from './CollectionPage.jsx'

const teamsEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/teams/`
  : 'http://localhost:8000/api/teams/'

export default function Teams() {
  return <CollectionPage endpoint={teamsEndpoint} title="Teams" description="Find your crew and keep the momentum going." columns={[{ key: 'name', label: 'Team' }, { key: 'coach', label: 'Coach' }, { key: 'members', label: 'Members' }]} />
}