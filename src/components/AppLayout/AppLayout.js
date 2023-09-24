import { useLocation } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

function AppLayout({ children, isErrorPage }) {
  const location = useLocation();

  return (
    <div className="wrapper">
      {location.pathname !== '/signin' &&
        location.pathname !== '/signup' &&
        !isErrorPage && <Header />}
      {children}
      {location.pathname !== '/profile' &&
        location.pathname !== '/signin' &&
        location.pathname !== '/signup' &&
        !isErrorPage && <Footer />}
    </div>
  );
}

export default AppLayout;
