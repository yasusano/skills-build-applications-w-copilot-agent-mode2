import CollectionPage from './CollectionPage.jsx'

export default function Users() {
  return <CollectionPage endpoint="users" title="Users" description="Student profiles participating in OctoFit." columns={[{ key: 'name', label: 'Name' }, { key: 'email', label: 'Email' }, { key: 'grade', label: 'Grade' }]} />
}