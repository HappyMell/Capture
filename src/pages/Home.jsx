import React from "react";
import Header from "../components/header/Header";
import Intro from "../components/intro/Intro";
import About from "../components/about/About";
import Experience from "../components/experience/Experience";
import PhotoButton from "../components/photo-and-button/PhotoButton";
import Photo from "../components/photo/Photo";
import PhotoStudio from "../components/photostudio/PhotoStudio";
import MorePhotography from "../components/morephotography/MorePhotography";
import Services from "../components/services/Services";
import SubscribeForm from "../components/subscribeform/SubscribeForm";
import Stats from "../components/stats/Stats";
import Gallery from "../components/gallery/Gallery";
import FullImage from "../components/full-image/FullImage";
import Testimonials from "../components/testimonials/Testimonials";
import GalleryTwo from "../components/gallerytwo/GalleryTwo";
import Contact from "../components/contact/Contact";
import Faq from "../components/faq/Faq";
import Follow from "../components/follow/Follow";
import Footer from "../components/footer/Footer";

export default function Home() {
  return (
    <div className="home">
      <Header />
      <Intro />
      <About />
      <Experience />
      <PhotoButton />
      <Photo />
      <PhotoStudio />
      <MorePhotography />
      <SubscribeForm />
      <Services />
      <Stats />
      <Gallery />
      <FullImage />
      <Testimonials />
      <GalleryTwo />
      <Contact />
      <Faq />
      <Follow />
      <Footer />
    </div>
  );
}
