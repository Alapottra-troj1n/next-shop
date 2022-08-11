import { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.css'
import { useRouter } from 'next/router';
function MyApp({ Component, pageProps }) {


  const [cart, setCart] = useState({})
  const [subTotal, setSubTotal] = useState(0);
  

  const [user, setUser] = useState({value: null});
  const [key, setKey] = useState(0)

  const router = useRouter();

  useEffect(() => {
    try {


      if(localStorage.getItem('cart')){

        setCart(JSON.parse(localStorage.getItem('cart')));

        saveCart(JSON.parse(localStorage.getItem('cart')));
        
        
  
      }

      const token = localStorage.getItem('token');

      if(token){
    
        setUser({value: token});
        setKey(Math.random())
    
      }

      
    }catch (error) {
      console.error(error);
      localStorage.clear()
    }
  
   
  }, [router.query])


  const logout = () => {
    localStorage.removeItem('token');
    setUser({value: null})
    setKey(Math.random());


  }
  

 


  const saveCart = (myCart) => {
    localStorage.setItem('cart', JSON.stringify(myCart));

    let subT = 0;
    let keys = Object.keys(myCart);

    for(let i = 0; i < keys.length ; i++){
      subT += myCart[keys[i]].price * myCart[keys[i]].qty;

    }
    setSubTotal(subT)


  }


  const addToCart = (itemCode, qty, price, name, size, variant) => {

    let newCart = cart;

    if(itemCode in cart){

      newCart[itemCode].qty = cart[itemCode].qty + qty;


    }else{
      newCart[itemCode]= {qty: qty, price,name,size,variant}
    };

    setCart(newCart);
    saveCart(newCart);



  };


  const clearCart = () => {

    setCart({});
    saveCart({})
  }

  const removeFromCart = (itemCode, qty, price, name,size,variant) => {


    let newCart = cart;

    if(itemCode in cart){

      newCart[itemCode].qty = cart[itemCode].qty - qty;


    }
    if(newCart[itemCode].qty <= 0){
      delete newCart[itemCode]
    }

    setCart(newCart);
    saveCart(newCart);

  }








  return <>
  <Navbar logout={logout} user={user} setKey={setKey} key={key} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} />
  <Component setKey={setKey}   cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} {...pageProps} />
  <Footer/>
  </>
  
  
}

export default MyApp
