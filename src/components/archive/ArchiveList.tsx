import { useState } from 'react';
import Select from 'react-select';
import ReactPaginate from 'react-paginate';
import { Spinner } from '../_layouts/Spinner';
import { capitalizeStr } from '../../utils/helpers';
import { getAllArchiveUsers } from '../../redux/actions/users/user.actions';


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

const UserTableList = ({ archiveUsers, dispatch, loading, restoreButton }: any) => {

    const [pageLimit, setPageLimit] = useState<PageLimitOptionI>(pageLimitOptions[0]);
 
    const pageLimitOnChange = (selected: any) => {
        setPageLimit(selected);
        dispatch(getAllArchiveUsers(undefined, selected.value, undefined));
    }
    

    const handlePageClick = (data: any) => {
        let page = data.selected + 1;
        dispatch(getAllArchiveUsers(page, undefined, undefined));
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
                
            </div>
                  
            {
                loading ? <Spinner/> : 
                <table className="table mb-4 mt-2">
                    <thead>
                        <tr>
                            <th scope="col user-fullname">Full Name</th>
                            <th scope="col">Job Title</th>
                            <th scope="col">Company</th>
                            <th scope="col">Industry</th>
                            <th scope="col">LinkedIn URL</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            archiveUsers != null && 
                            archiveUsers.docs.map((archive: any, index: number) => {
                                return (
                                    <tr key={index}>
                                        <td>{capitalizeStr('v',archive.full_name)}</td>
                                        <td>{capitalizeStr('v', archive.job_title) }</td>
                                        <td>{capitalizeStr('v', archive.job_company_name)}</td>
                                        <td>{capitalizeStr('v', archive.industry)}</td>
                                        <td>{archive.linkedin_url}</td>
                                        <td><i onClick={() => restoreButton(archive.linkedin_url)} className="bi bi-reply-fill restore-icon"></i></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            }
            
            {
                archiveUsers != null && archiveUsers.totalDocs > 10 && 
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
                    pageCount={archiveUsers.totalPages}
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