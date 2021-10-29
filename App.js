import logo from './logo.svg';
import signup from './signup';
import Login from './login';
import {NavLink,BrowserRouter,Switch,Route,exact, Redirect} from "react-router-dom";
function App() {
  return (
    <div className="App">
    



<BrowserRouter>

<switch>
  <Route path="/login" component={Login}></Route>
  <Route path="/signup" component={signup}></Route>


  <Route exact path="/"><Redirect to="/signup"></Redirect> </Route>
</switch>
</BrowserRouter>







    </div>
  );
}

export default App;
