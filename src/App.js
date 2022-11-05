
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Registration from './Component/Registration';
import LoginComponent from './Component/LoginComponent';
import HomeComponent from './Component/HomeComponent';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import ViewTweetComponent from './TweetComponent/ViewTweetComponent';
import ForgetPasswordComponent from './ChangePasswordComponent/ForgetPasswordComponent';
import ForgetPasswordSuccessComponent from './ChangePasswordComponent/ForgetPasswordSuccessComponent';
import ProductInformation from './Component/ProductInformation';



function App() {
  return (
    <BrowserRouter>
    <div className="Container">
      <Routes> 
      <Route path = "/registration" exact element = {<Registration/>}></Route>
      <Route path = "/" exact element = {<LoginComponent/>}></Route>
      <Route path = "/home" exact element = {<HomeComponent/>}></Route>
      <Route path = "/product/:id" exact element = {<ProductInformation/>}></Route>
      <Route path = "/view" exact element = {<ViewTweetComponent/>}></Route>
      <Route path = "/forgetPassword" exact element = {<ForgetPasswordComponent/>}></Route>
      <Route path = "/forgetPasswordSuccess" exact element = {<ForgetPasswordSuccessComponent/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
