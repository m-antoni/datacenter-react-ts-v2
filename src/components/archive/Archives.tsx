import { useEffect, useState } from 'react';
import { RootStore } from '../../store';
import { useSelector, useDispatch } from 'react-redux';
import ArchiveList from './ArchiveList';
import { archiveOrRestoreUser, getAllArchiveUsers } from '../../redux/actions/users/user.actions';
import { ArchiveRestoreTypes } from '../../redux/types';
import { ToastQuestion, ToastSuccess } from '../../redux/service/toast.service';


const Archives = () => {

    const archives = useSelector((state: RootStore) => state.user.archives);
    const is_archive_restore_status = useSelector((state: RootStore) => state.user.archive_restore_status);
    const loading = useSelector((state: RootStore) => state.common.loading);
    const dispatch = useDispatch();

    const [archiveUsers , setArchiveUsers] = useState<any | null>(null);

    useEffect(() => {
        dispatch(getAllArchiveUsers())
    }, [])

    useEffect(() => {
        if(archives != undefined){
            setArchiveUsers(archives.data);
        }
    },[archives])


    useEffect(() => {
        if(is_archive_restore_status === true){
            dispatch(getAllArchiveUsers());
            ToastSuccess('User has been restore successfully.');
       }
    },[is_archive_restore_status])


    // handle change page row click
    const handleChangePage = (linkedin_url: string ) => {
        dispatch(getAllArchiveUsers())
    }

    // retore button
    const restoreButton = (linkedin_url: string) => {
        ToastQuestion(`Do you want to restore this user?`, () => restoreUserHandler(linkedin_url))
    }

    // retore handler dispatch
    const restoreUserHandler = (linkedin_url: string) => {
        dispatch(archiveOrRestoreUser(linkedin_url, ArchiveRestoreTypes.RESTORE))
    }

    return (    
        <>
            <main id="main" className="main">
                <div className="pagetitle">
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/users">Archived Users</a></li>
                            {/* <li className="breadcrumb-item active">Dashboard</li> */}
                        </ol>
                    </nav>
                </div>
                <section className="section dashboard">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body">
                                    <ArchiveList 
                                        archiveUsers={archiveUsers} 
                                        dispatch={dispatch} 
                                        restoreButton={restoreButton}
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

export default Archives;