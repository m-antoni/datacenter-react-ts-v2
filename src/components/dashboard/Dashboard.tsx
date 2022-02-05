import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSummary } from "../../redux/actions/users/user.actions";
import { RootStore } from "../../store";
import { capitalizeStr, numberFormat } from "../../utils/helpers";
import { Spinner } from "../_layouts/Spinner";


const Dashboard = () => {

    const dispatch = useDispatch();
    const summary = useSelector((state: RootStore) => state.user.summary)
    const loading = useSelector((state: RootStore) => state.common.loading)

    useEffect(() => {
        dispatch(getSummary())
    },[])
    

    return (
        <>
            <main id="main" className="main">
                <div className="pagetitle">
                    <h1>Dashboard</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item active">Dashboard</li>
                        </ol>
                    </nav>
                </div>
                <section className="section dashboard">
                    <div className="row">
                        {
                            loading ? <Spinner/> : 
                            <div className="col-lg-4 col-12">
                                <div className="card info-card sales-card">
                                    {/* <div className="filter">
                                        <a className="icon" href="#" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots"></i></a>
                                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                        <li className="dropdown-header text-start">
                                            <h6>Filter</h6>
                                        </li>

                                        <li><a className="dropdown-item" href="#">Today</a></li>
                                        <li><a className="dropdown-item" href="#">This Month</a></li>
                                        <li><a className="dropdown-item" href="#">This Year</a></li>
                                        </ul>
                                    </div> */}

                                    <div className="card-body">
                                        <h5 className="card-title">Users <span></span></h5>
                                            <div className="d-flex align-items-center">
                                            <div className="card-icon customer card-icon-c rounded-circle d-flex align-items-center justify-content-center">
                                                <i className="bi bi-people"></i>
                                            </div>
                                            {
                                                summary && summary.map((s: any, index: any) =>(
                                                    <div className="ps-3" key={index}>
                                                        <h6>{numberFormat(s.total, 0)}</h6>
                                                        <span className="text-danger small pt-1 fw-bold"></span>
                                                        <span className="text-muted small pt-2 ps-1">{capitalizeStr("v",s.location_country)}</span>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </section>
            </main>
        </>
    )
}


export default Dashboard;