'use client'

import MainDemand from "@/ui/main/main-demands-section";
import MainDivision from "@/ui/main/main-division-section";
import MainExploreDS from "@/ui/main/main-exploreds-section";
import MainHero from "@/ui/main/main-hero-section";
import MainAboutus from "@/ui/main/main-aboutdsc-section";
import NewPost from "@/ui/main/main-newpost-section";
import NumFact from "@/ui/main/main-numfacts-section";
import { DefaultSeo } from "next-seo";
import Image from "next/image";
import { ToastContainer } from "react-toastify";
import { PageWrapper } from '@/app/page-wrapper';
import Countdown from "@/ui/main/main-countdown-section";
import FooterComponent from "@/components/footer";

export default function Home() {
  return (
    <>
    <PageWrapper>
      <MainHero />
      <Countdown />
      <MainAboutus />
      <NewPost />
      <NumFact />
      <MainDemand />
      <hr />
      <FooterComponent />
    </PageWrapper>
    </>
  );
}
