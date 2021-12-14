import React from "react";
import "./App.css";
import {
	BrowserRouter,
	Routes,
	Route,
} from "react-router-dom";

import Login from "./components/login";
import Workout from "./components/workout";


class App extends React.Component {

  render() {
    return (
			<React.Fragment>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<Login/>} />
						<Route path='/workout' element={<Workout/>} />
					</Routes>
				</BrowserRouter>
			</React.Fragment>
    );
  }
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

export default App;

