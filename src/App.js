import { useEffect, useState } from 'react';
import WindowTracker from './components/WindowTracker';
import './App.scss';
import ColorItem from './components/ColorItem';

const App = () => {
  const colors = [
    'pink',
    '#000000',
    'skyblue',
    '#f9ca24',
    '#6ab04c',
    '#30336b',
    'coral',
  ];

  const [show, setShow] = useState(false);

  useEffect(() => {
    const currentColor = localStorage.getItem('color');
    setTheme(currentColor);
  }, []);

  const toggleHandler = () => {
    setShow((prevShow) => !prevShow);
  };

  const setTheme = (color) => {
    document.documentElement.style.setProperty('--bg-color', color);
  };

  const setColor = (e) => {
    const currentColor = e.target.style.getPropertyValue('--bg-color');
    setTheme(currentColor);
    localStorage.setItem('color', currentColor);
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
