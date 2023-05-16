'use client'
import Footer from "@/components/Footer";
import Navbar from "@/components/Header";
 import About from "@/components/About";

 import Main from "@/components/Main";
import Contact from "@/components/Contact";
import { Skills } from "@/components/Skills";
import Portolio from "@/components/Protfolio";




export default function Home() {
  return (
    <><div className="bg-slate-600">
  <Navbar/>

  <Main/>
  <About/>
  <Portolio></Portolio>
  <Skills/>
  <Contact/>
  <Footer/></div>
    </>
  )
}
