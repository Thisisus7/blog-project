import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>I'm so sorry</h2>
            <p>That page doesn't exist, please check the url.</p>
            <Link to="/">Back to the homepage...</Link>
        </div>
    );
}
 
export default NotFound;