import { useEffect, useState } from 'react';
import { getUsers } from '../../redux/actions/users/user.actions';
import { RootStore } from '../../store';
import { useSelector, useDispatch } from 'react-redux';
import UserTableList from './UserTableList';
import { useNavigate } from 'react-router-dom';


const Users = () => {

    const user = useSelector((state: RootStore) => state.user.users)
    const loading = useSelector((state: RootStore) => state.common.loading);
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const [users, setUsers] = useState<any | null>(null);

    useEffect(() => {
        dispatch(getUsers())
    }, [])

    useEffect(() => {
        if(user != undefined){
            setUsers(user.data);
        }
    },[user])

    const handleChangePage = (linkedin_url: string) => {
        navigate('/users/page', { state: linkedin_url });
    }

    return (    
        <>
            <main id="main" className="main">
                <div className="pagetitle">
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/users">Users</a></li>
                            {/* <li className="breadcrumb-item active">Dashboard</li> */}
                        </ol>
                    </nav>
                </div>
                <section className="section dashboard">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body">
                                    <UserTableList 
                                        users={users} 
                                        dispatch={dispatch} 
                                        loading={loading}
                                        handleChangePage={handleChangePage}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )

}

export default Users;