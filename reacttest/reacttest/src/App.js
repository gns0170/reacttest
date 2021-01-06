import Main from './Main.js';
import {Route} from 'react-router-dom';

function App() {
  return (
    <>
        <Route exact path = "/" component = {Main}/>

    </>
  );
}

export default App;
