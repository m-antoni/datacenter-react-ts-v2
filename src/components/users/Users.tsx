import { useEffect, useState } from 'react';
import { getUserByLinkedInUrl, getUsers } from '../../redux/actions/users/user.actions';
import { RootStore } from '../../store';
import { useSelector, useDispatch } from 'react-redux';
import UserTableList from './UserTableList';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const Users = () => {

    const user = useSelector((state: RootStore) => state.user.users)
    const linkedin_user = useSelector((state: RootStore) => state.user.linkedin_url)
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

    useEffect(() => {
        // if user data get success
        linkedin_user != undefined && navigate('/users/page', { state: linkedin_user });
    },[linkedin_user])

    // handle change page row click
    const handleChangePage = (linkedin_url: string ) => {
        dispatch(getUserByLinkedInUrl(linkedin_url))
        // navigate('/users/page', { state: linkedin_url });
    }

    // submit search url
    const submitSearchLinkedInUrl = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleChangePage(linkedInUrl);
    }

    // onchange handler search url
    const onChangeSearchLinkedInUrl = (e: React.FormEvent<HTMLInputElement>) => {
        // console.log(e.currentTarget.value)
        setLinkedInUrl(e.currentTarget.value);
    }

    const importPage = () => navigate('/users/import');

    return (    
        <>
            <main id="main" className="main">
                <div className="d-flex justify-content-between pagetitle mb-0">
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/users">Users</a></li>
                            {/* <li className="breadcrumb-item active">Dashboard</li> */}
                        </ol>
                    </nav>
                    <div>
                        <span onClick={importPage} className="mr10"><Button variant="contained" size="small" color="success" startIcon={<UploadFileIcon/>}>Import</Button></span>
                        <span onClick={importPage} className="mr10"><Button variant="contained" size="small" startIcon={<FileDownloadIcon/>}>Export</Button></span>
                    </div>
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