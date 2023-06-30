import * as React from 'react';
import Dialog from '@mui/material/Dialog';

function LoginDialog({open, setOpen}) {

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Dialog open={open} onClose={handleClose}>
            <div className="rt rt-center">
                <div className="main-form minsx rt-relative rt-20px rt-overflow nfgf">
                    <div className="side rt-bg ascx right">
                        <div className="rt fasele"/>
                        <a href="/"><img src="assets/images/logo-b.png" className="right logo"/></a>
                        <a href="/" className="btn-action rt-20px rt-555 rt-bg rt-15 rt-bold left">
                            <i className="fa fa-key"/> بازیابی پسورد</a>
                        <form action="/" method="POST">
                            <h1 className="title rt rt-800 rt-000 rt-21">ورود به حساب کاربری</h1>
                            <div className="field large">
                                <label>نام کاربری</label>
                                <input type="text" name="username" data-icon="user" dir="ltr"/>
                            </div>
                            <div className="field large">
                                <label>کلمه عبور</label>
                                <input type="password" name="password" data-icon="closed-lock" dir="ltr"/>
                            </div>
                            <span className="rt divider"/>
                            <span className="inf rt-444 right rt-14" style={{marginTop: "12px"}}>
                                        <input id="ck" type="checkbox"/> <label htmlFor="ck">ذخیره مشخصات ورود‌؟</label>
                                    </span>
                            <input type="submit" className="bt blue large" value="ورود"/>
                        </form>

                        <div className="rt fasele"/>
                    </div>
                    <div className="side rt-absolute zxczxc rt-center rt-align left rt-fff rt-13">
                        <div className="rt fasele"/>
                        <h5 className="rt-fff rt-800 rt-27 rt-align">حساب همکاری ندارید؟</h5>
                        <samp className="rt rt-align">همین حالا ثبت نام کنید</samp>
                        <a href="register.html" className="rt rt-align rt-15 rt-medium"><span
                            className="rt-35px rt-sorme rt-fff rt-medium rt-bg">ثبت نام</span></a>
                        <div className="rt fasele"/>
                    </div>
                </div>
            </div>
        </Dialog>
    )
}

export default LoginDialog;