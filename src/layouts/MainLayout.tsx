import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
// import Navbar from './Navbar';

export default function MainLayout() {
  return (
    <div>
      <Navbar />
      <div className="pt-16 pb-20 min-h-[calc(100vh-70px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
