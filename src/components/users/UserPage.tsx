import { useEffect, useState } from 'react';
import { RootStore } from '../../store';
import { useSelector, useDispatch } from 'react-redux';
import { getUserByLinkedInUrl, archiveOrRestoreUser } from '../../redux/actions/users/user.actions';
import { useLocation, useNavigate } from 'react-router-dom';
import { Spinner } from '../_layouts/Spinner';
import { capitalizeStr } from '../../utils/helpers';
import { ToastQuestion, ToastSuccess } from '../../redux/service/toast.service';
import { ArchiveRestoreTypes } from '../../redux/types';

const UserPageTest = () => {

    const linkedin_user = useSelector((state: RootStore) => state.user.linkedin_url)
    const is_archive_restore_status = useSelector((state: RootStore) => state.user.archive_restore_status);
    const loading = useSelector((state: RootStore) => state.common.loading);
    const dispatch = useDispatch();
    const { state }: any = useLocation(); // access state from useNavigate()
    const [user, setUser] = useState<any | null>(null);
    const navigate = useNavigate();


    useEffect(() => {
        let url: string = state.data.docs[0]['linkedin_url'];
        /** This will prevent to duplicate fetching if data is already in reducer */
        if(linkedin_user === undefined || linkedin_user === null){
            dispatch(getUserByLinkedInUrl(url));
        }
    },[])


    useEffect(() => {
        // set user data if persisted
        linkedin_user != undefined && setUser(linkedin_user.data.docs)
    },[linkedin_user])

    
    /** Trigger when user is archive*/
    useEffect(() => {
       if(is_archive_restore_status === true){
            navigate('/users');
            ToastSuccess('User is store in archives.');
       }
    },[is_archive_restore_status]);

    // onclick delete button
    const archiveButton = (linkedin_url: string) => {
        ToastQuestion('Do you want to remove this user?', () => archiveOrRestoreUserHandler(linkedin_url) )
    }
    
    // Delete handler
    const archiveOrRestoreUserHandler = (linkedin_url: string) => {
        dispatch(archiveOrRestoreUser(linkedin_url, ArchiveRestoreTypes.ARCHIVE))
    }

    // console.log(user)
    const renderUserData = (type: string, userData: object) => {
        // console.log(userData);
        return (
            <>
                {
                    Object.entries(userData).map(([key, val]) => {
                        if(type === "general")
                        {
                            if(key === 'full_name' || key === 'job_title' || key === 'job_company_name' || key === 'gender' || key === 'first_name' || key === 'last_name' || key === 'linkedin_id')
                            {
                                return (
                                    <div className="pb-1"><span className="text-secondary">{capitalizeStr('k', key)}</span>: {capitalizeStr('k', val)}</div>
                                )
                            }
                        }

                        if(key === 'linkedin_url')
                        {
                            return (
                                <div className="pb-1"><span className="text-secondary">{capitalizeStr('k', key)}</span>: {val}</div>
                            )
                        }

                        if(type === "location")
                        {
                            if(key === 'location_country' || key === 'location_continent' || key === 'location_postal_code' || key === 'location_region' || key === 'location_name' || key === 'location_street_address' || key === 'location_geo')
                            {
                                return (
                                    <div className="pb-1"><span className="text-secondary">{capitalizeStr('k', key)}</span>: {capitalizeStr('k', val)}</div>
                                )
                            }
                        }
                    })
                }
            </>
        )
    }

    const renderUserDataV2 = (field: string, arr: ([] | undefined)) => {
        // not available
        if(arr === undefined || arr === null) return <div className="mt-3 justify-content-center">{" "}</div>

        if(field === 'emails' || field === 'phone_numbers' || field === 'mobile_numbers'){
            return (
                <>
                    {
                       arr.map((_arr: any) => (
                           <>
                                {
                                    typeof _arr === 'string' ?  <div>{_arr}</div> :
                                    Object.entries(_arr).map(([key, val]: any) => {
                                        return <div><span className="text-secondary"> {capitalizeStr('k', key)} </span>: { capitalizeStr('v', val) }</div>
                                    })
                                }
                             <div className="pb-3"></div>
                           </>
                       ))
                    }
                </>
            )
        }

        if(field === 'education'){
            // console.log(arr)
            return (
                <>
                    { 
                        arr.map((_arr: any) => {
                                return (
                                    <>
                                        <div><span className="text-secondary">School:</span> { capitalizeStr('v', _arr['school']['name']) } </div>
                                        <div><span className="text-secondary">Type:</span> { capitalizeStr('v', _arr['school']['type']) } </div>
                                        <div className="pb-3"></div>
                                    </>
                                )
                        })
                    }
                </>
            )
        }

        if(field === 'experience'){
            // console.log(arr)
            return (
                <>
                    { 
                        arr.map((_arr: any) => {
                                return (
                                    <>
                                        <div><span className="text-secondary">School:</span> { capitalizeStr('v', _arr['company']['name'])} </div>
                                        <div><span className="text-secondary">Start Date:</span> { _arr['start_date']} </div>
                                        <div><span className="text-secondary">End Date:</span> { _arr['end_date']} </div>
                                        <div className="pb-3"></div>
                                    </>
                                )
                        })
                    }
                </>
            )
        }


        if(field === 'skills' || field === 'interests'){
            // console.log(arr)
            return (
                <>
                    { 
                        arr.map((_arr: any) => {
                            return (
                                <>
                                    <div>- { capitalizeStr('v', _arr) } </div>
                                </>
                            )
                        })
                    }
                </>
            )
        }

        if(field === 'profiles'){
            // console.log(arr)
            return (
                <>
                    { 
                        arr.map((_arr: any) => {
                            return (
                                <>
                                    <div><span className="text-secondary">{ capitalizeStr('v', _arr['network'])} : </span> {_arr['url']} </div>
                                    <div className="pb-1"></div>

                                </>
                            )
                        })
                    }
                </>
            )
        }
    }


    return (    
        <>
            <main id="main" className="main">
                <div className="d-flex justify-content-between pagetitle mb-0">
                    {/* <h1>Users</h1> */}
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/users">Users</a></li>
                            <li className="breadcrumb-item active">User Page</li>
                        </ol>
                    </nav>
                    <div>
                        <ol className="breadcrumb">
                           {/* <button onClick={() => archiveButton(user[0]['linkedin_url'])} className="btn btn-danger btn-sm"><i className="bi bi-trash"></i> </button> */}
                           <div className="delete-icon">
                                <i onClick={() => archiveButton(user[0]['linkedin_url'])} className="bi bi-trash"></i>
                           </div>
                        </ol>
                    </div>
                </div>
                <section className="section dashboard">
                    {
                        loading ? <Spinner/> :
                        <>
                            <div className="row">
                                <div className="col-lg-6 col-sm-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">General</h5>
                                            <ul className="nav nav-tabs nav-tabs-bordered d-flex" id="borderedTabJustified" role="tablist">
                                                <li className="nav-item flex-fill" role="presentation">
                                                    <button className="nav-link w-100 active" id="home-tab" data-bs-toggle="tab" data-bs-target="#bordered-justified-info" type="button" role="tab" aria-controls="info" aria-selected="true">Info</button>
                                                </li>
                                                <li className="nav-item flex-fill" role="presentation">
                                                    <button className="nav-link w-100" id="profile-tab" data-bs-toggle="tab" data-bs-target="#bordered-justified-education" type="button" role="tab" aria-controls="education" aria-selected="false">Education</button>
                                                </li>
                                                <li className="nav-item flex-fill" role="presentation">
                                                    <button className="nav-link w-100" id="contact-tab" data-bs-toggle="tab" data-bs-target="#bordered-justified-experience" type="button" role="tab" aria-controls="experience" aria-selected="false">Experience</button>
                                                </li>
                                            </ul>
                                            <div className="tab-content pt-2" id="borderedTabJustifiedContent">
                                                <div className="tab-pane fade show active" id="bordered-justified-info" role="tabpanel" aria-labelledby="info-tab">
                                                    { user != null && renderUserData("general", user[0]) }
                                                </div>
                                                <div className="tab-pane fade" id="bordered-justified-education" role="tabpanel" aria-labelledby="education-tab">
                                                    { user != null ? renderUserDataV2("education", user[0]['education']) : <div className="my-5 pb-5"></div>}
                                                </div>
                                                <div className="tab-pane fade" id="bordered-justified-experience" role="tabpanel" aria-labelledby="experience-tab">
                                                    { user != null ? renderUserDataV2("experience", user[0]['experience']) : <div className="my-5 pb-5"></div>}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-sm-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">Location</h5>
                                            <div>
                                                { user != null && renderUserData("location", user[0]) }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-sm-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">Contact Details</h5>
                                            <ul className="nav nav-tabs nav-tabs-bordered d-flex" id="borderedTabJustified" role="tablist">
                                                <li className="nav-item flex-fill" role="presentation">
                                                <button className="nav-link w-100 active" id="home-tab" data-bs-toggle="tab" data-bs-target="#bordered-justified-email" type="button" role="tab" aria-controls="email" aria-selected="true">Emails</button>
                                                </li>
                                                <li className="nav-item flex-fill" role="presentation">
                                                <button className="nav-link w-100" id="profile-tab" data-bs-toggle="tab" data-bs-target="#bordered-justified-telephone" type="button" role="tab" aria-controls="telephone" aria-selected="false">Telephone</button>
                                                </li>
                                                <li className="nav-item flex-fill" role="presentation">
                                                <button className="nav-link w-100" id="contact-tab" data-bs-toggle="tab" data-bs-target="#bordered-justified-mobile" type="button" role="tab" aria-controls="mobile" aria-selected="false">Mobile</button>
                                                </li>
                                            </ul>
                                            <div className="tab-content pt-2" id="borderedTabJustifiedContent">
                                                <div className="tab-pane fade show active" id="bordered-justified-email" role="tabpanel" aria-labelledby="email-tab">
                                                    { user != null && renderUserDataV2("emails",user[0]['emails'])}
                                                </div>
                                                <div className="tab-pane fade" id="bordered-justified-telephone" role="tabpanel" aria-labelledby="telephone-tab">
                                                    { user != null && renderUserDataV2("phone_numbers",user[0]['phone_numbers'])}
                                                </div>
                                                <div className="tab-pane fade" id="bordered-justified-mobile" role="tabpanel" aria-labelledby="mobile-tab">
                                                    { user != null && renderUserDataV2("mobile_numbers",user[0]['mobile_numbers'])}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-sm-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">Other Info</h5>
                                            <ul className="nav nav-tabs nav-tabs-bordered d-flex" id="borderedTabJustified" role="tablist">
                                                <li className="nav-item flex-fill" role="presentation">
                                                <button className="nav-link w-100 active" id="home-tab" data-bs-toggle="tab" data-bs-target="#bordered-justified-skills" type="button" role="tab" aria-controls="skills" aria-selected="true">Skills</button>
                                                </li>
                                                <li className="nav-item flex-fill" role="presentation">
                                                <button className="nav-link w-100" id="profile-tab" data-bs-toggle="tab" data-bs-target="#bordered-justified-profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Interests</button>
                                                </li>
                                                <li className="nav-item flex-fill" role="presentation">
                                                <button className="nav-link w-100" id="contact-tab" data-bs-toggle="tab" data-bs-target="#bordered-justified-contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Profiles</button>
                                                </li>
                                            </ul>
                                            <div className="tab-content pt-2" id="borderedTabJustifiedContent">
                                                <div className="tab-pane fade show active" id="bordered-justified-skills" role="tabpanel" aria-labelledby="skills-tab">
                                                    { user != null && renderUserDataV2("skills",user[0]['skills'])}
                                                </div>
                                                <div className="tab-pane fade" id="bordered-justified-profile" role="tabpanel" aria-labelledby="profile-tab">
                                                    { user != null && renderUserDataV2("interests",user[0]['interests'])}
                                                </div>
                                                <div className="tab-pane fade" id="bordered-justified-contact" role="tabpanel" aria-labelledby="contact-tab">
                                                    { user != null && renderUserDataV2("profiles",user[0]['profiles'])}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    }
                </section>
            </main>
        </>
    )

}

export default UserPageTest;