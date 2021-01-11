import {Login, ERR404,Main,Register} from './component';
import {Route,Redirect,Switch} from 'react-router-dom';

function App() {
  return (
    <>
      <Switch>
        <PrivateRoute exact path="/"  check = {false} component = {Main}/>
        <Route exact path = "/login" component = {Login}/>
        <Route exact path = "/register" component = {Register}/>
        <Route component = {ERR404}/>
      </Switch>
    </>
  );
}

function PrivateRoute({component:Component, check, ...parentProps}){
  return(
  <Route {...parentProps} 
  render = {(props)=>
    check?
    <Component {...props}/>
    :
    <Redirect to = "/login"/>
    }
  />
)}

export default App;
