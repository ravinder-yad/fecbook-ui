import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import StudyGroup from '../pages/StudyGroup';
import Friends from '../pages/Friends';
import Marketplace from '../pages/Marketplace';
import Watch from '../pages/Watch';
import Memories from '../pages/Memories';
import Saved from '../pages/Saved';
import Events from '../pages/Events';
import Menu from '../pages/Menu';
import Messenger from '../pages/Messenger';
import Notifications from '../pages/Notifications';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/friends" element={<Friends />} />
            <Route path="/groups" element={<StudyGroup />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/watch" element={<Watch />} />
            <Route path="/memories" element={<Memories />} />
            <Route path="/saved" element={<Saved />} />
            <Route path="/events" element={<Events />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/messenger" element={<Messenger />} />
            <Route path="/notifications" element={<Notifications />} />
        </Routes>
    );
}
