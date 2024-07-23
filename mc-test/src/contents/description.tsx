// import { Inspirations, InspirationLink } from "../components";

export function Description() {
  // const links: InspirationLink[] = [
  //   { year: 2022, teamName: "DTU-Denmark", pageName: "Description" },
  //   { year: 2019, teamName: "ITESO_Guadalajara", pageName: "Description" },
  //   { year: 2020, teamName: "Technion-Israel", pageName: "Description" },
  //   { year: 2020, teamName: "Botchan_Lab_Tokyo", pageName: "Description" },
  //   { year: 2020, teamName: "St_Andrews", pageName: "Description" },
  //   { year: 2020, teamName: "MIT", pageName: "Description" },
  // ];

  return (
    <>
      <div className="row mt-4">
        <div className="col-lg-12">
          <h2>The Problem</h2>
          <hr />
          <p>
          Due to the complexities of the tumour microenvironment (TME) and the lack 
          of tumour-specific antigens, there are no standard treatment regimens for 
          the 500,000 - 700,00 cases of breast cancer identified as triple negative. 
          As women of African descent experience more aggressive and antigen barren tumours, 
          modern approaches further neglect these populations. Inspired by early case 
          studies that detailed the anti-tumour effects of bacterial infection, 
          Stritzker et al. (2007) showed probiotic E. coli Nissle 1917 as an effective 
          candidate to induce antigen-independent tumour regression in mouse models. 
          The bacteria colonizes tumour sites through its K5 capsule, while sparing 
          healthy tissue by preferentially proliferating in the hypoxic and unique 
          nutrient profile of the TME. While a promising candidate for cancer therapeutics, 
          the dosage required to achieve clinically significant outcomes risks inducing 
          sepsis, preventing bacteria-based therapies from progressing past Phase I trials. 
          </p>
        </div>
        {/* <Inspirations inspirationLinkList={links} /> */}
      
      </div>

      {/* <div className="row mt-4">
        <div className="col">
          <div className="bd-callout bd-callout-info">
            <h4>Bronze Medal Criterion #3</h4>
            <p>Describe how and why you chose your iGEM project.</p>
            <hr />
            <p>
              Please see the{" "}
              <a href="https://competition.igem.org/judging/medals">
                2024 Medals Page
              </a>{" "}
              for more information.
            </p>
          </div>
        </div>
      </div> */}

      <div className="row mt-4">
        <div className="col-lg-12">
          <h2>Our Aim</h2>
          <hr />
          <p> 
          McMaster_Canada aims to develop an efficient bacterial delivery system 
          capable of colonizing complex solid tumours (ie. triple negative breast 
          cancer) at lower therapeutic dosages. Our solution is inspired by Fusobacterium 
          nucleatum (F. nucleatum), an anaerobic oral commensal bacterium known to 
          colonize and co-exist in the tumour microenvironment. In literature, it is 
          theorized that tumors recruit F. nucleatum through the overexpression of Gal-GalNAc, 
          a known disaccharide tumor surface biomarker, which binds to Fap2 lectin on the 
          surface of F. nucleatum. Fap2 also contains an epitope capable of inactivating 
          NK and T Cells through the TIGIT pathways, promoting immune evasion. To maximize 
          bacterial colonization, we will model Fap2 with random mutations at both the 
          Gal-GalNAc and TIGIT binding sites. Candidate structures will be analyzed by 
          Pafnucy, a deep neural network developed by Stepniewska-Dziubinska et al. 
          to predict Gal-Gal-NAc and TIGIT binding affinities. We will select the structure 
          that offers the strongest affinity for Gal-Gal-NAc, alongside minimal activation 
          of TIGIT. With the following design, Fap2 expressing E. coli Nissle 1917 will be 
          capable of localizing to the tumour site and achieving colonization with a reduced 
          dose compared to native E. coli. After colonizing the tumour site, the unique 
          environment of the microenvironment will induce the expression of a synthetic 
          antigen designed by Vincent et al. to tag tumour cells as targets for adoptive 
          cell therapy. 
          </p>
        </div>
        <br/>
        <div className="col-lg-8">
          <h2>References</h2>
          <hr />
          <p>

          </p>
        </div>
      </div>
    </>
  );
}
