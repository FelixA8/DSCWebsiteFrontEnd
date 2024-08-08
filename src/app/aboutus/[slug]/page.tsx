"use client"
import { PageWrapper } from '@/app/page-wrapper';
import DepartmentHero from "@/ui/department/department-hero-section";
import { usePathname } from "next/navigation";
import { listDepartment } from '../../../../lib/departments';
export default function Home() {
  const searchParams = usePathname();
  const words = searchParams.split("/");
  const parentPath = words[words.length - 2];
  const currPath = words[words.length - 1];
  const validSlugs = ['education-and-development', 'creative', 'human-capital', 'media', 'public-relation'];
  const index = validSlugs.findIndex(item => item === currPath);

  if(index === -1) {
    return <h1>Oh no</h1>
  }

  return (
    <>
      <PageWrapper>
        <DepartmentHero department={listDepartment[index]} />
      </PageWrapper>
    </>
  );
}