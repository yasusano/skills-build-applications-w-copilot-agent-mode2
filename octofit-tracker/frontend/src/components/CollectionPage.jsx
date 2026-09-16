import { useEffect, useState } from 'react'
import { fetchCollection } from '../api.js'

export default function CollectionPage({ endpoint, title, description, columns }) {
  const [items, setItems] = useState([])
  const [state, setState] = useState('loading')

  useEffect(() => {
    let active = true
    fetchCollection(endpoint)
      .then((records) => {
        if (active) {
          setItems(records)
          setState('ready')
        }
      })
      .catch(() => active && setState('error'))
    return () => { active = false }
  }, [endpoint])

  return (
    <section className="collection-page">
      <div className="page-heading">
        <div><p className="eyebrow">OCTOFIT DATA</p><h2>{title}</h2><p className="lede">{description}</p></div>
        {state === 'ready' && <span className="count-badge">{items.length} records</span>}
      </div>
      {state === 'loading' && <p className="notice">Loading {title.toLowerCase()}...</p>}
      {state === 'error' && <p className="notice error">Unable to reach the API. Check that the backend is running on port 8000.</p>}
      {state === 'ready' && <DataTable columns={columns} items={items} />}
    </section>
  )
}

function DataTable({ columns, items }) {
  if (!items.length) return <p className="notice">No records yet.</p>
  return <div className="table-wrap"><table><thead><tr>{columns.map(({ key, label }) => <th key={key}>{label}</th>)}</tr></thead><tbody>{items.map((item, index) => <tr key={item._id ?? item.id ?? index}>{columns.map(({ key }) => <td key={key}>{formatValue(item[key])}</td>)}</tr>)}</tbody></table></div>
}

function formatValue(value) {
  if (value === null || value === undefined) return '-'
  if (typeof value === 'object') return Array.isArray(value) ? value.length : value.name ?? value._id ?? JSON.stringify(value)
  return String(value)
}