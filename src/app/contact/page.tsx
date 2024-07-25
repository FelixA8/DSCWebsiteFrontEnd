import ContactHero from "@/ui/contact/contact-hero-section";
import ContactInfo from "@/ui/contact/contact-info-section";
import { PageWrapper } from '@/app/page-wrapper';
export default function Home() {
  return (
    <>
    <PageWrapper>
      <ContactHero />
      <ContactInfo />
    </PageWrapper>
    </>
  );
}
