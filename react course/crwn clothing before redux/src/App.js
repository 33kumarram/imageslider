import './App.css';
import React from 'react';
import {BrowserRouter,Routes , Route} from 'react-router-dom';
import HomePage from './homepage';
import ShopPage from './shop/shop.component';
import Header from './components/header/headercomponent';
import SignInAndSignUpPage from './components/signin and signup/signin and signup';
import { auth, createUserProfileDocument } from  './firebase/firebase.utils'
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      currentUser:null,
      unsubsubscribeFromAuth: null 
    }
   
  }
  componentDidMount(){
    this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth =>{
      if (userAuth){
        const userRef= await createUserProfileDocument(userAuth);
        userRef.onSnapshot( snapShot=>{
         this.setState({
           currentUser:{
             id:snapShot.id,
             ...snapShot.data()
           }
         },()=>{
         console.log(this.state);}
         )
        });
      }
      this.setState({currentUser:userAuth});
    });
    // this.unsubscribeFromAuth=auth.onAuthStateChanged(async user =>{
    //   createUserProfileDocument(user);
    // });
    // this.unsubscribeFromAuth=auth.onAuthStateChanged(user =>{
    //   this.setState({currentUser: user});
    //   console.log(user);
    // })
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
  return (
    <BrowserRouter>
    <Header currentUser={this.state.currentUser}/>
      <Routes>
      <Route path='/crwn-clothing' element={<HomePage/>}/>
      <Route path='/shop' element={<ShopPage/>}/>
      <Route path='/signin' element={<SignInAndSignUpPage/>}/>

      </Routes>
      </BrowserRouter>

  );
  }
}

export default App;
