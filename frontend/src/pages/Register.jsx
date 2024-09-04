import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Register = () => {
    var defaultData= {
        username:"",email:"",password:"",cpassword:""
    }
    const [formData, setFormData] = useState(defaultData);
    const [showPass,setShowPass] = useState(false);
    const [showCPass,setCShowPass] = useState(false);
    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    let URL = "http://localhost:8001";

    const onInputHandler = (e) => {
        setFormData({...formData,[e.target.name] : e.target.value})
    }

    const formSubmit = async (e) => {
        e.preventDefault();
        try {
            // const data = await axios.post(`${process.env.SERVER_URL}/register`,formData);
            const data = await axios.post(`${URL}/register`,formData);
            console.log(data);
            
            if(data.data.status===true){
                navigate("/login");
            }
        } catch (error) {
            if (error.response && error.response.data.errors) {
                const apiErrors = error.response.data.errors.reduce((acc, err) => {
                    acc[err.path] = err.message;
                    return acc;
                }, {});
                setErrors(apiErrors); 
            }
        }
    }

    return (
        <>
            <section className="vh-100" style={{ backgroundColor: "#eee" }}>
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black" style={{ borderRadius: 25 + "px" }}>
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                                            <form className="mx-1 mx-md-4" onSubmit={formSubmit}>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                                                        <label className="form-label" for="form3Example1c">User Name</label>
                                                        <input type="text" name='username' id="form3Example1c" className="form-control" onChange={onInputHandler} value={formData.username}/>
                                                        {errors.username && <p style={{color:"red"}}>{errors.username}</p>}
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                                                        <label className="form-label" for="form3Example3c">Your Email</label>
                                                        <input type="email" name='email' id="form3Example3c" className="form-control" onChange={onInputHandler} value={formData.email}/>
                                                        {errors.email && <p style={{color:"red"}}>{errors.email}</p>}
                                                    </div>
                                                </div>

                                                <div data-mdb-input-init className="form-outline form-group mb-3">
                                                    <label className="form-label" for="password">Password</label>
                                                    <div className="input-group" >
                                                        <input type={showPass ? "text" : "password"} id="password" name='password' className="form-control form-control-lg" placeholder="Enter password" onChange={onInputHandler} />
                                                        <div className="input-group-addon" style={{ fontSize: 20 + "px", border: 1 + "px solid #ced4da", padding: 10 + "px" }}>
                                                            {showPass ? <a href="#" onClick={() => setShowPass(false)}><i className="fa fa-solid fa-eye" aria-hidden="true"></i></a>
                                                                :
                                                                <a href="#" onClick={() => setShowPass(true)}><i className="fa fa-eye-slash" aria-hidden="true"></i></a>}
                                                        </div>
                                                        {errors.password && <p style={{color:"red"}}>{errors.password}</p>}
                                                    </div>
                                                </div>

                                                <div data-mdb-input-init className="form-outline form-group mb-3">
                                                    <label className="form-label" for="cpassword">Confirm Password</label>
                                                    <div className="input-group" >
                                                        <input type={showCPass ? "text" : "password"} id="cpassword" name='cpassword' className="form-control form-control-lg" placeholder="Enter confirm password" onChange={onInputHandler} />
                                                        <div className="input-group-addon" style={{ fontSize: 20 + "px", border: 1 + "px solid #ced4da", padding: 10 + "px" }}>
                                                            {showCPass ? <a href="#" onClick={() => setCShowPass(false)}><i className="fa fa-solid fa-eye" aria-hidden="true"></i></a>
                                                                :
                                                                <a href="#" onClick={() => setCShowPass(true)}><i className="fa fa-eye-slash" aria-hidden="true"></i></a>}
                                                        </div>
                                                    </div>
                                                    {errors.cpassword && <p style={{color:"red"}}>{errors.cpassword}</p>}
                                                </div>

                                                <div className="form-check d-flex justify-content-center mb-5">
                                                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                                                    <label className="form-check-label" for="form2Example3">
                                                        I agree all statements in <a href="#!">Terms of service</a>
                                                    </label>
                                                </div>

                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-lg">Register</button>
                                                </div>

                                            </form>

                                        </div>
                                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                                className="img-fluid" alt="Sample image" />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Register