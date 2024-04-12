import { useDispatch } from 'react-redux';
import { addUser } from './redux/userSlice.js';
import { useEffect } from 'react';
import { Datos } from './Components/Datos.jsx';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://api.github.com/users/carlosdiazgirol')
      .then((res) => res.json())
      .then((data) => dispatch(addUser(data)));
  }, []);


  return (
    <div className="App">
      <Datos />;
    </div>
  );
}

export default App;