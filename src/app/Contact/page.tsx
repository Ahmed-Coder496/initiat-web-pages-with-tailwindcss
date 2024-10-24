import Footer from "../component/Header/Footer/Footer";
import HeaderPage from "../component/Header/Header";
import Image from "next/image";

const ContactPage = ()=>{
    return(
        <div>
            <HeaderPage></HeaderPage>
            <br />
            <br />
            <br />
            <br />
            <br />
            <h1 className="text-purple-700 font-bold text-2xl">Contact Us</h1>
            <Image src={require("../../../assets/contact page.png")} alt="contact" className="ml-80 h-auto w-1/2 my-10"/>
            <Footer></Footer>
        </div>
    )
};

export default ContactPage;