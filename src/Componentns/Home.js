import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ProductServices from '../services/ProductServices';
import Header from './Header';
import bg from '../images/bg.webp'
const Home = () => {

    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [bid, setBid] = useState(false)
    const [bids, setBids] = useState({})
    const [user, setUser] = useState({})
    const [id,setId]=useState("")
    useEffect(() => {
        ProductServices.getAllProducts().then(res => (setData(res.data)))
    }, [])
    const handleClick = (_, key) => {
        if (key === "add") {
            navigate("/add-product")
        }
        else if (key === "view") {
            navigate("/product")
        }
    }
    const handleDelete = (_, id) => {
        ProductServices.deleteProduct(id).then(res => { alert("Product is deleted"); navigate("/") })
    }
    const openModal = (_, id) => {
        setId(id)
        setBid(true)
    }
    const handleBidsChange = (e) => {
        bids[e.target.name] = e.target.value;
        setBids(bids)
    }
    const handleUserChange=(e)=>{
        user[e.target.name]=e.target.value
        setUser(user)
    }
    const handlePlaceBids=(e,id)=>{
        bids["tweetMessageId"]=id
        bids["loginId"]=user.loginId;
        bids["userdetails"]=user;
        setBids(bids);
        console.log(bids)
        ProductServices.placeBids(bids,id).then(res=>{setBid(false);alert(res.data)})
    }
    return (
        <div>
            <Header />
            <div class="container-fluid">
                <h3 align="center">Welcome to E-Auction Application!</h3>
                <div style={{ align: "center" }}>
                    <button type="button" class="btn btn-secondary" onClick={e => handleClick(e, "add")}>Add Product</button>

                </div>
                <div className="modal" tabindex="-1" role="dialog" style={{ display: bid ? "flex" : "none" }}>
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Place Your Bid</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={e => setBid(false)}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form style={{ margin: '20px' }}>
                                    <div className="row g-6 align-items-center info">
                                        <div className="col-4">
                                            <label for="replyMessage" className="col-form-label">Bid Amount</label>
                                        </div>
                                        <div className="col-8">
                                            <input type="text" id="replyMessage" name="replyMessage" className="form-control" value={bids.replyMessage} onChange={e => handleBidsChange(e)} />
                                        </div>
                                    </div>
                                    <div className="row g-6 align-items-center info">
                                        <div className="col-4">
                                            <label for="firstName" className="col-form-label">First Name</label>
                                        </div>
                                        <div className="col-8">
                                            <input type="text" id="firstName" name="firstName" className="form-control" value={user.firstName} onChange={e => handleUserChange(e)} />
                                        </div>
                                    </div>
                                    <div className="row g-6 align-items-center info">
                                        <div className="col-4">
                                            <label for="lastName" className="col-form-label">Last Name</label>
                                        </div>
                                        <div className="col-8">
                                            <input type="text" id="lastName" name="lastName" className="form-control" value={user.lastName} onChange={e => handleUserChange(e)} />
                                        </div>
                                    </div>
                                    <div className="row g-6 align-items-center info">
                                        <div className="col-4">
                                            <label for="address" className="col-form-label">Address</label>
                                        </div>
                                        <div className="col-8">
                                            <input type="text" id="address" name="address" className="form-control" value={user.address} onChange={e => handleUserChange(e)} />
                                        </div>
                                    </div>
                                    <div className="row g-6 align-items-center info">
                                        <div className="col-4">
                                            <label for="city" className="col-form-label">Bid Amount</label>
                                        </div>
                                        <div className="col-8">
                                            <input type="text" id="city" name="city" className="form-control" value={user.city} onChange={e => handleUserChange(e)} />
                                        </div>
                                    </div>
                                    <div className="row g-6 align-items-center info">
                                        <div className="col-4">
                                            <label for="state" className="col-form-label">State</label>
                                        </div>
                                        <div className="col-8">
                                            <input type="text" id="state" name="state" className="form-control" value={user.state} onChange={e => handleUserChange(e)} />
                                        </div>
                                    </div>
                                    <div className="row g-6 align-items-center info">
                                        <div className="col-4">
                                            <label for="email" className="col-form-label">Email</label>
                                        </div>
                                        <div className="col-8">
                                            <input type="text" id="email" name="email" className="form-control" value={user.email} onChange={e => handleUserChange(e)} />
                                        </div>
                                    </div>
                                    <div className="row g-6 align-items-center info">
                                        <div className="col-4">
                                            <label for="loginId" className="col-form-label">User Name</label>
                                        </div>
                                        <div className="col-8">
                                            <input type="text" id="loginId" name="loginId" className="form-control" value={user.loginId} onChange={e => handleUserChange(e)} />
                                        </div>
                                    </div>
                                    <div className="row g-6 align-items-center info">
                                        <div className="col-4">
                                            <label for="phoneNumber" className="col-form-label">Contact Number</label>
                                        </div>
                                        <div className="col-8">
                                            <input type="text" id="phoneNumber" name="phoneNumber" className="form-control" value={user.phoneNumber} onChange={e => handleUserChange(e)} />
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-primary" onClick={e=>handlePlaceBids(e,id)}>Place Bid</button>
                                <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={e => setBid(false)}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Products....................... */}
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    {data && data.map(data => (

                        <div class="col">
                            <div class="card">
                                <img src={bg} class="card-img-top" alt="img" />
                                <div class="card-body">
                                    <h5 class="card-title">{data.productName}</h5>
                                    <p class="card-text">{data.shortDesc}</p>
                                    <p class="card-text">Starting Price: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${data.startingPrice}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <a href={`/#`} onClick={e=>openModal(e,data.id)} >Place Bid</a></p>
                                    <p class="card-text">Bid End Date: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{data.bidEndDate}</p>
                                    <a href={`/product/${data.id}`} >Check Details</a>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
                                    <a href={'/#'} onClick={e => handleDelete(e, data.id)}>Delete Product</a>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
            </div>

        </div>
    )
}

export default Home;