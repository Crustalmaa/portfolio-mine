import React from 'react'
import './style.css'
import {RiCloseLine} from 'react-icons/ri'
const Modal = (props)=>{
    const {item} = props;
    return(
        <div className={`myModal ${props.show==true?"modal_open":"modal_close"}`}>
            <div className={`myModal_container ${props.show==true?"myModal_open":"myModal_close"}`}>
                <p className="titlep">Projects</p>
                <div className="closeBtn" onClick={props.onClose}>

                    <RiCloseLine/>
                </div>
                {item!=='' &&
                <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">

                    <div className="carousel-item active" data-interval="10000">
                      <img src={require(`./assets/${item.images[0]}`)} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item" data-interval="2000">
                      <img src={require(`./assets/${item.images[1]}`)} className="d-block w-100" alt="..."/>
                    </div>
                  </div>
                  <a className="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>}
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{item==''?'':item.title}</h5>
                    <p className="card-text">{item==''?'':item.description}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>

            </div>
        </div>
    )
}
export default Modal;