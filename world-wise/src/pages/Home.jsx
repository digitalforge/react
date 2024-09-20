import { Link } from 'react-router-dom'
import PageNav from '../components/PageNav'
import AppNav from '../components/AppNav'
function Home() {
  return (
    <div>
      <AppNav />
      <PageNav />
      <h1 className='test'>World Wise</h1>
      <Link to='/app'>Go to the App</Link>
    </div>
  )
}

export default Home
