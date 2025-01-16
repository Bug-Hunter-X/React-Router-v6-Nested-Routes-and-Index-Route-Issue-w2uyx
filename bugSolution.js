```javascript
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} >
          <Route path="about" element={<About />} />
        </Route>
        {/* ...other routes */}
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  let location = useLocation();
  console.log(location.pathname);
  return (
    <div>
      <h1>Home</h1>
      {location.pathname === '/' && <p>Welcome to the homepage!</p>}
      <Outlet/>
    </div>
  );
}

function About() {
  return <div>About</div>;
}

export default App;
```