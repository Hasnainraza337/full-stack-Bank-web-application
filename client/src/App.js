import './App.scss';
import "bootstrap/dist/js/bootstrap.bundle";
import Routes from "./pages/Routes"
import { useAuthContext } from './contexts/AuthContext';

function App() {
  const { isLoading } = useAuthContext();

  if (isLoading) {
    return (
      <div className='d-flex justify-content-center align-items-center' style={{ height: "100vh", background: "#222" }}>
        <span span className="loader" ></span >
      </div >
    )
  }
  return (
    <>
      <Routes />
    </>
  );
}

export default App;
