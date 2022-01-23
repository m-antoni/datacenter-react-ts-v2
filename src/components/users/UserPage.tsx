import { useEffect, useState } from 'react';
import { RootStore } from '../../store';
import { useSelector, useDispatch } from 'react-redux';


const UserPage = () => {

    const user = useSelector((state: RootStore) => state.user.users)
    const loading = useSelector((state: RootStore) => state.common.loading);
    const dispatch = useDispatch()

    useEffect(() => {
        // dispatch(getUsers())
    }, [])

    useEffect(() => {
        if(user != undefined){
            // setUsers(user.data);
        }
    },[user])

    return (    
        <>
            <main id="main" className="main">
                <div className="pagetitle">
                    <h1>Users</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Users</a></li>
                            <li className="breadcrumb-item active">User Page</li>
                        </ol>
                    </nav>
                </div>
                <section className="section dashboard">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body">

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )

}

export default UserPage;