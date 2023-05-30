import {Link} from 'react-router-dom'
import ViewModel from './view-model'
import {NavType, NavbarOptions} from './types'
import './assets/index.css'

const Main = (options: NavbarOptions) => {
    const {
        toggled, 
        buttonClicked
    } = ViewModel()
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
                    <div className={`navbar-collapse ${toggled?`not-hidden h-${options.items.length}`:''}`}>
                        <ul className="navbar-nav ms-auto py-4 py-lg-0">
                            {options.items.map(i => {
                                return (
                                    <li key={i.id} className="nav-item">
                                        {i.type == NavType.internalLink && 
                                            <Link className="nav-link px-lg-3 py-3 py-lg-4" to={i.path}>{i.name}</Link>                     
                                        }
                                        {i.type == NavType.externallLink && 
                                            <a className="nav-link px-lg-3 py-3 py-lg-4" href={i.path}>{i.name}</a>
                                        }
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