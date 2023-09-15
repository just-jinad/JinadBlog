import React from "react";
import {Link} from "react-router-dom"


const Bloglist = ({ blogs, title, }) => {
    return (
   
        <>
        {/* <div className="App">
        <section blogs="animate fade-up"> */}
        <div id="carouselExampleFade" className="carousel slide carousel-fade">
    <div className="carousel-inner ">
      <div className="carousel-item active">
      <div className="get-position rounded ms-md-5 px-3 px-md-5  mx-auto " >
       <h3 className="px-3">Welcome to Jinad's blog</h3><br />
       <h6 className="px-3"> Clean Water and Sanitation to the Forefront of Change</h6>
       <p className="col-md-6 col-12 carousel-text px-3 text-light">At Jinad's, we are passionate about making a difference in the world by addressing one of the most critical issues of our time: access to clean water and sanitation. Our mission is aligned with the United Nations' Sustainable Development Goal 6, which aims to ensure availability and sustainable management of water and sanitation for all. Through this platform, we aspire to educate, inspire, and drive action towards a future where every individual has access to clean and safe water resources</p>
       </div>
        <img  src="https://img.freepik.com/free-photo/macro-green-leaf_23-2148212007.jpg?size=626&ext=jpg&ga=GA1.1.26054885.1689417218&semt=ais" className="d-block px-md-5  px-2 w-100 rounded" alt="..."/>
      </div>
      <div className="carousel-item">
      <div className="get-position rounded ms-md-5 px-3  px-md-5  mx-auto " >
       <h3>Welcome to Jinad's blog</h3><br/>
       <h6> Clean Water and Sanitation to the Forefront of Change</h6>
       <p className="col-md-6 col-12 text-light px-3 carousel-text">At Jinad's, we are passionate about making a difference in the world by addressing one of the most critical issues of our time: access to clean water and sanitation. Our mission is aligned with the United Nations' Sustainable Development Goal 6, which aims to ensure availability and sustainable management of water and sanitation for all. Through this platform, we aspire to educate, inspire, and drive action towards a future where every individual has access to clean and safe water resources</p>
       </div>
        <img src="https://img.freepik.com/free-photo/beautiful-shot-sea-with-windmills-factory-distance-cloudy-sky_181624-11846.jpg?w=740&t=st=1693580433~exp=1693581033~hmac=2789095bf13b3fd77450e6112467a52a739b2c1cff0c3a6b39b1dfda783bdaab" className="d-block px-md-5 px-3 w-100 rounded" alt="..."/>
      </div>
      <div className="carousel-item">
      <div className="get-position rounded ms-md-5 px-3 px-md-5  mx-auto " >
       <h3>Welcome to Jinad's blog</h3><br />
       <h6> Clean Water and Sanitation to the Forefront of Change</h6>
       <p className="col-md-6 col-12 text-light px-3 carousel-text">At Jinad's, we are passionate about making a difference in the world by addressing one of the most critical issues of our time: access to clean water and sanitation. Our mission is aligned with the United Nations' Sustainable Development Goal 6, which aims to ensure availability and sustainable management of water and sanitation for all. Through this platform, we aspire to educate, inspire, and drive action towards a future where every individual has access to clean and safe water resources</p>
       </div>
        <img src="https://img.freepik.com/premium-photo/silhouettes-animals-terrain-with-ecological-problems-polluted-air-by-factories-toxic-waste-water-pollution-generative-ai_131265-169.jpg?size=626&ext=jpg&ga=GA1.1.26054885.1689417218&semt=ais" className="d-block px-md-5 px-3 w-100 rounded" alt="..."/>
      </div>
    </div>
  
    <button className="carousel-control-prev px-2 fw-bold" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
  
    <button className="carousel-control-next  px-2 fw-bold" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
 
 
       
        <div classNameName="blog-list">
            <p>{title}</p>
            {blogs.map((blog) => (
                <div classNameName="blog-preview" key={blog.id}>
                    <Link to= {`/blogs/${blog.id}`}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    </Link>
                </div>
            ))
            }
        </div>        
        </>
        
    );
}

export default Bloglist;