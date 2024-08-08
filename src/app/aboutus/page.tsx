import AboutusDepartment from "../../ui/aboutus/aboutus-department-section";
import AboutusHero from "@/ui/aboutus/aboutus-hero-section";
import AboutusMission from "@/ui/aboutus/aboutus-mission-section";
import AboutusVision from "@/ui/aboutus/aboutus-vision-section";
import { PageWrapper } from '@/app/page-wrapper';
import FooterComponent from "@/components/footer";
import AboutusVisionMission from "@/ui/aboutus/aboutus-vission-mission-section";
import AboutusOrganizationStructure from "@/ui/aboutus/aboutus-organization-structure-section";
import AboutusLogoInformation from "@/ui/aboutus/aboutus-logo-information-section";
export default function Home() {
  return (
    <>
      <PageWrapper>
        <AboutusHero />
        <AboutusVisionMission />
        <AboutusLogoInformation />
        {/* <AboutusMission />
      <AboutusVision /> */}
        <AboutusDepartment />
        <AboutusOrganizationStructure />
        <FooterComponent />
      </PageWrapper>
    </>
  );
}
