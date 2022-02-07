import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authLogin } from "../../redux/actions/auth/auth.action";
import { ToastDanger } from "../../redux/service/toast.service";
import { RootStore } from "../../store";
import { getToken } from "../../utils/helpers";
import { MiniSpinner } from "../_layouts/Spinner";
import { Animated } from "react-animated-css";
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";

interface LoginInputs {
    username: string;
    password: string;
}

const Login = () => {

    const dispatch = useDispatch();
    let navigate = useNavigate();
    const isToken = useSelector((state: RootStore) => state.auth.token)
    const loading = useSelector((state: RootStore) => state.common.loading);

    const [inputs, setInputs] = useState<LoginInputs>({ username: "", password: "" });

    useEffect(() => {
        const token = getToken()
        token != null && navigate("/")
        document.body.classList.add("bg-login")
    },[])

    useEffect(() => {
        const token = getToken()
        if(token){
            window.location.href = "/"
        }
    },[isToken])


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
                <section className="section register min-vh-100 d-flex flex-row align-items-center justify-content-center pb-4">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                                {/* <div className="d-flex justify-content-center pb-3">
                                    <Animated animationIn="zoomIn" animationOut="bounceOut" animationInDuration={2000} animationOutDuration={1000} isVisible={true}>
                                        <a href="/" className="logo d-flex align-items-center w-auto">
                                            <img src="assets/img/logo.png" alt=""/>
                                            <span className="d-lg-block">Data Center</span>
                                        </a>
                                    </Animated>
                                </div> */}

                                <div className="card mb-3 shadow-lg p-3 mb-5 bg-body rounded">
                                    <div className="card-body">
                                        {
                                            loading ? <div className="loginSpinner"><MiniSpinner/></div> :
                                            <>
                                                <div className="py-4">
                                                    {/* <h5 className="card-title text-center pb-0 fs-4">Login</h5> */}
                                                    <div className="d-flex justify-content-center pb-3">
                                                    <Animated animationIn="zoomIn" animationOut="bounceOut" animationInDuration={2000} animationOutDuration={1000} isVisible={true}>
                                                        <a href="/" className="logo d-flex align-items-center w-auto">
                                                            <img src="assets/img/logo.png" alt=""/>
                                                            <span className="d-lg-block">Data Center</span>
                                                        </a>
                                                    </Animated>
                                                    </div>
                                                </div>
                                                <form onSubmit={onSubmit} className="row g-4 pb-4 needs-validation">
                                                    <div className="col-12">
                                                    {/* <label className="form-label">Username:</label> */}
                                                    <div className="input-group">
                                                        <TextField fullWidth onChange={handleOnChange} type="text" name="username" label="Username" variant="outlined" required/>
                                                    </div>
                                                    </div>

                                                    <div className="col-12">
                                                        {/* <label className="form-label">Password:</label> */}
                                                        <TextField fullWidth onChange={handleOnChange} type="password" name="password" label="Password" variant="outlined" required/>
                                                    </div>

                                                    {/* <div className="col-12">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" name="remember" value="true" id="rememberMe">
                                                            <label className="form-check-label" for="rememberMe">Remember me</label>
                                                        </div>
                                                    </div> */}
                                                    <div className="col-12">
                                                        <Button type="submit" variant="contained" fullWidth size="large">Login</Button>
                                                        {/* <button className="btn btn-primary w-100" type="submit">Login</button> */}
                                                    </div>
                                                    {/* <div className="col-12">
                                                        <p className="small mb-0">Don't have account? <a href="pages-register.html">Create an account</a></p>
                                                    </div> */}
                                                </form>
                                            </>
                                        }
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