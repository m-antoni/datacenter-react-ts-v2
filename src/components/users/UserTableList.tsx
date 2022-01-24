import { useState } from 'react';
import { getUsers } from '../../redux/actions/users/user.actions';
import Select from 'react-select';
import ReactPaginate from 'react-paginate';
import { Spinner } from '../_layouts/Spinner';
import { capitalizeStr } from '../../utils/Common';


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

interface TableConfigI {
    page: number,
    limit: number,
    sort: 'desc'
}

const tableConfigValues: TableConfigI = {
    page: 1,
    limit: 10,
    sort: 'desc'
}

const UserTableList = ({ users, dispatch, loading, handleChangePage, submitSearchLinkedInUrl, onChangeSearchLinkedInUrl }: any) => {

    const [pageLimit, setPageLimit] = useState<PageLimitOptionI>(pageLimitOptions[0]);
    const [tableConfig, setTableComfig] = useState(tableConfigValues)

    const pageLimitOnChange = (selected: any) => {
        setPageLimit(selected);
        dispatch(getUsers(undefined, selected.value, undefined));
        // setTableComfig({ ...tableConfig, limit: selected });
    }

    const handlePageClick = (data: any) => {
        let page = data.selected + 1;
        dispatch(getUsers(page, undefined, undefined));
        // setTableComfig({ ...tableConfig, page: page });
    };

    return (
        <>
            <div className='d-flex justify-content-between'>
                <Select
                    value={pageLimit}
                    onChange={pageLimitOnChange}
                    options={pageLimitOptions}
                    className="user-pagelimit-select mt-4"
                />
                
                <form onSubmit={submitSearchLinkedInUrl} className="input-group mb-3 linkedin-search mt-4">
                    <span className="input-group-text" id="basic-addon3">https://</span>
                    <input type="text" onChange={onChangeSearchLinkedInUrl} placeholder="Search LinkedIn URL" className="form-control" required/>
                </form>
            </div>
                  
            {
                loading ? <Spinner/> : 
                <table className="table mb-4">
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
                                    <tr onClick={() => handleChangePage(user.linkedin_url)} key={index} className="user-list-tr">
                                        <td>{capitalizeStr('v',user.full_name)}</td>
                                        <td>{user.job_title ? capitalizeStr('v', user.job_title) : 'N/A'}</td>
                                        <td>{user.job_company_name ? capitalizeStr('v', user.job_company_name) : 'N/A'}</td>
                                        <td>{user.industry ? capitalizeStr('v', user.industry) : 'N/A'}</td>
                                        <td>{user.linkedin_url}</td>
                                    </tr> 
                                )
                            })
                            
                        }
                    </tbody>
                </table>
            }
            
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
        </>
    )
}


export default UserTableList;