import React,{useEffect, useState}from 'react';
import { Layout, Menu, Dropdown, Button } from 'antd';
import "../../node_modules/antd/dist/antd.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "../App.css";
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import $ from 'jquery';
import { useHistory } from 'react-router-dom';
import IncidentDataDrafts from './IncidentDataDrafts';
import AddNewDraft from './AddNewDraft';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default function MainDashboard(){

  let [collapsed, setCollapsed]=useState();
  let history = useHistory();

  let toggle = (e) => { //sidebar collaps
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");

    if(collapsed){
      setCollapsed(false);
    }else{
      setCollapsed(true);
    }
  };

  function logout(){
    history.push('/');
  }

  useEffect(() => {
    setCollapsed(true);
  }, [])

    return (
    <div className="dashboard">
        <BrowserRouter>
          
          <div id="wrapper">
            {/* <!-- Sidebar --> */}
            <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor : "#c20000" , height:58}}>
              <div className="container mx-5">
                <div className='d-flex align-items-center'>
                  { !collapsed && //when true false (artinya tidak false)
                    <i className="bi bi-list text-white" style={{ fontSize: 32}}  onClick={toggle}></i>
                  }
                  {/* <a className="navbar-brand text-white" href="#">Navbar</a> */}
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                        <div className="dropdown">
                          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                          <i className="bi bi-person-circle"></i> Profile
                          </button>
                          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><Link className="dropdown-item" to="/Login" onClick={logout} >Logout</Link></li>
                            <li><a className="dropdown-item" href="#">Change Password</a></li>
                          </ul>
                        </div>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          {/* end sidebar */}
            <div id="sidebar-wrapper">
                <ul className="sidebar-nav mt-2">
                    <li className="sidebar-brand">
                        <div className="text-start">
                          <i className="bi bi-list text-white" style={{ fontSize: 32}}  onClick={toggle}></i>
                        </div>
                    </li>
                    <li>
                      <p style={{ fontSize:20 }} className='text-white'>Page Navigation</p>
                    </li>
                    <li>
                        <Link to='/IncidentDataDrafts' >Incident Data Drafts</Link>
                    </li>
                    <li>
                      <Link to='#' >Official Incident Data</Link>
                    </li>
                    <li>
                      <Link to='#' >Master Data</Link>
                    </li>
                    <li>
                      <Link to='#' >Customer Data</Link>
                    </li>
                    <li>
                      <Link to='#' >Master Data</Link>
                    </li>
                </ul>
            </div>
            {/* <!-- /#sidebar-wrapper --> */}

            {/* <!-- Page Content --> */}
            <div id="page-content-wrapper">
                <div className="container-fluid">
                  <Switch>
                    <Route exact path='/IncidentDataDrafts' component={IncidentDataDrafts} />
                    <Route exact path='/AddNewDraft' component={AddNewDraft} />
                  </Switch>
                </div>
            </div>
            {/* <!-- /#page-content-wrapper --> */}

          </div>
          {/* <!-- /#wrapper --> */}

        </BrowserRouter>
      </div>
    );
}