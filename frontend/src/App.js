import logo from './logo.svg';
import './App.css';

import { Route } from 'react-router-dom'
import Home from './Pages/Home';
import Chat from './Pages/Chat';

function App() {
  return (
    <>
      <h1>zend</h1>
      <Route path="/" component={Home} exact/>
      <Route path="/chats" component={Chat} />
    </>
  );
}

export default App;
