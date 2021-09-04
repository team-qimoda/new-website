import React from "react";
import CaseList from "sections/case-study/CaseList1";
import CaseDetails from "sections/case-study/CaseDetails";
import CTA from "sections/case-study/CTA";
import imgBrand from "assets/image/logo/insuranceko.png";
import ProjectDetails from "templates/project-details";

const InsuranceKo = () => {
  return (
    <>
      <ProjectDetails
        heading="InsuranceKo"
        image={imgBrand}
        subheading={
          <>
            How easy should getting insurance be? In a world of uncertainties,
            it pays well to be prepared. Through our work with InsuranceKo, we
            explore several avenues of how people can easily access insurance.
          </>
        }
      >
        <CaseDetails />
        <CaseList />
        <CTA />
      </ProjectDetails>
    </>
  );
};
export default InsuranceKo;
