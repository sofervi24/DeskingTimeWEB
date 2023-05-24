import {Link} from 'react-router-dom'
import { SignUpViewModel } from './view-model'
import './assets/index.css'
const Main = () => {
    const {
        loading,
        error,
        updateFirstName,
        updateLastName,
        updateEmail,
        updatePassword,
        updateRepeatPassword,
        signup
    } = SignUpViewModel()
    return (
        <div className='container'>
            <p className='w-100 text-right pt-2'>
                {loading && <a className='small'>&nbsp;</a>}
                {!loading && <Link to={'/'} className="small">Home</Link>}
            </p>
            <div className="d-flex justify-content-center align-items-center mt-5">
                <div className="card card-auth">
                    <div className='card-body pt-0 px-0'>
                        <ul className="nav nav-pills nav-fill mb-3" role={'tablist'}>
                            <li className="nav-item text-center">
                                {loading && <a className='nav-link btr'>Login</a>}
                                {!loading && <Link to={'/login'} className="nav-link btl">Login</Link>}
                            </li>
                            <li className="nav-item text-center">
                                <a className='nav-link active btr'>Signup</a>
                            </li>
                        </ul>
                        <div className='tab-content'>
                            <div className='tab-pane fade show active'>
                                <div className="form px-4">
                                    <input type="text" className="form-control" placeholder="First Name" onChange={e => updateFirstName(e)} disabled={loading}/>
                                    <input type="text" className="form-control" placeholder="Last Name" onChange={e => updateLastName(e)} disabled={loading}/>
                                    <input type="email" className="form-control" placeholder="Email" onChange={e => updateEmail(e)} disabled={loading}/>
                                    <input type="password" className="form-control" placeholder="Password (8 characters minimun)" onChange={e => updatePassword(e)} disabled={loading}/>
                                    <input type="password" className="form-control" placeholder="Repeat Password" onChange={e => updateRepeatPassword(e)} disabled={loading}/>
                                    {error && <span className='text-danger small'>{error}</span>}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='card-footer'>
                        {loading && 
                            <span className='btn btn-success btn-block'>Loading...</span>
                        }
                        {!loading &&
                            <button className="btn btn-success btn-block" onClick={e => signup()}>Send</button>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main