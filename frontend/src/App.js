import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.scss';
import Routes from './routing/Routes';
import * as actions from './redux/actions'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actions.checkAuthentication())
  }, [])
  
  return (
      <Routes/>
  );
}

export default App;
