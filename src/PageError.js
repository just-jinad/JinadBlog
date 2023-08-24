import {Link} from "react-router-dom"
const PageError = () => {
    return (
        <div>
            <p>Sorry page not Found</p>
           <Link to="/">Go back Home</Link>
        </div>
      );
}
 
export default PageError;