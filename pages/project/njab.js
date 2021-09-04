import React from "react";
import CaseList from "sections/case-study/CaseList1";
import CaseDetails from "sections/case-study/CaseDetails";
import CTA from "sections/case-study/CTA";
import imgBrand from "assets/image/logo/njab.png";
import ProjectDetails from "templates/project-details";

const NJAB = () => {
  return (
    <>
      <ProjectDetails
        heading="Not Just a Box Events"
        image={imgBrand}
        subheading={
          <>
            Find out about our venture on the lovestruck industry of weddings
            and marriage through our collaboration with Not Just a Box Events.
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
export default NJAB;
