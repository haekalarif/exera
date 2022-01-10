import React,{useEffect, useState}from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import $ from 'jquery';
import { useMediaQuery } from 'react-responsive'
import { useHistory, useRouteMatch} from 'react-router-dom';
import IncidentDataDrafts from './IncidentDataDrafts';
import AddNewDraft from './AddNewDraft';
import ChangePassword from './ChangePassword';
import exeraLogo from '../images/exera-logo.png';
import "../../node_modules/antd/dist/antd.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "../App.css";
export default function MainDashboard(){

  let [collapsed, setCollapsed]=useState();
  let history = useHistory();
  const {url, path} = useRouteMatch();
  console.log(useRouteMatch());
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 991px)' })
  const laptopOrDesktop = useMediaQuery({ query: '(min-width: 992px)' })
  
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
   
  }, [])

    return (
      <div className="dashboard">
        <BrowserRouter>
        <div id="wrapper">
          {laptopOrDesktop && 
          <>
            <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor : "#c20000" , height:58}}>
              <div className="container mx-5">
                <div className='d-flex align-items-center'>
                  { collapsed && //when true false (artinya tidak false)
                    <div className='d-inline-block' style={{ marginRight:60}}>
                      <i className="bi bi-list text-white" style={{ fontSize: 32}}  onClick={toggle}></i>
                    </div>
                  }
                    <div className='d-inline-block'>
                      <img src={exeraLogo} alt="exera" className='img-fluid ml-5' style={{ width:80 , height:35 }}/>
                    </div>
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
                            <li><Link className="dropdown-item" to="/Index/ChangePassword">Change Password</Link></li>
                          </ul>
                        </div>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            </>
            }
            {isTabletOrMobile &&
            <>
            <nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor : "#c20000" , height:58}}>
              <div class="container">
                  <div className='d-flex align-items-center'>
                    {/* { collapsed && //when true false (artinya tidak false) */}
                      <div className='d-inline-block' style={{ marginRight:40}}>
                        <i className="bi bi-list text-white" style={{ fontSize: 32}}  onClick={toggle}></i>
                      </div>
                    {/* } */}
                      <div className='d-inline-block'>
                        <img src={exeraLogo} alt="exera" className='img-fluid' style={{ width:80 , height:35 }}/>
                      </div>
                  </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup" style={{backgroundColor : "#c20000"}}>
                  <div class="btn-group nav-link">
                    <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <i className="bi bi-person-circle"></i> Profile
                    </button>
                    <ul class="dropdown-menu">
                        <li><Link className="dropdown-item" to="/Login" onClick={logout} >Logout</Link></li>
                        <li><Link className="dropdown-item" to="Index/ChangePassword" >Change Password</Link></li>
                    </ul>
                  </div>
                  {/* <div class="navbar-nav">
                      <div className="dropdown nav-link">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="bi bi-person-circle"></i> Profile
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                          <li><Link className="dropdown-item" to="/Login" onClick={logout} >Logout</Link></li>
                          <li><a className="dropdown-item" href="#">Change Password</a></li>
                        </ul>
                      </div>
                  </div> */}
                </div>
              </div>
            </nav>
            </>
          }
            {/* <!-- Sidebar --> */}
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
                        <Link to={`${url}/IncidentDataDrafts`} >Incident Data Drafts <span className='text-dark rounded' style={{ padding:2, backgroundColor:"#fcd703", fontSize:12 }}><strong>7</strong></span></Link>
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
            {/* end sidebar */}
            {/* <!-- /#sidebar-wrapper --> */}

            {/* <!-- Page Content --> */}
            <div id="page-content-wrapper">
                <div className="container-fluid">
                  {/* $url = Index */}
                  <Switch>
                    <Route path={`${url}/IncidentDataDrafts`} component={IncidentDataDrafts} />
                    <Route path={`${url}/AddNewDraft`} component={AddNewDraft} />
                    <Route path={`${url}/ChangePassword`} component={ChangePassword} />
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