import {Link} from "react-router-dom"


const Bloglist = ({ blogs, title, }) => {
    return (
        <div>
        <div className="d-flex">
        <div className="">
       <h5>Welcome to Jinad's blog</h5><br />
       <h6> Clean Water and Sanitation to the Forefront of Change</h6>
       <p>At Jinad's, we are passionate about making a difference in the world by addressing one of the most critical issues of our time: access to clean water and sanitation. Our mission is aligned with the United Nations' Sustainable Development Goal 6, which aims to ensure availability and sustainable management of water and sanitation for all. Through this platform, we aspire to educate, inspire, and drive action towards a future where every individual has access to clean and safe water resources</p>
       </div>
        <div className="image-holder">
        <img src="https://i.pinimg.com/564x/c5/bd/56/c5bd5656e0b104927a39fe723643e6aa.jpg" alt=""className="polluted"/>
        </div>
       
        </div>
        <div className="blog-list">
            <p>{title}</p>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to= {`/blogs/${blog.id}`}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    </Link>
                </div>
            ))
            }
        </div>
      
        </div>
    );
}

export default Bloglist;