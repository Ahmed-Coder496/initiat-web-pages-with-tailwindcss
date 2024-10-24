import Link from "next/link"
import HeaderPage from "../component/Header/Header"
import Footer from "../component/Header/Footer/Footer"
import Image from "next/image"

function Login () {
    return(
        <div>
            <HeaderPage></HeaderPage>
            <br />
            <br />
            <br />
            <br />
            <br />
            <h1 className="text-purple-700 font-bold text-2xl">Login Page</h1>
            <p>You have already have an account So Login</p>
            <p>You have'nt account so you can SIGN UP and craete an account</p>
            <Image src={require("../../../assets/login page.png")} alt="lgoin page"/>
            <Link href="/Login/Signup" className="text-purple-700 font-bold text-2xl">SignUp</Link>
            <Footer></Footer>
        </div>
    )
}

export default Login;