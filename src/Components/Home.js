import React, { Component } from 'react'
import axios from 'axios';
import {NavLink,Link, BrowserRouter as Router, Route,withRouter } from 'react-router-dom';
import Sidebar from 'react-sidebar';
import { ToastContainer } from "react-toastr";
import Modal from 'react-modal';
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
export default class Home extends Component {
   sidebarContent = <b>Sidebar content</b>;
  
  constructor(){
    super();
    this.state={
      members:[],
      modalIsOpen: false,
      sidebarOpen: false
      
      
    }
    
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  
  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }
  
  closeModal() {
    this.setState({modalIsOpen: false});
  }
  componentWillMount(){
    axios.get('http://dev.snapgroup.co.il/api/members/getallmembers').then((res)=>{
    console.log(res.data.success);
    this.setState({members:res.data.success});
    }).catch((err)=>{

    });
  }
  render() {
    this.state.members.map((item,i)=>{
      console.log(item);
    })
    return (
      
      <div className="container" >
      <div className="row">
     <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
          <button onClick={this.closeModal}>close</button>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal>
       
      {this.state.members.map((item,i)=>{
        return (
          <div key={i} className="card col-5" style={{margin:20,width: "100%",height: "100%"}}>
          <div className="card-body">
            <h4 className="card-title" style={{textAlign:"center"}}>{item.profile.first_name}</h4>
            <h6 className="card-subtitle mb-2 text-muted" style={{textAlign:"center"}}>{item.email}</h6>
            <div className="profile" style={{flexDirection:"column",textAlign:"center"}}>
            <img onClick={this.openModal}src="http://enadcity.org/enadcity/wp-content/uploads/2017/02/profile-pictures.png" alt="..." class="img-thumbnail" style={{width:200,height:200}}/>
            <div>
             <Link  to={'/haha'} className="card-link">Profile</Link>
             <Link  to={'/haha'} className="card-link">About</Link>
             </div>
            </div>
          </div>
        </div>
        );
      })}
      </div>
      </div>
    )
  }
}
