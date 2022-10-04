import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route,Link, Navigate} from 'react-router-dom';
import TaskPage from './pagesSession16-17-18/taskPage';
import LoginPage from './pagesSession16-17-18/loginPage';
import RegisterPage from './pagesSession16-17-18/registerPage';
import NotFoundPage from './pagesSession16-17-18/NotFoundPage';

function AppRoutes() {
  let loggedIn = true;
  return (
    <Router>
      <div>
        <Link to='/login'>||Login|</Link>
        <Link to='/signIn'>|Sign In||</Link>
      </div>
      <Routes>
        {/* Sign in route */}
        <Route path='/signIn' element={<RegisterPage></RegisterPage>}></Route>
        {/* Login route */}
        <Route path='/login' element={<LoginPage></LoginPage>}></Route>
        {/* Tasks route */}
        <Route path='/tasks' element={loggedIn ? <TaskPage></TaskPage> : <Navigate to='/login' replace></Navigate>}></Route>
        {/* 404 Route */}
        <Route path='*' element={<NotFoundPage></NotFoundPage>}></Route>
      </Routes>
    </Router>
  );
}

export default AppRoutes;
