import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Cart from './components/Cart';
import Home from './components/Home';
import NavbarT from './components/NavbarT';
import Register from './components/Register';
import Login from './components/Login';

// import OrderForm from './components/OrderForm';
import Protected from './ProtectedRoutes/Protected';
import HomeBanner from './components/HomeBanner';
import Footer from './components/Footer';
import CategoryData from './components/CategoryData';

// import HomeBa from './components/HomeBa';
// import Footer from './components/Footer';


function App() {

  return (
    <>
    <BrowserRouter>
      <NavbarT />
      <Routes>
        <Route path='/' element ={<Home />}/>
        <Route path='/homebanner' element ={<HomeBanner />}/>
        <Route path='/category' element ={<CategoryData />}/>
        {/* <Route path='/homebanner' element ={<HomeBa />}/> */}
        {/* <Route path='/' element ={<Protected Component = {Home} />}/> */}
        {/* <Route path='/cart' element ={<Cart />}/> */}
        {/* <Route path='/cart' element ={<Protected Component = {Cart} />}/> */}
        <Route path='/cart' element ={<Protected><Cart/></Protected>}/>
       
        {/* <Route path='/order' element ={<OrderForm />}/> */}
        <Route path='/register' element ={<Register />}/>
        <Route path='/login' element ={<Login />}/>
      </Routes>
      {/* <Routes element={<Protected />}>
          <Route path='/cart' element ={<Cart />}/>
        </Routes> */}
        {/* <Footer /> */}
        
        <Footer />
    </BrowserRouter>
    </>
  )
}

export default App;
