import CustomFragment from "../../components/CustomFragment";
import Accordion from "./components/Accordion";

function Questions() {
    return (
        <CustomFragment>
            <section className="page-top rt-relative rt rt-align about-titlez">
                <div className="main">
                    <div className="rt rt-relative rt-z-index rellax" data-rellax-percentage="0.7">
                        <h1 className="rt-800 rt rt-fff rt-35">سوالات متداول</h1>
                        <div className="desc rt-15 rt rt-fff rt-op">از اینکه به کسب و کارهای زیادی در راه موفقیت کمک کرده ایم بینهایت خوشحالیم.</div>
                    </div>
                </div>
            </section>
            <div className="rt sep-Bg3">
                <span className="sep-bgParts N2"/>
                <span className="sep-bgParts N3"/>
            </div>
            <main>
                <article className="faq rt">
                    <ul id="accordion2" className="accordion rt-bg rt-15px rt rellax" data-rellax-speed="-1">
                        <Accordion title="مشکلات کمیسیون ماده صد چیست؟"/>
                        <Accordion title="مشکلات ارتفاع پلاک چیست؟"/>
                        <Accordion title="میزان سطح اشتغال ساختمان چه قدر است؟"/>
                        <Accordion title="مشکلات کمیسیون ماده صد چیست؟"/>
                        <Accordion title="مشکلات کمیسیون ماده صد چیست؟"/>
                    </ul>
                </article>

            </main>
        </CustomFragment>
    )
}

export default Questions;