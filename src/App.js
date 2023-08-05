import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import { AuthContextProvider } from "./context/AuthContext";
import Home  from "./pages/Home";
import  Login  from "./pages/Login";
import  Signup  from "./pages/Signup";
import  Account  from "./pages/Account";
import ProtectedRoute from "./Components/ProtectedRoute";

function App(){
  return (
    <>
    <AuthContextProvider> <Header />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/signup' element={<Signup />}/>
      <Route path='/account' element={<ProtectedRoute><Account /></ProtectedRoute>}/>
    </Routes></AuthContextProvider>
    </>
  );
}

export default App;
