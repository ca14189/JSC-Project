// import React from "react";
// import Image from "next/image";

// interface SectionItemComponent {
//   name: string;
//   type: "text" | "media";
//   data: string;
//   media_ref?: string;
// }

// interface ProjectSectionProps {
//   projectData: SectionItemComponent[];
// }

// // Component for a single project
// const ProjectCard: React.FC<{
//   titleIndexes: number[];
//   skillIndexes: number[];
//   imageIndex: number;
//   hoursIndex: number;
//   techIndexes: number[];
//   difficultyIndex: number;
//   projectData: SectionItemComponent[];
// }> = ({
//   titleIndexes,
//   skillIndexes,
//   imageIndex,
//   hoursIndex,
//   techIndexes,
//   difficultyIndex,
//   projectData,
// }) => {
//   return (
//     <section className="relative mt-25 overflow-hidden">
//       <div className="layout px-4 md:px-12 relative z-10">
//         <h1 className="headingGlobal text-center font-bold mt-16 mb-12">
//           {projectData[titleIndexes[0]]?.data}
//         </h1>

//         <div className="flex flex-col md:flex-row items-center justify-between gap-8">
//           {/* Left: Skills */}
//           <div className="md:w-1/6 w-full text-center md:text-left">
//             <p className="font-bold mb-4 leading-tight">
//               {projectData[titleIndexes[1]]?.data} <br />
//               {projectData[titleIndexes[2]]?.data}
//             </p>
//             <div className="bg-brandlight shadow-md rounded-md p-4">
//               <ul className="textConsistent list-none flex flex-wrap gap-4 justify-center md:justify-start">
//                 {skillIndexes.map((i) => (
//                   <li key={i}>{projectData[i]?.data}</li>
//                 ))}
//               </ul>
//             </div>
//           </div>

//           {/* Center: Image */}
//           <div className="md:w-2/3 w-full">
//             <div className="rounded-lg overflow-hidden shadow-lg relative z-10">
//               {projectData[imageIndex]?.media_ref && (
//                 <Image
//                   src={projectData[imageIndex]?.media_ref!}
//                   alt="Project Preview"
//                   className="w-full h-auto object-cover"
//                   width={600}
//                   height={400}
//                   priority
//                 />
//               )}
//             </div>
//           </div>

//           {/* Right: Hours & Difficulty */}
//           <div className="md:w-1/6 w-full text-center md:text-left">
//             <p className="font-bold mb-4 leading-tight">
//               <span className="text-2xl font-extrabold">
//                 {projectData[hoursIndex]?.data}
//               </span>
//               <br />
//               {projectData[techIndexes[0]]?.data} {projectData[techIndexes[1]]?.data}
//             </p>
//             <div className="bg-brandlight shadow-md rounded-md p-2">
//               <p className="textConsistent">{projectData[difficultyIndex]?.data}</p>
//             </div>
//           </div>
//         </div>

//         {/* Optional bottom background */}
//         {projectData[imageIndex + 5]?.media_ref && (
//           <div className="w-full -mt-24">
//             <Image
//               src={projectData[imageIndex + 5]?.media_ref!}
//               alt="Project Bottom Background"
//               className="w-full h-auto object-cover"
//               width={600}
//               height={400}
//               priority
//             />
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// // Main Projects component
// const Projects: React.FC<ProjectSectionProps> = ({ projectData }) => {
//   // Define all projects dynamically with indexes
//   const projects = [
//     {
//       titleIndexes: [0, 1, 2],
//       skillIndexes: [5, 6, 7],
//       imageIndex: 8,
//       hoursIndex: 9,
//       techIndexes: [10, 11],
//       difficultyIndex: 12,
//     },
//     {
//       titleIndexes: [14, 15, 16],
//       skillIndexes: [17, 18, 19, 20, 21],
//       imageIndex: 22,
//       hoursIndex: 23,
//       techIndexes: [24, 25],
//       difficultyIndex: 26,
//     },
//     {
//       titleIndexes: [28, 29, 30],
//       skillIndexes: [31, 32, 33],
//       imageIndex: 34,
//       hoursIndex: 35,
//       techIndexes: [36, 37],
//       difficultyIndex: 38,
//     },
//   ];

//   return (
//     <div>
//       {projects.map((proj, idx) => (
//         <ProjectCard key={idx} {...proj} projectData={projectData} />
//       ))}
//     </div>
//   );
// };

// export default Projects;

import React from "react";
import Image from "next/image";

interface SectionItemComponent {
  name: string;
  type: "text" | "media";
  data: string;
  media_ref?: string;
}

interface ProjectSectionProps {
  projectData: SectionItemComponent[];
}

