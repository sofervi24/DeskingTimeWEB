import ViewModel from './view-model'
import {NavbarOptions} from './types'
import './assets/index.css'

const Main = (options: NavbarOptions) => {
    const {toggled, buttonClicked} = ViewModel()
    return (
        <nav className="navbar navbar-expand-lg navbar-light" id="mainNav">
            <div className="container px-4 px-lg-5">
                <a className="navbar-brand">
                    Desking Time
                </a>
                <button className={`navbar-toggler`} type="button" onClick={buttonClicked}>
                    Menu
                    <i className="fas fa-bars"></i>
                </button>
                    <div className={`navbar-collapse ${toggled?'not-hidden':''}`}>
                        <ul className="navbar-nav ms-auto py-4 py-lg-0">
                            {options.items.map(i => {
                                return (
                                    <li key={i.id} className="nav-item">
                                        <a className="nav-link px-lg-3 py-3 py-lg-4">
                                            {i.name}
                                        </a>
                                    </li>
                                )  
                            })}
                        </ul>
                    </div>
            </div>
        </nav>
   )
}

export default Main