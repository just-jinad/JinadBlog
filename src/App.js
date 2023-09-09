import Navbar from './Navbar';
import Home from './Home';
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import PageError from './PageError';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './About';
import Card from './Card';

function App() {
  // useEffect(() => {
  //   const sections = document.querySelectorAll('.animate');
  //   const options = {
  //     root: null,
  //     rootMargin: '0px',
  //     threshold: 0.5,
  //   };
  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         entry.target.classList.add('active');
  //       } else {
  //         entry.target.classList.remove('active');
  //       }
  //     });
  //   }, options);

  //   sections.forEach((Bloglist) => {
  //     observer.observe(Bloglist);
  //   });

  //   return () => {
  //     observer.disconnect();
  //   };
  // }, []);
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
          
        <div className="content">
          <Switch>

            <Route exact path="/">
              <Home />
              <h2 className='text-center fw-bold'>EFFECT</h2>
              <div className='d-md-flex mt-5 mx-auto col-12 text-center justify-content-between'>
              <Card 
                   name="Reach your Goals "
                   image="https://img.freepik.com/free-photo/beautiful-shot-sea-with-windmills-factory-distance-cloudy-sky_181624-11846.jpg?w=740&t=st=1693580433~exp=1693581033~hmac=2789095bf13b3fd77450e6112467a52a739b2c1cff0c3a6b39b1dfda783bdaab"
                   style=" mx-2 px-md-4  border-none card mt-3  text-dark"
                   paragraph=" We are committed to helping smart and ambitious young African women live their best lives"
                  />
              <Card 
                   name="Reach your Goals "
                   image="https://img.freepik.com/free-photo/beautiful-shot-sea-with-windmills-factory-distance-cloudy-sky_181624-11846.jpg?w=740&t=st=1693580433~exp=1693581033~hmac=2789095bf13b3fd77450e6112467a52a739b2c1cff0c3a6b39b1dfda783bdaab"
                   style=" mx-2  border-none card mt-3  text-dark"
                   paragraph=" We are committed to helping smart and ambitious young African women live their best lives"
                  />
              <Card 
                   name="Reach your Goals "
                   image="https://img.freepik.com/free-photo/beautiful-shot-sea-with-windmills-factory-distance-cloudy-sky_181624-11846.jpg?w=740&t=st=1693580433~exp=1693581033~hmac=2789095bf13b3fd77450e6112467a52a739b2c1cff0c3a6b39b1dfda783bdaab"
                   style=" mx-2  border-none card mt-3  text-dark"
                   paragraph=" We are committed to helping smart and ambitious young African women live their best lives"
                  />
                  </div>
            </Route>

            <Route path="/Create">
              <Create />
            </Route>

            <Route path="/blogs/:id">
              <BlogDetails/>
            </Route>

            <Route path="/About">
            <About/>
          </Route>

          <Route path="*">
            <PageError/>
          </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
