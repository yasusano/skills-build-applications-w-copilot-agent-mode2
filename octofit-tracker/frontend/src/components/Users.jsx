import CollectionPage from './CollectionPage.jsx'

const usersEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/users/`
  : 'http://localhost:8000/api/users/'

export default function Users() {
  return <CollectionPage endpoint={usersEndpoint} title="Users" description="Student profiles participating in OctoFit." columns={[{ key: 'name', label: 'Name' }, { key: 'email', label: 'Email' }, { key: 'grade', label: 'Grade' }]} />
}