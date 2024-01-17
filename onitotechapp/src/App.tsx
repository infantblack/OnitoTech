import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import WelcomePage from './component/welcome';
import ProfileComponent from './component/profileCom';

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage/>} />
          <Route path="/profile" element={<ProfileComponent/>} />
        </Routes>
      </BrowserRouter></>
  );
}
export default App;
