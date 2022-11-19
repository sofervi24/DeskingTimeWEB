import {Link} from 'react-router-dom'
import './assets/index.css'
const Main = () => {
    return (
        <div className='container'>
            <p className='text-center'>
                <Link to={'/'} className="small">Home</Link>
            </p>
        </div>
    )
}

export default Main