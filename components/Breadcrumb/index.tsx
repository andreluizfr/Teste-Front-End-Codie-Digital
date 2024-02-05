import Link from "next/link";
import { BreadcrumbContainer, BreadcrumbLink, BreadcrumbLinks, PageDescription, PageTitle } from "./styles";
import React from "react";

interface breadcrumbContainerProps extends React.HTMLAttributes<HTMLElement>{
  ordenedLabels: string[];
  pageDescription: string;
}

export default function Breadcrumb({ ordenedLabels, pageDescription }: breadcrumbContainerProps) {

  function convertLabelToLink(label: string) {
    switch(label){
      case "Home": return "/";
      case "Quem Somos": return "/about";
      case "Agendar Consulta": return "/schedule";
      default: return "/";
    }
  }
  return (
    <BreadcrumbContainer>
      <BreadcrumbLinks>
        {ordenedLabels.map((label, index)=>{
          if(index===ordenedLabels.length-1) {
            return (
              <Link href={convertLabelToLink(label)} key={"BreadcrumbLink"+index}>
                <BreadcrumbLink>{label}</BreadcrumbLink>
              </Link>
            )
          }
          else {
            return (
              <>
                <Link href={convertLabelToLink(label)} key={"BreadcrumbLink"+index}>
                  <BreadcrumbLink>{label}</BreadcrumbLink>
                </Link>
                {">"}
              </>
            );
          }
        })}
      </BreadcrumbLinks>
      
      <PageTitle>
        {ordenedLabels[ordenedLabels.length-1]}
      </PageTitle>

      <PageDescription>
        {pageDescription}
      </PageDescription>

    </BreadcrumbContainer>
  )
}