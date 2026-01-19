import Navbar from "./components/common/Navbar"
import Hero from "./sections/Hero"
import FeaturedCertificates from "./components/certificates/FeaturedCertificates"
import Certificates from "./sections/Certificates"
import Projects from "./sections/Projects"
import Contact from "./sections/Contact";
export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero/>
        <FeaturedCertificates />
        <Certificates />
        <Projects />
         <Contact />
      </main>
    </>
  )
}
