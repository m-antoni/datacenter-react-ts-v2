import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authLogin } from "../../redux/actions/auth/auth.action";
import { RootStore } from "../../store";


interface LoginInputs {
    username: string;
    password: string;
}


const Login = () => {

    const dispatch = useDispatch();
    let navigate = useNavigate();
    const token = useSelector((state: RootStore) => state.auth.token);
    
    const [inputs, setInputs] = useState<LoginInputs>({ username: "", password: "" });

    useEffect(() => {
        if(token != null){
            navigate('/');
        }
    },[token])

    const onSubmit = (e: any): void => {
        e.preventDefault();
        dispatch(authLogin(inputs.username, inputs.password))
    }    


    const handleOnChange = (e: any) => {
        const { name, value } = e.target;
        setInputs({ ...inputs, [name]: value });
    }

    return (
        <main>
            <div className="container">
                <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center pb-4">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                                <div className="d-flex justify-content-center pb-4">
                                    <a href="index.html" className="logo d-flex align-items-center w-auto">
                                    <img src="assets/img/logo.png" alt=""/>
                                    <span className="d-lg-block">Data Center</span>
                                    </a>
                                </div>

                                <div className="card mb-3">
                                    <div className="card-body">
                                        <div className="pt-4 pb-2">
                                            <h5 className="card-title text-center pb-0 fs-4">Login</h5>
                                        </div>

                                        <form onSubmit={onSubmit} className="row g-3 needs-validation">

                                            <div className="col-12">
                                            <label className="form-label">Username</label>
                                            <div className="input-group has-validation">
                                                <input onChange={handleOnChange} type="text" name="username" className="form-control" id="yourUsername" required/>
                                            </div>
                                            </div>

                                            <div className="col-12">
                                            <label className="form-label">Password</label>
                                                <input onChange={handleOnChange} type="password" name="password" className="form-control" id="yourPassword" required/>
                                            </div>

                                            {/* <div className="col-12">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" name="remember" value="true" id="rememberMe">
                                                    <label className="form-check-label" for="rememberMe">Remember me</label>
                                                </div>
                                            </div> */}
                                            <div className="col-12">
                                                <button className="btn btn-primary w-100" type="submit">Login</button>
                                            </div>
                                            {/* <div className="col-12">
                                                <p className="small mb-0">Don't have account? <a href="pages-register.html">Create an account</a></p>
                                            </div> */}
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}


export default Login;