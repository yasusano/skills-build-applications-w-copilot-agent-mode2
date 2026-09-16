import CollectionPage from './CollectionPage.jsx'

export default function Teams() {
  return <CollectionPage endpoint="teams" title="Teams" description="Find your crew and keep the momentum going." columns={[{ key: 'name', label: 'Team' }, { key: 'coach', label: 'Coach' }, { key: 'members', label: 'Members' }]} />
}