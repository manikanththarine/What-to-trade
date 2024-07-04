import './App.css';
import Marketing from './components/markating/Marketing';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Onclick from './components/markating/Onclick';
import Contact from './components/contact/contact'
import Signin from './components/Signin/Signin';
import 'react-toastify/dist/ReactToastify.css';
import AdminPage from './components/Admin/AdminPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Marketing />} />
          <Route path='/Onclick/:id' element={<Onclick />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/AdminPage" element={<AdminPage />} />

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
