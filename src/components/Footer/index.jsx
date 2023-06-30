import {Fragment} from "react";

function Footer() {
    return (
        <Fragment>
            <footer>
                <div className="main rt-fff">
                    <div className="footer-widget w-1 right">
                        {/*<a href="index.html"><img src="assets/images/logo-a.png" height="40" className="logo-f right"/></a>*/}
                        <a href="tel:08622222222" className="number-phone rt-align rt-15 rt-medium rt rt-fff rt-30px">شماره تماس :
                            ۰۸۶۲۲۲۲۲۲۲۲</a>
                        <div className="social rt">
                            <span className="right rt-13 rt-fff">در شبکه های اجتماعی دنبال کنید :</span>
                            <a href="#" className="left rt-center rt-50px rt-sorme in"><i className="fa fa-instagram"/></a>
                            <a href="#" className="left rt-center rt-50px rt-sorme tg"><i className="fa fa-paper-plane"/></a>
                        </div>
                    </div>

                    <div className="footer-widget w-2 right">
                        <h3 className="title rt rt-bold rt-15">دسترسی سریع</h3>
                        <ul className="rt rt-14">
                            <li className="right"><a href="register.html" target="_blank" className="rt-fff">ثبت نام</a></li>
                            <li className="right"><a href="login.html" target="_blank" className="rt-fff">ورود</a></li>
                            <li className="right"><a href="index.html" className="rt-fff">فروشگاه</a></li>
                            <li className="right"><a href="index.html" className="rt-fff">وبلاگ</a></li>
                            <li className="right"><a href="about-us.html" className="rt-fff">درباره ما</a></li>
                            <li className="right"><a href="faq.html" className="rt-fff">سوالات متداول</a></li>
                        </ul>
                    </div>

                    <div className="footer-widget w-3 right">
                        <h3 className="title rt rt-bold rt-15">دانلود اپلیکیشن فراسو</h3>
                        <span className="rt sxs rt-13">با نصب اپلیکیشن به راحتی حساب خود را مدیریت کنید. </span>
                        <a href="index.html" className="right rt-5px rt-fff">
                            <div className="des right rt-13">
                                <span className="rt">دانلود مستقیم</span>
                                <span className="rt rt-12">نسخه Android</span>
                            </div>
                            <i className="fa fa-android left"/>
                        </a>
                        <a href="index.html" className="left rt-5px rt-fff">
                            <div className="des right rt-13">
                                <span className="rt">دانلود مستقیم</span>
                                <span className="rt rt-12">نسخه iOS</span>
                            </div>
                            <i className="fa fa-apple left"/>
                        </a>
                    </div>

                    <div className="footer-widget w-4 right">
                        <a href="index.html"><img src="assets/images/namad-1.png"/></a>
                        <a href="index.html"><img src="assets/images/namad-2.png"/></a>
                    </div>

                </div>
                <div className="copyright rt rt-15 rt-align">
                    <div className="main">کلیه حقوق این سایت متعلق به طراح قالب می باشد.</div>
                </div>
            </footer>
        </Fragment>
    )
}

export default Footer;



