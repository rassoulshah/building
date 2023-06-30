import {Fragment} from "react";
import Header from "../Header";
import Footer from "../Footer";

function CustomFragment({children}) {
    return (
        <Fragment>
            <Header/>
            {children}
            <Footer/>
        </Fragment>
    )
}

export default CustomFragment;