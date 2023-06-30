import {AboutPage} from "../../data";
import CustomFragment from "../../components/CustomFragment";

function AboutUs() {
    return (
        <CustomFragment>
            <section className="page-top rt-relative rt rt-align about-titlez">
                <div className="main">
                    <div className="rt rt-relative rt-z-index rellax" data-rellax-percentage="0.7">
                        <h1 className="rt-800 rt rt-fff rt-35">درباره ما</h1>
                        <div className="desc rt-15 rt rt-fff rt-op">ما کی هستیم؟</div>
                    </div>
                </div>
            </section>
            <div className="about-us-page rt rt-relative rt-overflow">
                <section className="rt about-us-box rt-16 rt-444">
                    <div className="main">
                        <p>{AboutPage.header}</p>
                    </div>
                </section>
            </div>
            <section className="about-us-box rt-overflow rt">
                <div className="main">
                    <div className="side1 right">
                        <h1 className="about-title rt-800 rt rt-33 rt-sorme"><span
                            className="rt-rang rt-800">ارزش</span> های فراسو</h1>
                        <p className="rt rt-15 rt-444">ارزش هایی که ما را متفاوت می کند</p>
                    </div>
                    <div className="side1 left rt-align">
                        <div className="item right">
                            <img src="assets/images/about.png"/>
                            <h3 className="rt rt-sorme rt-18 rt-bold">ایمان و اعتماد</h3>
                        </div>
                        <div className="item right">
                            <img src="assets/images/support.png"/>
                            <h3 className="rt rt-sorme rt-18 rt-bold">عشق و احترام</h3>
                        </div>
                    </div>

                    <div className="fetus rt rt-align">

                        <div className="item right">
                            <img src="assets/images/f1.png"/>
                            <h4 className="rt rt-sorme rt-20 rt-bold">صداقت و شفافیت</h4>
                        </div>

                        <div className="item right">
                            <img src="assets/images/f2.png"/>
                            <h4 className="rt rt-sorme rt-20 rt-bold">تعصب و تعهد</h4>
                        </div>

                        <div className="item right">
                            <img src="assets/images/f3.png"/>
                            <h4 className="rt rt-sorme rt-20 rt-bold">اشتیاق و نوآوری</h4>
                        </div>

                    </div>
                </div>
            </section>
            <section className="about-us-box endword rt">
                <div className="main">
                    <div className="side1 right pic">
                        <img src="assets/images/banner.png" className="rt"/>
                    </div>
                    <div className="side1 left text-about">
                        <h3 className="about-title rt-800 rt rt-33 rt-sorme">سخن <span
                            className="rt-rang rt-800">آخر</span></h3>
                        <p className="rt rt-16 rt-444" style={{marginBottom: "5px"}}>
                            در سیستم همکاری در فروش فراسو هر
                            کس می تواند با یک عضویت ساده و کمک به فروش کالاها، به ازای خرید هر کاربر، پورسانت دریافت
                            کند. این روش که افیلیت مارکتینگ نام دارد، از مهم ترین شیوه های کسب درآمد اینترنتی است که همه
                            می توانند به راحتی از طریق شبکه های اجتماعی مانند کانال تلگرام و اینستاگرام و یا سایت،
                            کانالی برای کسب درآمد آنلاین خود ایجاد کنند.
                        </p>
                        <a href="register.html" className="right rt-35px rt-fff rt-bold rt-green-1 btnzxcas"
                           target="_blank">همین حالا عضو شوید <i class="fa fa-angle-left"/></a>
                        <div className="membersasd rt-14 rt-300 right">
                            <span className="rt-green-2 rt-medium">۴۱۴۴۰۴۲۸۵۷ </span> تومان<br/>کمیسیون دریافتی همکاران
                        </div>

                    </div>
                </div>
            </section>
        </CustomFragment>
    )
}

export default AboutUs;