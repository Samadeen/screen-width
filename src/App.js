import { useEffect, useState } from 'react';
import WindowTracker from './components/WindowTracker';
import './App.scss';
import ColorItem from './components/ColorItem';

const App = () => {
  const [show, setShow] = useState(false);

  const toggleHandler = () => {
    setShow((prevShow) => !prevShow);
  };

  const colors = [
    'pink',
    '#000000',
    'skyblue',
    '#f9ca24',
    '#6ab04c',
    '#30336b',
    'coral',
  ];

  useEffect(() => {
    const currentColor = localStorage.getItem('color');
    setTheme(currentColor);
  }, []);

  const setColor = (e) => {
    const currentColor = e.target.style.getPropertyValue('--bg-color');
    setTheme(currentColor);
    localStorage.setItem('color', currentColor);
  };

  const setTheme = (color) => {
    document.documentElement.style.setProperty('--bg-color', color);
  };

  return (
    <div className='App flex'>
      <main className='container flex'>
        <div className='row flex'>
          <h1>Hello There 😎</h1>

          <button className='btn' onClick={toggleHandler}>
            {show === false ? 'Show Width' : 'Hide Width'}
          </button>
        </div>
        {show === false ? '' : <WindowTracker />}
      </main>
      <footer className='color_switcher'>
        <div className='color_list flex'>
          {colors.map((color, index) => (
            <ColorItem key={index} color={color} setColor={setColor} />
          ))}
        </div>
      </footer>
    </div>
  );
};

export default App;
