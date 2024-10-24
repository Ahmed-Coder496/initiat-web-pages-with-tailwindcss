import Link from "next/link";
import HeaderPage from "../component/Header/Header";
import Footer from "../component/Header/Footer/Footer";

const ServicePage = ()=>{
    return(
        <div>
            <HeaderPage></HeaderPage>
            <br />
            <br />
            <br />
            <br />
            <br />
            <p>How can I help you</p>
            <p>Web design that makes your brand shine.</p>
            <h1 className="text-purple-700 font-bold text-2xl">Our Service</h1>
            <div className="w-1/2 text-center float-left text-xl font-bold">Best Quaility Design</div>
            <div className="w-1/2 text-center float-left text-xl font-bold">Responsive Web Design</div>
            <div className="w-1/2 text-center float-left text-xl font-bold">Custom Website Design</div>
            <div className="w-1/2 text-center float-left text-xl font-bold">E-commerce Website Design</div>
            <div className="my-5">You like our services so Contact Us</div>
            <Link href="/Service/SubServices" className="text-purple-700 font-bold text-2xl">Sub Services</Link>
            <Footer></Footer>
        </div>
    )
};

export default ServicePage;