import { useEffect, useState } from 'react';
import { getUsers } from '../../redux/actions/users/user.actions';
import { RootStore } from '../../store';
import { useSelector, useDispatch } from 'react-redux';
import ReactPaginate from 'react-paginate';
import Select from 'react-select';

interface PageLimitOptionI {
    value: number,
    label: string
}
const pageLimitOptions: PageLimitOptionI[] = [
    { value: 10, label: '10' },
    { value: 20, label: '20' },
    { value: 50, label: '50' },
    { value: 100, label: '100' },
];

const Users = () => {

    const user = useSelector((state: RootStore) => state.user.users)
    const dispatch = useDispatch()
    const [users, setUsers] = useState<any | null>(null);
    const [pageLimit, setPageLimit] = useState<PageLimitOptionI>(pageLimitOptions[0]);
        
    useEffect(() => {
        dispatch(getUsers())
    }, [])

    useEffect(() => {
        if(user != undefined){
            setUsers(user.data);
        }
    },[user])


    const handlePageClick = (data: any) => {
        let page = data.selected + 1;
        dispatch(getUsers(page))
    };

    const pageLimitOnChange = (selected: any) => {
        setPageLimit(selected);
        dispatch(getUsers(undefined, selected.value, undefined))
    }


    return (    
        <>
            <main id="main" className="main">
                <div className="pagetitle">
                    <h1>Users</h1>
                    {/* <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item active">Dashboard</li>
                        </ol>
                    </nav> */}
                </div>
                <section className="section dashboard">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Default Table</h5>
                                    <Select
                                        value={pageLimit}
                                        onChange={pageLimitOnChange}
                                        options={pageLimitOptions}
                                        className="user-pagelimit-select"
                                    />
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">Full Name</th>
                                                <th scope="col">Job Title</th>
                                                <th scope="col">Job Company Name</th>
                                                <th scope="col">Industry</th>
                                                <th scope="col">LinkedIn URL</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                users != null &&
                                                users.docs.map((user: any, index: number) => {
                                                    return (
                                                        <tr>
                                                            <td>{user.full_name}</td>
                                                            <td>{user.job_title}</td>
                                                            <td>{user.job_company_name}</td>
                                                            <td>{user.industry}</td>
                                                            <td>{user.linkedin_url}</td>
                                                        </tr> 
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>
                                    {
                                        users != null && 
                                        <ReactPaginate
                                            previousLabel="Previous"
                                            nextLabel="Next"
                                            pageClassName="page-item"
                                            pageLinkClassName="page-link"
                                            previousClassName="page-item"
                                            previousLinkClassName="page-link"
                                            nextClassName="page-item"
                                            nextLinkClassName="page-link"
                                            breakLabel="..."
                                            breakClassName="page-item"
                                            breakLinkClassName="page-link"
                                            pageCount={users.totalPages}
                                            marginPagesDisplayed={2}
                                            pageRangeDisplayed={5}
                                            onPageChange={handlePageClick}
                                            containerClassName="pagination justify-content-center"
                                            activeClassName="active"
                                            forcePage={0}
                                        />
                                    }
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