import HeaderPage from "@/app/component/Header/Header";
import Footer from "@/app/component/Header/Footer/Footer";

const SubServicePage = ()=>{
    return(
        <div>
            <HeaderPage></HeaderPage>
            <br />
            <br />
            <br />
            <br />
            <br />
            <h1 className="text-purple-700 font-bold text-2xl">SubService</h1>
            <div className="float-left w-1/2 text-center">Fun Website</div>
            <div className="float-left w-1/2 text-center">Cool Website</div>
            <div className="float-left w-1/2 text-center">Simple Website</div>
            <div className="float-left w-1/2 text-center">Beautiful Website</div>
            <div className="float-left w-1/2 text-center">Creative Website</div>
            <div className="float-left w-1/2 text-center">Logical Website</div>
            <br />
            <br />
            <br />
            <br />
            <Footer></Footer>
        </div>
    )
};

export default SubServicePage;