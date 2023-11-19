import {
  BrowserRouter as Router, Routes, Route, Outlet,
} from 'react-router-dom';
import './App.css';
import RocketsScreen from './components/RocketsScreen';
import MissionsList from './components/MissionsList';
import MyPage from './components/MyPage';
import Header from './components/Header';

function Layout() {
  return <Outlet />;
}

function App() {
  return (
    <Router>
      <div id="wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="missions" element={<MissionsList />} />
            <Route index element={<RocketsScreen />} />
            <Route path="profile" element={<MyPage />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
