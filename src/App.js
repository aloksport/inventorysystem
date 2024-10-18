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
	if(isLogin===1){
		return (
			<Login/>
		);
	} else{
  return (
    <div className="container-scroller">
		<Navbar/>
		<div className="container-fluid page-body-wrapper">
			<Leftsidebar/>
			<div className="main-panel">
				<div className="content-wrapper" id="main-content-wrapper">
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
