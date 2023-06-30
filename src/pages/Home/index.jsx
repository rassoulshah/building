import {HomePage} from "../../data";
import CustomFragment from "../../components/CustomFragment";

function Home() {
    return (
        <CustomFragment>
            <section className="index-top rt-relative rt rt-color">
                <div className="main">
                    <div className="rt rt-relative rt-z-index">
                        <article>
                            <h1 className="rt-800 rt rt-fff rt-33">مشاوره های ساخت و ساز</h1>
                            <p className="rt rt-17 rt-300">{HomePage.header}</p>
                            <a href="register.html" className="right rt-35px rt-fff rt-bold rt-green-1 btnzxcas"
                               target="_blank">همین حالا رایگان عضو شوید <i className="fa fa-angle-left"/></a>
                        </article>
                    </div>
                </div>
            </section>

            <aside className="amar rt">
                <div className="main">
                    <div className="entery rt-relative rt-z-index rt-align rt rt-30px rt-bg">
                        <div className="side right">
                            <span className="num rt rt-30 rt-bold rt-rang">۴,۶۷۶,۶۲۰,۰۰۵</span>
                            <span className="text rt-14 rt-444">تومان کمیسیون دریافتی همکاران</span>
                        </div>
                        <div className="side right">
                            <span className="num rt rt-30 rt-bold rt-rang">۱۰۵۶۴۶</span>
                            <span className="text rt-14 rt-444">نفر تاکنون در این سیستم عضو شده‌اند</span>
                        </div>
                        <div className="side right">
                            <span className="num rt rt-30 rt-bold rt-rang">۶۱۲۰۹</span>
                            <span className="text rt-14 rt-444">تعداد وب سایت / شبکه اجتماعی ثبت شده</span>
                        </div>
                        <div className="side right">
                            <span className="num rt rt-30 rt-bold rt-rang">۸۷۵۸۱۲</span>
                            <span className="text rt-14 rt-444">تعداد خرید از طریق همکاران ثبت شده</span>
                        </div>
                    </div>
                </div>
            </aside>

            <section className="rt feature">
                <div className="main">
                    <img src="assets/images/options.jpg" className="right side pic img-shadow"/>
                    <div className="side left fey">
                        <h3 className="rt rt-33 rt-800 rt-sorme">برتری های سیستم <span className="rt-rang rt-800">بهین افیلیت</span>
                        </h3>
                        <ul className="rt rt-333 rt-16">
                            {HomePage.options.map(item => (
                                <li className="rt"><i className="fa fa-circle rt-rang right"/> <span
                                    className="right">{item}</span></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <section className="rt feature steps">
                <div className="main">
                    <div className="asx">
                        <ul className="rt">
                            <div className="rt">
                                <i className="fa fa-arrow-down right"/>
                                <li className="left rt-35px rt-bg">
                                    <div className="icon rt-50px rt-fff rt-33 rt-center icon-1">
                                        <i className="icon-cooperation-1"/></div>
                                    <div className="entery left">
                                        <h3 className="rt rt-bold rt-222 rt-19"><span
                                            className="rt-center rt-50px rt-14 rt-fff num-1">1</span> ثبت‌نام و ساخت
                                            فروشگاه</h3>
                                        <p className="rt rt-666 rt-15">به راحتی و به سادگی می توانید در بهین افیلیت
                                            عضو شوید و فروشگاه اختصاصیتان را ایجاد کنید</p>
                                    </div>
                                </li>
                            </div>
                            <div className="rt">
                                <i className="fa fa-arrow-down left"/>
                                <li className="right rt-35px rt-bg">
                                    <div className="icon rt-50px rt-fff rt-33 rt-center icon-2"><i
                                        className="icon-cooperation-3"/></div>
                                    <div className="entery left">
                                        <h3 className="rt rt-bold rt-222 rt-19"><span
                                            className="rt-center rt-50px rt-14 rt-fff num-2">2</span> فروش محصولات
                                        </h3>
                                        <p className="rt rt-666 rt-15">پس از ایجاد فروشگاه، محصولات را به مشتریان
                                            خود معرفی کرده و بفروشید</p>
                                    </div>
                                </li>
                            </div>
                            <div className="rt">
                                <i className="fa fa-arrow-left right"/>
                                <li className="left rt-35px rt-bg">
                                    <div className="icon rt-50px rt-fff rt-33 rt-center icon-4"><i
                                        className="icon-cooperation-5"/></div>
                                    <div className="entery left">
                                        <h3 className="rt rt-bold rt-222 rt-19"><span
                                            className="rt-center rt-50px rt-14 rt-fff num-3">3</span> دریافت کمیسیون
                                        </h3>
                                        <p className="rt rt-666 rt-15">با ازای فروش هر محصول از فروشگاه اختصاصیتان
                                            کمیسیون قابل توجهی دریافت خواهید کرد</p>
                                    </div>
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>
            </section>

            {/*<section className="wejegeez rt-relative rt-z-index rt">*/}
            {/*    <div className="main">*/}
            {/*        <div className="title rt rt-align">*/}
            {/*            <h3 className="rt rt-33 rt-800 rt-sorme">ویژگی ها و <span*/}
            {/*                className="rt-rang rt-800">امکانات</span> بهین افیلیت</h3>*/}
            {/*            <p className="rt rt-333">برای عضویت در سیستم همکاری در فروش بهین افیلیت و کسب درآمد میلیونی از*/}
            {/*                آن، نیاز به سرمایه نیست، حتی نیاز به داشتن یک شبکه اجتماعی پر مخاطب هم نیست و تنها کافیست که*/}
            {/*                یک وب سایت، کانال تلگرام و یا صفحه اینستاگرام داشته باشید و با ترغیب هر تعداد کاربر به خرید*/}
            {/*                از فروشگاه، کمیسیون دریافت کنید. </p>*/}
            {/*        </div>*/}
            {/*        <div className="rt entery">*/}
            {/*            <div className="sotoon right">*/}
            {/*                <div className="item rt rt-bg rt-align rt-10px item-1">*/}
            {/*                    <div className="icon rt-center rt-50px rt-fff">*/}
            {/*                        <i className="icon-property-1"/>*/}
            {/*                    </div>*/}
            {/*                    <span className="rt rt-bold rt-16">فروشگاه اختصاصی </span>*/}
            {/*                </div>*/}
            {/*                <div className="item rt rt-bg rt-align rt-10px item-2">*/}
            {/*                    <div className="icon rt-center rt-50px rt-fff"><i className="icon-property-2"/></div>*/}
            {/*                    <span className="rt rt-bold rt-16">محصولات متنوع </span>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="sotoon right">*/}
            {/*                <div className="item rt rt-bg rt-align rt-10px item-3">*/}
            {/*                    <div className="icon rt-center rt-50px rt-fff"><i className="icon-property-3"/></div>*/}
            {/*                    <span className="rt rt-bold rt-16">پورسانت بالا </span>*/}
            {/*                </div>*/}
            {/*                <div className="item rt rt-bg rt-align rt-10px item-4">*/}
            {/*                    <div className="icon rt-center rt-50px rt-fff"><i className="icon-property-4"/></div>*/}
            {/*                    <span className="rt rt-bold rt-16">درگاه های متنوع </span>*/}
            {/*                </div>*/}
            {/*            </div>*/}

            {/*            <div className="sotoon right">*/}
            {/*                <div className="item rt rt-bg rt-align rt-10px item-5">*/}
            {/*                    <div className="icon rt-center rt-50px rt-fff"><i className="icon-property-5"/></div>*/}
            {/*                    <span className="rt rt-bold rt-16">بازگشت کالا تا 3 روز </span>*/}
            {/*                </div>*/}
            {/*                <div className="item rt rt-bg rt-align rt-10px item-6">*/}
            {/*                    <div className="icon rt-center rt-50px rt-fff"><i className="icon-property-6"/></div>*/}
            {/*                    <span className="rt rt-bold rt-16">پرداخت درب منزل </span>*/}
            {/*                </div>*/}
            {/*            </div>*/}

            {/*            <div className="sotoon right">*/}
            {/*                <div className="item rt rt-bg rt-align rt-10px item-7">*/}
            {/*                    <div className="icon rt-center rt-50px rt-fff"><i className="icon-property-7"/></div>*/}
            {/*                    <span className="rt rt-bold rt-16">واریز روزانه پورسانت </span>*/}
            {/*                </div>*/}
            {/*                <div className="item rt rt-bg rt-align rt-10px item-8">*/}
            {/*                    <div className="icon rt-center rt-50px rt-fff"><i className="icon-property-8"/></div>*/}
            {/*                    <span className="rt rt-bold rt-16">ربات دستیار </span>*/}
            {/*                </div>*/}
            {/*            </div>*/}

            {/*            <div className="sotoon right">*/}
            {/*                <div className="item rt rt-bg rt-align rt-10px item-9">*/}
            {/*                    <div className="icon rt-center rt-50px rt-fff"><i className="icon-property-9"/></div>*/}
            {/*                    <span className="rt rt-bold rt-16">پردازش هوشمند </span>*/}
            {/*                </div>*/}
            {/*                <div className="item rt rt-bg rt-align rt-10px item-10">*/}
            {/*                    <div className="icon rt-center rt-50px rt-fff"><i className="icon-property-10"/>*/}
            {/*                    </div>*/}
            {/*                    <span className="rt rt-bold rt-16">جامع ترین سیستم همکاری </span>*/}
            {/*                </div>*/}
            {/*            </div>*/}

            {/*            <div className="saths-btn rt rt-align">*/}
            {/*                <a href="saths.html" className="rt-35px rt-bg rt-14 rt-sorme rt-bold btnzxcas2"*/}
            {/*                   target="_blank">*/}
            {/*                    <i className="fa fa-star" style={{color: "#f0b701"}}/> مشاهده سطح های همکاری</a></div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}
        </CustomFragment>
    )
}

export default Home;