import { Link } from 'react-router'

export default function Navbar() {
  return (
    <div style={{display:"flex" , justifyContent:"space-around"}}>
        <Link to="/register"><p>Register</p></Link>
        <Link to="/login"><p>Login</p></Link>
        <Link to="/dashboard"><p>Dashboard</p></Link>
    </div>
  )
}
