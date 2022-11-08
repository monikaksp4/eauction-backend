import React,{useState} from 'react';
import ProductServices from '../services/ProductServices';
import Header from './Header';
import {useNavigate} from 'react-router-dom';
import './index.css';


const AddProduct = () => {
    const navigate=useNavigate();
    const [data, setData] = useState({})
    const [user, setUser] = useState({})
    const handleOnChange = (e) => {
        data[e.target.name]=e.target.value;
        setData(data)
    }
    const handleUser = (e) => {
        user[e.target.name]=e.target.value;
        setUser(user)
    }
    const handleSubmit=(e)=>
    {e.preventDefault();
        data.user=user;
        setData(data)
        
        ProductServices.addProduct(data).then(res=>{navigate('/');alert(res.data)});
    }
    
    return (<>
        <Header />
        <div className='container-fluid'>

            <form style={{ margin: '20px' }}>
                <div className="row g-6 align-items-center info">
                    <div className="col-3">
                        <label for="productName" className="col-form-label">Product Name</label>
                    </div>
                    <div className="col-6">
                        <input type="text" id="productName" name="productName" className="form-control" value={data.productName} onChange={e => handleOnChange(e)} />
                    </div>
                </div>
                <div className="row g-6 align-items-center info">
                    <div className="col-3">
                        <label for="shortDesc" className="col-form-label">Short Description</label>
                    </div>
                    <div className="col-6">
                        <input type="text" name="shortDesc" className="form-control" value={data.shortDesc} onChange={e => handleOnChange(e)} />
                    </div>
                </div>
                <div className="row g-6 align-items-center info">
                    <div className="col-3">
                        <label for="detailedDesc" className="col-form-label">Detailed Description</label>
                    </div>
                    <div className="col-6">
                        <input type="text" name="detailedDesc" className="form-control" value={data.detailedDesc} onChange={e => handleOnChange(e)} />
                    </div>
                </div>
                <div className="row g-6 align-items-center info">
                    <div className="col-3">
                        <label for="category" className="col-form-label">Category</label>
                    </div>
                    <div className="col-6">
                        <input type="text" name="category" className="form-control" value={data.category} onChange={e => handleOnChange(e)} />
                    </div>
                </div>
                <div className="row g-6 align-items-center info">
                    <div className="col-3">
                        <label for="startingPrice" className="col-form-label">Starting Price</label>
                    </div>
                    <div className="col-6">
                        <input type="text" name="startingPrice" className="form-control" value={data.startingPrice} onChange={e => handleOnChange(e)} />
                    </div>
                </div>
                <div className="row g-6 align-items-center item info">
                    <div className="col-3">
                        <label for="bidEndDate" className="col-form-label">Biding End Date</label>
                    </div>
                    <div className="col-6">
                        <input type="text" name="bidEndDate" className="form-control" value={data.bidEndDate} onChange={e => handleOnChange(e)} />
                    </div>
                </div>
                {/* user details */}
                <h5>------------------------------------------------User Details-----------------------------------------------------------</h5>
                
                <div className="row g-6 align-items-center info">
                <div className="col-3">
                    <label for="firstName" className="col-form-label">First Name</label>
                </div>
                <div className="col-6">
                    <input type="text" name="firstName" className="form-control" value={user["firstName"]} onChange={e => handleUser(e)} />
                </div>
            </div>
            <div className="row g-6 align-items-center info">
                <div className="col-3">
                    <label for="lastName" className="col-form-label">Last Name</label>
                </div>
                <div className="col-6">
                    <input type="text" name="lastName" className="form-control" value={user["lastName"]} onChange={e => handleUser(e)} />
                </div>
            </div>
            <div className="row g-6 align-items-center info">
                <div className="col-3">
                    <label for="address" className="col-form-label">Address</label>
                </div>
                <div className="col-6">
                    <input type="text" name="address" className="form-control" value={user.address} onChange={e => handleUser(e)} />
                </div>
            </div>
            <div className="row g-6 align-items-center info">
                <div className="col-3">
                    <label for="city" className="col-form-label">City</label>
                </div>
                <div className="col-6">
                    <input type="text" name="city" className="form-control" value={user.city} onChange={e => handleUser(e)} />
                </div>
            </div>
            <div className="row g-6 align-items-center info">
                <div className="col-3">
                    <label for="state" className="col-form-label">State</label>
                </div>
                <div className="col-6">
                    <input type="text" name="state" className="form-control" value={user.state} onChange={e => handleUser(e)} />
                </div>
            </div>
            <div className="row g-6 align-items-center info">
                <div className="col-3">
                    <label for="phoneNumber" className="col-form-label">Phone Number</label>
                </div>
                <div className="col-6">
                    <input type="text" name="phoneNumber" className="form-control" value={user.phoneNumber} onChange={e => handleUser(e)} />
                </div>
            </div>
            <div className="row g-6 align-items-center info">
                <div className="col-3">
                    <label for="_id" className="col-form-label">User Name</label>
                </div>
                <div className="col-6">
                    <input type="text" name="_id" className="form-control" value={user._id} onChange={e => handleUser(e)} />
                </div>
            </div>
                
                <button type="submit" className="btn btn-primary" onClick={e=>handleSubmit(e)}>Submit</button>
            </form>
        </div></>
    )
}

export default AddProduct;