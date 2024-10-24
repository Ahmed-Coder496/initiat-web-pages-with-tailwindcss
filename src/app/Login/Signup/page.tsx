import HeaderPage from "@/app/component/Header/Header"
import Footer from "@/app/component/Header/Footer/Footer"
import Image from "next/image"

function SignUp() {
    return(
        <div>
            <HeaderPage></HeaderPage>
            <br />
            <br />
            <br />
            <br />
            <br />
            <h1 className="text-purple-700 font-bold text-2xl">SignUp Now</h1>
            <p>Create an account</p>
            <Image src={require("../../../../assets/Signup.png")} alt="SingUP Page" className="ml-80 h-auto w-1/2 my-10"/>
            <Footer></Footer>
        </div>
    )
}
export default SignUp