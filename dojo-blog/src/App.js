import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className='content'>
          {/* this switch component makes sure that only one route shows at one time */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            {/* route parameter(part of the route is dynamic):  */}
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

/* 
- here App is the root component of the application(it seats at the top of the app it is the first component that renders to DOM)
- in react, components have the tree structure, meaning root component seats at the top of this tree.(this is the component that render in our html file)
- then if we want to add more components, we nest them inside the root component

*** The React Router ***
start the same way as the traditional way. we send the initial request to the server and server respond to that by sending back
a single html page(index.html) to the browser BUT it also send back  our compiled react js file which controls our react app
so from now on the react router can take the full control of the application
** therefore, the initial index.html that we get is virtually empty. and then react injects the content dynamically using components that we create
by clicking on a link to go to that page, the react router is gonna look in the new page request and inject the required content(components) to the screen.
(there is less request to the server so this is generally faster than before that we send each request to the server)

install the React Router package:
npm install react-router-dom@5 -> version 5
*/