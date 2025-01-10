import AsghaardSofa from "@/app/Components/AsghaardSofa";
import Blogs from "@/app/Components/Blogs";
import HeroSection from "@/app/Components/HeroSection";
import InstagramSection from "@/app/Components/InstagramSection";
import Footer from "@/app/Components/SharedComponents/Footer";
import TopPics from "@/app/Components/TopPics";

export default function Home() {
  return (
    <>
    <HeroSection/>
    <TopPics/>
    <AsghaardSofa/>
    <Blogs/>
    <InstagramSection/>
    <Footer/>
    </>
   );
}