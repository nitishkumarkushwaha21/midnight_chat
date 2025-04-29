import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

type Props = {
  children: React.ReactNode;
  shownav?: boolean;
}

const Layout = ({ children ,shownav=false}: Props) => {
  return (

    <div className="flex flex-col min-h-screen">
      <div> {shownav && <Navbar></Navbar>} </div>
      <div> {children}</div>
      <div> <Footer/> </div>
     
    </div>
  )

}

export default Layout;