
const HeaderNSidebar = () => {
    return (
        <>
            {/* <!-- ======= Header ======= --> */}
            <header id="header" className="header fixed-top d-flex align-items-center">
            <div className="d-flex align-items-center justify-content-between">
                <a href="/" className="logo d-flex align-items-center">
                <img src="/assets/img/logo.png" alt=""/>
                <span className="d-none d-lg-block">DataCenter</span>
                </a>
                <i className="bi bi-list toggle-sidebar-btn"></i>
            </div>
            {/* <!-- End Logo --> */}
            {/* <div className="search-bar">
                <form className="search-form d-flex align-items-center" method="POST" action="#">
                    <input type="text" name="query" placeholder="Search" title="Enter search keyword"/>
                    <button type="submit" title="Search"><i className="bi bi-search"></i></button>
                </form>
            </div> */}
            {/* <!-- End Search Bar --> */}
            <nav className="header-nav ms-auto">
                <ul className="d-flex align-items-center">
                    <li className="nav-item d-block d-lg-none">
                        <a className="nav-link nav-icon search-bar-toggle " href="#">
                        <i className="bi bi-search"></i>
                        </a>
                    </li>
                    {/* <!-- End Search Icon--> */}
                    <li className="nav-item dropdown">
                        {/* <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                            <i className="bi bi-bell"></i>
                            <span className="badge bg-primary badge-number">4</span>
                        </a> */}
                        {/* <!-- End Notification Icon --> */}
                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                        <li className="dropdown-header">
                            You have 4 new notifications
                            <a href="#"><span className="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
                        </li>
                        <li>
                            <hr className="dropdown-divider"/>
                        </li>
                        <li className="notification-item">
                            <i className="bi bi-exclamation-circle text-warning"></i>
                            <div>
                                <h4>Lorem Ipsum</h4>
                                <p>Quae dolorem earum veritatis oditseno</p>
                                <p>30 min. ago</p>
                            </div>
                        </li>
                        <li>
                            <hr className="dropdown-divider"/>
                        </li>
                        <li className="notification-item">
                            <i className="bi bi-x-circle text-danger"></i>
                            <div>
                                <h4>Atque rerum nesciunt</h4>
                                <p>Quae dolorem earum veritatis oditseno</p>
                                <p>1 hr. ago</p>
                            </div>
                        </li>
                        <li>
                            <hr className="dropdown-divider"/>
                        </li>
                        <li className="dropdown-footer">
                            <a href="#">Show all notifications</a>
                        </li>
                        </ul>
                        {/* <!-- End Notification Dropdown Items --> */}
                    </li>
                    {/* <!-- End Notification Nav --> */}
                    <li className="nav-item dropdown">
                        {/* <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                        <i className="bi bi-chat-left-text"></i>
                        <span className="badge bg-success badge-number">3</span>
                        </a> */}
                        {/* <!-- End Messages Icon --> */}
                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
                        <li className="dropdown-header">
                            You have 3 new messages
                            <a href="#"><span className="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
                        </li>
                        <li>
                            <hr className="dropdown-divider"/>
                        </li>
                        <li className="message-item">
                            <a href="#">
                                <img src="/assets/img/messages-1.jpg" alt="" className="rounded-circle"/>
                                <div>
                                    <h4>Maria Hudson</h4>
                                    <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                                    <p>4 hrs. ago</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <hr className="dropdown-divider"/>
                        </li>
                        <li>
                            <hr className="dropdown-divider"/>
                        </li>
                        <li className="dropdown-footer">
                            <a href="#">Show all messages</a>
                        </li>
                        </ul>
                        {/* <!-- End Messages Dropdown Items --> */}
                    </li>
                    {/* <!-- End Messages Nav --> */}
                    <li className="nav-item dropdown pe-3">
                        <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
                        <img src="/assets/img/profile-blank.jpg" alt="Profile" className="rounded-circle"/>
                        <span className="d-none d-md-block dropdown-toggle ps-2">M. Antoni</span>
                        </a>
                        {/* <!-- End Profile Iamge Icon --> */}
                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                        <li className="dropdown-header">
                            <h6>Michael Antoni</h6>
                            <span>Software Developer</span>
                        </li>
                        <li>
                            <hr className="dropdown-divider"/>
                        </li>
                        <li>
                            <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
                            <i className="bi bi-person"></i>
                            <span>My Profile</span>
                            </a>
                        </li>
                        <li>
                            <hr className="dropdown-divider"/>
                        </li>
                        <li>
                            <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
                            <i className="bi bi-gear"></i>
                            <span>Account Settings</span>
                            </a>
                        </li>
                        <li>
                            <hr className="dropdown-divider"/>
                        </li>
                        <li>
                            <a className="dropdown-item d-flex align-items-center" href="pages-faq.html">
                            <i className="bi bi-question-circle"></i>
                            <span>Need Help?</span>
                            </a>
                        </li>
                        <li>
                            <hr className="dropdown-divider"/>
                        </li>
                        <li>
                            <a className="dropdown-item d-flex align-items-center" href="#">
                            <i className="bi bi-box-arrow-right"></i>
                            <span>Sign Out</span>
                            </a>
                        </li>
                        </ul>
                        {/* <!-- End Profile Dropdown Items --> */}
                    </li>
                    {/* <!-- End Profile Nav --> */}
                </ul>
            </nav>
            {/* <!-- End Icons Navigation --> */}
            </header>
            {/* <!-- End Header --> */}


            {/* <!-- ======= Sidebar ======= --> */}

            <aside id="sidebar" className="sidebar">
            <ul className="sidebar-nav" id="sidebar-nav">
                <li className="nav-item">
                    <a className="nav-link " href="/">
                    <i className="bi bi-grid"></i>
                    <span>Dashboard</span>
                    </a>
                </li>
                {/* <!-- End Dashboard Nav --> */}
                <li className="nav-item">
                    <a className="nav-link collapsed" href="/users">
                    <i className="bi bi-people-fill"></i>
                    <span>Users</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link collapsed" href="/users/archive">
                    <i className="bi bi-archive"></i>
                    <span>Archive</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
                    <i className="bi bi-gear"></i><span>Settings</span><i className="bi bi-chevron-down ms-auto"></i>
                    </a>
                    <ul id="components-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                        <li>
                            <a href="components-alerts.html">
                                <i className="bi bi-circle"></i><span>Account</span>
                            </a>
                        </li>
                        <li>
                            <a href="components-accordion.html">
                            <i className="bi bi-circle"></i><span>Change Password</span>
                            </a>
                        </li>
                    </ul>
                </li>
                {/* <!-- End Blank Page Nav --> */}
            </ul>
            </aside>

            {/* <!-- End Sidebar--> */}

        </>
    )
}

export default HeaderNSidebar;