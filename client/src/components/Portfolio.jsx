import { Link } from 'react-router-dom'
import Projects from './Projects'

export default function Portfolio() {
  return (
    <>
    <Link to={<Projects/>} />
    <div>Portfolio</div>
    </>
    
  )
}
