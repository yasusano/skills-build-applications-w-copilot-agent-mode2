import { NavLink, Route, Routes } from 'react-router-dom'
import Activities from './components/Activities.jsx'
import Leaderboard from './components/Leaderboard.jsx'
import Teams from './components/Teams.jsx'
import Users from './components/Users.jsx'
import Workouts from './components/Workouts.jsx'
import './App.css'

function App() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <div>
          <p className="eyebrow">MERGINGTON HIGH SCHOOL</p>
          <h1>OctoFit Tracker</h1>
        </div>
        <span className="status-dot">API online</span>
      </header>
      <nav className="app-nav" aria-label="Primary navigation">
        <NavLink to="/">Overview</NavLink>
        <NavLink to="/activities">Activities</NavLink>
        <NavLink to="/leaderboard">Leaderboard</NavLink>
        <NavLink to="/teams">Teams</NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/workouts">Workouts</NavLink>
      </nav>
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
        </Routes>
      </main>
    </div>
  )
}

function Overview() {
  return (
    <section className="overview">
      <p className="eyebrow">WEEKLY SNAPSHOT</p>
      <h2>Move together. Go further.</h2>
      <p className="lede">Track activity, celebrate progress, and keep your team moving.</p>
      <div className="overview-grid">
        <NavLink className="overview-link" to="/activities">Logged activities <strong>View activity</strong></NavLink>
        <NavLink className="overview-link" to="/leaderboard">Team standings <strong>See leaderboard</strong></NavLink>
        <NavLink className="overview-link" to="/workouts">Workout ideas <strong>Find a workout</strong></NavLink>
      </div>
    </section>
  )
}

export default App
