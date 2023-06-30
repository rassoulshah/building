import {Fragment, useState} from "react";
import {Link} from "react-router-dom";
import LoginDialog from "./LoginDialog";
import Button from "@mui/material/Button";

function Header() {
    const [openLogin, setOpenLogin] = useState(false)
    return (
        <Fragment>
            <header>
                <div className="main">
                    <div className="right rt-50px rt-center rt-pointer rt-27 rt-fff" id="menu-btn"><i
                        className="fa fa-bars"/></div>
                    {/*<a href="/">*/}
                    {/*    <img src="assets/images/logo-a.png" height="48" className="logo logo-a right"/>*/}
                    {/*    <img src="assets/images/logo-b.png" height="48" className="logo logo-b right"/>*/}
                    {/*</a>*/}
                    <ul className="menu right rt-align rt-14">
                        <li><Link to="/" className="rt-bold rt-fff">خانه</Link></li>
                        <li className="have-child rt-relative"><a href="/" className="rt-bold rt-fff">مرکز
                            آموزش <i className="fa fa-angle-down"/></a>
                            <ul className="small-list rt-absolute rt-14 rt-bg">
                                <li className="rt">
                                    <a href="page.html" className="rt rt-222">
                                        <img src="assets/images/ic-1.png" className="right" height="25"/> آموزش
                                        فروش از طریق وبسایت
                                    </a>
                                </li>
                                <li className="rt">
                                    <Link to="/" className="rt rt-222">
                                        <img src="assets/images/ic-2.png" className="right" height="25"/> آموزش
                                        فروش از طریق موبایل
                                    </Link>
                                </li>
                                <li className="rt">
                                    <a href="page.html" className="rt rt-222">
                                        <img src="assets/images/ic-3.png" className="right" height="25"/> آموزش
                                        فروش از طریق شبکه های اجتماعی
                                    </a>
                                </li>
                            </ul>
                        </li>
                        {/*<li><a href="templates.html" className="rt-bold rt-fff">قالب ها</a></li>*/}
                        <li><Link to="/" className="rt-bold rt-fff">سوالات متداول</Link></li>
                        <li><Link to="/about-us" className="rt-bold rt-fff">درباره ما</Link></li>
                    </ul>
                    <div className="log-reg rt-14 left">
                        <a onClick={()=>setOpenLogin(true)} className="log left rt-bg rt-bold rt-35px rt-sorme" style={{cursor:"pointer"}}>
                            <i className="fa fa-user"/>
                            ورود به پنل همکاری
                        </a>
                        <Link to="register.html" target="_blank" className="reg left rt-bold rt-35px rt-fff">
                            <i className="fa fa-user-plus"/> ثبت نام</Link>
                    </div>
                    <Link to="login.html" className="log-panel rt-fff rt-18 rt-center rt-50px left"><i
                        className="fa fa-user-o"/></Link>
                    <Link to="register.html" className="log-panelplus rt-14 rt-bold rt-center rt-50px left">ثبت
                        نام</Link>
                </div>
            </header>
            <LoginDialog open={openLogin} setOpen={setOpenLogin}/>
        </Fragment>
    )
}

export default Header;