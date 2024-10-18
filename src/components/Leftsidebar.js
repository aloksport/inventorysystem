import ReactDOM from 'react-dom/client';
import { useState, useEffect, useRef } from "react";
import Requestitemform from './Requestitemform';
import Welcome from "./Welcome";
import Widget from "./Widget";
import RequestItem from "./RequestItem";
import AssignedItem from "./AssignedItem";
function Leftsidebar() {
  const [inputValue, setInputValue] = useState("");
  if(inputValue=='dashboard'){
    const divRoot = ReactDOM.createRoot(document.getElementById('main-content-wrapper'));
    divRoot.render(
      <>
        <Welcome/>
        <Widget/>
        <RequestItem/>
        <AssignedItem/>
      </>
    
  );
  }
  if(inputValue=='item_request'){
    const divRoot = ReactDOM.createRoot(document.getElementById('main-content-wrapper'));
    divRoot.render(<Requestitemform/>);
  }
  return (     
	 <nav class="sidebar sidebar-offcanvas" id="sidebar">
        <ul class="nav">
          <li class="nav-item">
            <a class="nav-link" href="javascript:void(0);" onClick={(e) => setInputValue('dashboard')}>
              <i class="icon-grid menu-icon"></i>
              <span class="menu-title">Dashboard</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
              <i class="icon-layout menu-icon"></i>
              <span class="menu-title">User Request</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="ui-basic">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item"> <a class="nav-link" href="javascript:void(0);" onClick={(e) => setInputValue('item_request')}>Raise Item request</a></li>
              </ul>
            </div>
          </li>
          </ul>
      </nav>
  );
}
export default Leftsidebar;