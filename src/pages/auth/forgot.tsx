import {Link} from 'react-router-dom'
import './assets/index.css'
import { ForgotViewModel } from './view-model'
const Main = () => {
    const {
        loading,
        error,
        success,
        updateEmail,
        recover,
    } = ForgotViewModel()
    return (
        <div className='container'>
            <p className='w-100 text-right pt-2'>
                {loading && <a className='small'>&nbsp;</a>}
                {!loading && <Link to={'/'} className="small">Home</Link>}
            </p>

            <div className="d-flex justify-content-center align-items-center mt-5">
                <div className="card card-auth">
                    <div className="card-header forgot-header p-2 text-center">
                        <span className='m-0'>Recover Password</span>
                    </div>
                    <div className='card-body pt-0 px-0'>
                        <div className="form px-4 pt-5">
                            <p>Enter your email to receive instructions on how recover your passowrd</p>
                            <input type="email" className="form-control" placeholder="Email" onChange={e => updateEmail(e) } disabled={loading}/>
                            <div className="d-flex justify-content-between align-items-center">
                                <Link to={'/login'} className="small">Login</Link>
                                <Link to={'/signup'} className="small">Signup</Link>
                            </div>
                            {error && <span className='text-danger small'>{error}</span>}
                            {success && <span className='text-success small'>{success}</span>}
                        </div>
                    </div>
                    <div className='card-footer'>
                        {loading && <span className='btn btn-success btn-block'>Loading...</span>}
                        {!loading && <button className="btn btn-success btn-block" onClick={e => recover()}>Send</button>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main