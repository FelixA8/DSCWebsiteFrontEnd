import AboutusDepartment from "@/ui/aboutus/aboutus-department-section";
import AboutusHero from "@/ui/aboutus/aboutus-hero-section";
import AboutusMission from "@/ui/aboutus/aboutus-mission-section";
import AboutusVision from "@/ui/aboutus/aboutus-vision-section";
import { PageWrapper } from '@/app/page-wrapper';
export default function Home() {
  return (
    <>
    <PageWrapper>
      <AboutusHero />
      <AboutusMission />
      <AboutusVision />
      <AboutusDepartment />
    </PageWrapper>
    </>
  );
}
