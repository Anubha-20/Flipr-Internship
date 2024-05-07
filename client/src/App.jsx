
//import Alogin from './pages/Admin/Alogin';
//import Dashboard4 from './pages/Dashboard/Sidebar.jsx'
//import './App.css'
//import Sidebar from './pages/Dashboard/Sidebar';
//import Landing1 from './pages/Landing/landing1';
//import Navbar from './components/commons/Navbar';
//import Product from './pages/Product/Product'
//import Cart from './pages/Cart/Cart';
//const App=()=> {
 

//   return (
//     <>
//     {/* <Alogin/> */}
//      {/* <Dashboard4/> */}
//     {/* <Navbar/> */}
//     {/* <Landing1/> */}
//     {/* <Sidebar/> */}
//     {/* <Product/> */}
//     {/* <Cart/> */}
//     </>
//   )
// }

//export default App;

import './App.css'
// import SignUp from './pages/Auth/SignUp'
// import ASignUp from './pages/Admin/ASignUp'
// import Alogin from './pages/Admin/Alognin';
// import CSignIn from './pages/Auth/SignIn'
// import Dashboard from './pages/Dashboard/dashboard'
import Navbar from './components/commons/Navbar';
import Landing1 from './pages/Landing/landing1';
import Alogin from './pages/Admin/Alogin';
import ASignUp from './pages/Admin/ASignUp';
import SignIn from './pages/Auth/SignIn';
import SignUp from './pages/Auth/SignUp';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Product from './pages/Product/Product';
import Cart from './pages/Cart/Cart';
import { Provider } from "react-redux";
import store from './redux/store';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <About /> */}
      {/* <SignUp /> */}
      {/* <ASignUp /> */}
      {/* <ASignIn /> */}
      {/* <Navbar /> */}
      {/* <Landing1/> */}
      
      <BrowserRouter>
       <Navbar />
       <Provider store={store}>
      <Routes>
        <Route path="/signin" element={<Alogin />} />
        <Route path="/signup" element={<ASignUp />} />
        <Route path="/csignup" element={<SignUp />} />
        <Route path="/csignin" element={<SignIn />} />
        <Route path="/" element={<Landing1/>} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}

      </Routes>
      </Provider>
      </BrowserRouter>
    </>
  )
}

export default App;
