
// import Landing from "./sections/landing"
// import About from "./sections/About"
// import Skills from "./sections/Skills"
// import Portfolio from "./sections/portfolio"
// import Footer from "./sections/footer"
// import Form from "./sections/lab2"
// import Form2 from "./sections/lab22"
// import Dolist from "./sections/dolist"
import NavbarComponent from "./sections/navbar"
import Componet404 from "./componets2/404/component404"
import { BrowserRouter,  Route, Routes} from "react-router-dom"
// import Home from "./componets2/home/home"
// import ShowCard from "./componets2/showcard"
// import Signup from "./componets2/signup"
import 'bootstrap/dist/css/bootstrap.min.css';
// import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
//import mystore from './componets2/store/store';
import {store} from './componets2/fetchRedux/store/store';
// import FavouritePage from "./componets2/favouritepage"
// import { useEffect,useState } from "react"
// import { useSelector } from "react-redux"
// import { axiosInstance } from "./componets2/network/network"
import BookData from "./Data.json";
// import FetchRedux from "./componets2/fetchRedux/fetchRedux"
import Search from './componets2/search'
import CalenderSection from "./componets2/calender"


function App() {
  
  return (
   
      <Provider store={store}> 
      
        <div className="App bg-secondary">

          
          <BrowserRouter>
          <NavbarComponent   />
        
        <Routes>
          
          {/* <Route exact path={"/"} element={<Home/>}/> */}
          {/* <Route exact path={"/"} element={<FetchRedux/>}/> */}
          {/* <Route exact  path={`/Show/:genera/:id`} element={<ShowCard/>}/>
          <Route exact path={"/sign"} element={<Signup/>} />
          <Route exact path={"/MyFavourite"} element={<FavouritePage/>} /> */}
          <Route exact path={"*"} element={<Componet404/>}/>
          <Route exact path={'/search'} element={<Search placeholder="Enter a Book Name..." data={BookData}  />} />
          <Route exact path={"/calendar"} element={<CalenderSection/>}/>
          </Routes> 
          </BrowserRouter>
      
          
          
          
        </div>
      </Provider>
  
  );
}

export default App;