const Projects: React.FC<ProjectSectionProps> = ({ projectData }) => {
  
  const reactProjectImage = projectData[8]?.media_ref;
  const reactProjectBgImage = projectData[13]?.media_ref;
  const recentAffairProjectImage = projectData[22]?.media_ref;
  const dizeduProjectImage = projectData[34]?.media_ref;


  return (
    <div>
      {/* First Project */}
      <section className="relative mt-25 overflow-hidden">
        <div className="layout px-4 md:px-12 relative z-10">
           <h1 className="headingMain text-center mb-4 mt-16">{projectData[0]?.data}</h1>
          <h1 className="headingGlobal text-center font-bold mb-12">
            {projectData[28]?.data}
          </h1>

          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/6 w-full text-center md:text-left">
              <p className="font-bold mb-4 leading-tight">{projectData[29]?.data} <br /> {projectData[30]?.data}</p>
              <div className="bg-brandlight shadow-md rounded-md p-4">
                <ul className="textConsistent list-none space-y-1">
                  <li>{projectData[31]?.data}</li>
                  <li>{projectData[32]?.data}</li>
                  <li>{projectData[33]?.data}</li>
                </ul>
              </div>
            </div>

            <div className="md:w-2/3 w-full">
              <div className="rounded-lg overflow-hidden shadow-lg relative z-10">
                {dizeduProjectImage && (
                  <Image
                    src={dizeduProjectImage}
                    alt="Amazon Clone Project Preview"
                    className="w-full h-auto object-cover"
                    width={600}
                    height={400}
                    priority
                  />
                )}
              </div>
            </div>

            <div className="md:w-1/6 w-full text-center md:text-left">
              <p className="font-bold mb-4 leading-tight">
                <span className="text-2xl font-extrabold">{projectData[35]?.data}</span> 
                <br />
                {projectData[36]?.data} {projectData[37]?.data}
              </p>
              <div className="bg-brandlight shadow-md rounded-md p-2">
                <p className="textConsistent">{projectData[38]?.data}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full -mt-24">
          {reactProjectBgImage && (
            <Image
              src={reactProjectBgImage}
              alt="Project Bottom Background"
              className="w-full h-auto object-cover"
              width={600}
              height={400}
              priority
            />
          )}
        </div>
      </section>
      

      {/* Second Project */}
      <section className="relative mt-25 overflow-hidden">
        <div className="layout px-4 md:px-12 relative z-10">
          <h1 className="headingGlobal text-center  font-bold mt-16 mb-12">
            {projectData[14]?.data}
          </h1>

          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/6 w-full text-center md:text-left">
              <p className="font-bold mb-4 leading-tight">
                {projectData[15]?.data} <br /> {projectData[16]?.data}
              </p>
              <div className="bg-brandlight shadow-md rounded-md p-8">
                <ul className="textConsistent list-none  space-y-1">
                  {projectData.slice(17, 22).map((item, index) => (
                    <li key={index}>{item.data}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="md:w-2/3 w-full">
              <div className="rounded-lg overflow-hidden shadow-lg relative z-10">
                {recentAffairProjectImage && (
                  <Image
                    src={recentAffairProjectImage}
                    alt="NextJS Portfolio Project Preview"
                    className="w-full h-auto object-cover"
                    width={600}
                    height={400}
                    priority
                  />
                )}
              </div>
            </div>

            <div className="md:w-1/6 w-full text-center md:text-left">
              <p className="font-bold mb-4 leading-tight">
                <span className="text-2xl font-extrabold">{projectData[23]?.data}</span>
                <br />
                {projectData[24]?.data} {projectData[25]?.data}
              </p>
              <div className="bg-brandlight shadow-md rounded-md p-2">
                <p className="textConsistent">{projectData[26]?.data}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full -mt-24">
          {reactProjectBgImage && (
            <Image
              src={reactProjectBgImage}
              alt="Project Bottom Background"
              className="w-full h-auto object-cover"
              width={600}
              height={400}
              priority
            />
          )}

        </div>
      </section>

      {/* Third Project  */}
      <section className="relative mt-25 overflow-hidden">
        <div className="layout px-4 md:px-12 relative z-10">
          {/* <h1 className="headingMain text-center mb-4 mt-16">{projectData[0]?.data}</h1> */}
          <p className="textConsistent text-center font-bold  mt-16 mb-12">
            {projectData[1]?.data} <br /> {projectData[2]?.data}
          </p>

          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/6 w-full text-center md:text-left">
              <p className="font-bold mb-4 leading-tight">
                {projectData[3]?.data} <br /> {projectData[4]?.data}
              </p>
              <div className="bg-brandlight shadow-md rounded-md p-4">
                <ul className="textConsistent list-none space-y-1">
                  <li>{projectData[5]?.data}</li>
                  <li>{projectData[6]?.data}</li>
                  <li>{projectData[7]?.data}</li>
                </ul>
              </div>
            </div>

            <div className="md:w-2/3 w-full">
              <div className="rounded-lg overflow-hidden shadow-lg relative z-10">
                {reactProjectImage && (
                  <Image
                    src={reactProjectImage}
                    alt="Amazon Clone Project Preview"
                    className="w-full h-auto object-cover"
                    width={600}
                    height={400}
                    priority
                  />
                )}
              </div>
            </div>

            <div className="md:w-1/6 w-full text-center md:text-left">
              <p className="font-bold mb-4 leading-tight">
                <span className="text-2xl font-extrabold">{projectData[9]?.data}</span>
                <br />
                {projectData[10]?.data} {projectData[11]?.data}
              </p>
              <div className="bg-brandlight shadow-md rounded-md p-2">
                <p className="textConsistent">{projectData[12]?.data}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full -mt-24">
          {reactProjectBgImage && (
            <Image
              src={reactProjectBgImage}
              alt="Project Bottom Background"
              className="w-full h-auto object-cover"
              width={600}
              height={400}
              priority
            />
          )}

        </div>
      </section>
    </div>
  );
};

export default Projects;
