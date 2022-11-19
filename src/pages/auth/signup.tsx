import {Link} from 'react-router-dom'
import './assets/index.css'
const Main = () => {
    return (
        <div className='container'>
            <p className='w-100 text-right pt-2'>
                <Link to={'/'} className="small">Home</Link>
            </p>
            <div className="d-flex justify-content-center align-items-center mt-5">
                <div className="card card-auth">
                    <div className='card-body pt-0 px-0'>
                        <ul className="nav nav-pills nav-fill mb-3" role={'tablist'}>
                            <li className="nav-item text-center">
                                <Link to={'/login'} className="nav-link btl">Login</Link>
                            </li>
                            <li className="nav-item text-center">
                                <a className='nav-link active btr'>Signup</a>
                            </li>
                        </ul>
                        <div className='tab-content'>
                            <div className='tab-pane fade show active'>
                                <div className="form px-4">
                                    <input type="text" name="" className="form-control" placeholder="Full Name" />
                                    <input type="email" name="" className="form-control" placeholder="Email" />
                                    <input type="password" name="" className="form-control" placeholder="Password" />
                                    <input type="password" name="" className="form-control" placeholder="Repeat Password" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='card-footer'>
                        <button className="btn btn-success btn-block">Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main