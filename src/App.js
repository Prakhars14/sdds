import React from 'react'; 
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './components/Landing';
import './App.css';
import Footer from './components/Footer';
import About from './components/About';
import Academics from './components/Academics';
import GalleryPage from './components/Gallery';
import Faculty from './components/Faculty';
import EventDetails from './components/EventDetails';
import Objectives from './components/Objectives';
import Events from './components/Events';
import Infra from './components/Infra';
import Apply from './components/Apply';
import Results from './components/Results';
import Process from'./components/Process';
import Contact from './components/Contact';

function App() {
  return (
    <>
    <div> 
      <BrowserRouter>
        <Navbar/>
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/about" exact component={About} />
            <Route path="/objectives" exact component={Objectives} />
            <Route path="/infrastructure" exact component={Infra} />
            <Route path="/academics" exact component={Academics} />
            <Route path="/faculty" exact component={Faculty} />
            <Route path="/gallery" exact component={GalleryPage} />
            <Route path="/events" exact component={Events} />
            <Route path="/apply" exact component={Apply} />
            <Route path="/results" exact component={Results} />
            <Route path="/admissionProcess" exact component={Process} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/events/:id" exact component={EventDetails} />
          </Switch>
        <Footer/>  
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
