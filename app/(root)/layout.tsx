import Header from "../../components/LandingPage/Header";
import {Footer} from "../../components/Layout/Footer";
import { Metadata } from "next";

export const metadata:Metadata = {
    title:{
        template:"APEX UI - An Open Source Components Library",
        default: "APEX UI"
    }
}

export default function HomeLayout({children}:{children: React.ReactNode}){
    return (
        <>
            <Header/>

            <main className="relative w-full pt-0 md:pt-0">

                {children}
            </main>

            <Footer/>
        </>
    )
}