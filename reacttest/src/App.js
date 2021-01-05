

function App() {
  return (
    <>
        <Menu/>
        <Route exact path = "/" component = {Main}/>
        <Route exact path = "/login" component = {Login} />
        <Route exact path = "/manage" component = {Manage}/>
        <Route exact path = "/signup" component = {Signup}/>
    </>
  );
}

export default App;
