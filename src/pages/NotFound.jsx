import {FaHome} from 'react-icons/fa'
import { Link } from 'react-router-dom'
function NotFound () {
    return (
        <div>
            <div>
                <div>
                    <h1>
                        Ooops
                    </h1>
                    <p>404 - Page not found!</p>
                    <Link to='/'>
                        <FaHome />
                        Back to home
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NotFound