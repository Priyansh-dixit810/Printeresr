import './app.css'
import Gallery from './component/gallery/gallery'
import Leftbar from './component/leftbar/leftbar'
import Topbar from './component/topbar/topbar'

const App = () => {
  return (
    <div className='flex w-full p-0'>
      <Leftbar />
      <div className='content bg-gray-20 flex-1 p-6'>
        <Topbar />
        <Gallery />
      </div>
    </div>
  )
}

export default App