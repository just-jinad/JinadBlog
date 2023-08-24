
import Bloglist from './Bloglist';
import useFetch from './useFetch'
const Home = () => {
    const {error, isPending, blogs} = useFetch("http://localhost:8000/blogs")
    
    return (
        <div className="home">
            {error && <div> {error} </div>}
            {isPending && <div>  <b> loading.. </b></div>}
           { blogs && <Bloglist blogs={blogs} title="List of blogs" /> }
          
        </div>

    );
}

export default Home;