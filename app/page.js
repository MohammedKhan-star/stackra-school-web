import schoolData from "@/data/schoolData";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import PrincipalMessage from "@/components/PrincipalMessage";
import VisionMission from "@/components/VisionMission";
import WhyChooseUs from "@/components/WhyChooseUs";
import Academics from "@/components/Academics";
import Facilities from "@/components/Facilities";
import StudentLife from "@/components/StudentLife";
import Achievements from "@/components/Achievements";
import Admissions from "@/components/Admissions";
import AdmissionProcess from "@/components/AdmissionProcess";
import NewsEvents from "@/components/NewsEvents";
import Gallery from "@/components/Gallery";
import VideoGallery from "@/components/VideoGallery";
import Testimonials from "@/components/Testimonials";
import Faculty from "@/components/Faculty";
import Transportation from "@/components/Transportation";
import Downloads from "@/components/Downloads";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header school={schoolData} />

      <Hero school={schoolData} />

      <Stats statistics={schoolData.statistics} />

      <About school={schoolData} />

      <PrincipalMessage school={schoolData} />

      <VisionMission school={schoolData} />

      <WhyChooseUs school={schoolData} />

      <Academics school={schoolData} />

      <Facilities school={schoolData} />

      <StudentLife school={schoolData} />

      <Achievements school={schoolData} />

      <Admissions school={schoolData} />

      <AdmissionProcess school={schoolData} />

      <NewsEvents school={schoolData} />

      <Gallery school={schoolData} />

      <VideoGallery school={schoolData} />

      <Testimonials school={schoolData} />

      <Faculty school={schoolData} />

      <Transportation school={schoolData} />

      <Downloads school={schoolData} />

      <Contact school={schoolData} />

      <Footer school={schoolData} />
    </main>
  );
}