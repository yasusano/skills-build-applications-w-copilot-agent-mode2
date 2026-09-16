const codespaceName = import.meta.env.VITE_CODESPACE_NAME

export const apiBaseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000'

export function responseItems(payload) {
  if (Array.isArray(payload)) return payload
  if (Array.isArray(payload?.data)) return payload.data
  if (Array.isArray(payload?.results)) return payload.results
  if (Array.isArray(payload?.items)) return payload.items
  return []
}

export async function fetchCollection(endpoint) {
  const url = endpoint.startsWith('http') ? endpoint : `${apiBaseUrl}/api/${endpoint}/`
  const response = await fetch(url)
  if (!response.ok) throw new Error(`Unable to load ${url}`)
  return responseItems(await response.json())
}