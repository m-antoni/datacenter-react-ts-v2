import { useEffect, useState } from 'react';
import { getUserByLinkedInUrl, getUsers } from '../../redux/actions/users/user.actions';
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
    const [linkedInUrl, setLinkedInUrl] = useState<string>('');

    useEffect(() => {
        dispatch(getUsers())
    }, [])

    useEffect(() => {
        if(user != undefined){
            setUsers(user.data);
        }
    },[user])

    // handle change page row click
    const handleChangePage = (linkedin_url: string) => {
        navigate('/users/page', { state: linkedin_url });
    }

    // submit search url
    const submitSearchLinkedInUrl = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // console.log(linkedInUrl)
        handleChangePage(linkedInUrl);
    }

    // onchange handler search url
    const onChangeSearchLinkedInUrl = (e: React.FormEvent<HTMLInputElement>) => {
        // console.log(e.currentTarget.value)
        setLinkedInUrl(e.currentTarget.value);
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
                                        submitSearchLinkedInUrl={submitSearchLinkedInUrl}
                                        onChangeSearchLinkedInUrl={onChangeSearchLinkedInUrl}
                                        linkedInUrl={linkedInUrl}
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