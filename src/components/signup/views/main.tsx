import '../assets/css/bootstrap.min.css'
import '../assets/css/font-awesome.all.min.css'
import { viewModel } from '../view-model'
const sectionStyle = {
    "minHeight": "100vh", 
    "backgroundSize": "cover",
    "backgroundImage": "url(https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1920&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=c0d43804e2c7c93143fe8ff65398c8e9)",
}
export const Main = () => {
    const { formRef, onNameChange, onEmailChange, onPasswordChange, onPasswordRepeatChange, onSubmit } = viewModel()
    return (
        <section className="pt-5 pb-5 mt-0 align-items-center d-flex bg-dark" style={sectionStyle}>
            <div className="container-fluid">
                <div className="row  justify-content-center align-items-center d-flex-row text-center h-100">
                    <div className="col-12 col-md-4 col-lg-3   h-50 ">
                        <div className="card shadow">
                            <div className="card-body mx-auto">
                                <h4 className="card-title mt-3 text-center">Create Account</h4>
                                <form onSubmit={onSubmit} ref={formRef}>
                                    <div className="form-group input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"> <i className="fa fa-user"></i> </span>
                                        </div>
                                        <input 
                                            className="form-control" 
                                            placeholder="Full name" 
                                            type="text" 
                                            onChange={onNameChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"> <i className="fa fa-envelope"></i> </span>
                                        </div>
                                        <input 
                                            className="form-control" 
                                            placeholder="Email address" 
                                            type="email" 
                                            onChange={onEmailChange}
                                            required/>
                                    </div>
                                        <div className="form-group input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                                        </div>
                                        <input 
                                            className="form-control" 
                                            placeholder="Create password" 
                                            type="password" 
                                            onChange={onPasswordChange}
                                            required/>
                                    </div>
                                    <div className="form-group input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                                        </div>
                                        <input 
                                            className="form-control" 
                                            placeholder="Repeat password" 
                                            type="password" 
                                            onChange={onPasswordRepeatChange}
                                            required/>
                                    </div>
                                    <div className="form-group">
                                        <button 
                                            type="submit" 
                                            className="btn btn-primary btn-block"> Create Account </button>
                                    </div>
                                    {/* <p className="text-center">Have an account?
                                        <a href="">Log In</a>
                                    </p> */}
                                </form>
                                {/* <p className="text-muted font-weight-bold ">
                                    <span>OR</span>
                                </p>
                                <p>
                                    <a href="" className="btn btn-block btn-info">
                                    <i className="fab fa-twitter mr-2"></i>Login via Twitter</a>
                                    <a href="" className="btn btn-block btn-primary">
                                    <i className="fab fa-facebook-f mr-2"></i>Login via facebook</a>
                                </p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}