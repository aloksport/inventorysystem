import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Leftsidebar from "./components/Leftsidebar";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";
import Widget from "./components/Widget";
import RequestItem from "./components/RequestItem";
import AssignedItem from "./components/AssignedItem";
import Login from "./components/Login";
function App() {
	const isLogin=1;
	if(isLogin==0){
		return (
			<Login/>
		);
	} else{
  return (
    <div class="container-scroller">
		<Navbar/>
		<div class="container-fluid page-body-wrapper">
			<Leftsidebar/>
			<div class="main-panel">
				<div class="content-wrapper" id="main-content-wrapper">
					<Welcome/>
					<Widget/>
					<RequestItem/>
					<AssignedItem/>
				</div>
				<Footer/>
			</div>
		</div>
    </div>
  );
}
}
export default App;
