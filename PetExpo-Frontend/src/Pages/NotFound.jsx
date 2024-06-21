
import petExpo from '../assets/petexpo.svg'
import { Link } from 'react-router-dom'
const NotFound = () =>{
    return(
        <div className="not-found-div">
            <img src={petExpo} alt="" />
            <h1>Sorry, there was an error loading the page you were looking for... </h1>
            <Link to='/'>Go Back To The Home Page</Link>
        </div>
    )
}
export default NotFound