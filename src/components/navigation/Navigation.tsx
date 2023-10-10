import { Link } from '@tanstack/react-router'

export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/schedule">Schedule</Link>
        </li>
        <li>
          <Link to="/students">Students</Link>
        </li>
      </ul>
    </nav>
  )
}
