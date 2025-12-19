'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';



// const sections ={
//     buttons: [
//       { id: 'r1-btn1', label: 'Design & development', target: 'r1-set1' },
//       { id: 'r1-btn2', label: 'Testing, Building And Linting', target: 'r1-set2' },
//       { id: 'r1-btn3', label: 'NodeJS', target: 'r1-set3' }
//     ],
//     content: {
//       'r1-set1': [
//         { src: htmlCssImg, label: 'HTML5 & CSS3 and JavaScript' },
//         { src: bootstrapImg, label: 'Bootstrap & SASS & LESS' },
//         { src: figmaImg, label: 'Figma' },
//         { src: typeScript, label: 'TypeScript' },
//         { src: ReactJSImg, label: 'React JS' },
//         { src: vueImg, label: 'Vue.JS' },
//         { src: angularImg, label: 'Angular' },
//         { src: storyBookImg, label: 'Storybook' }
//       ],
//       'r1-set2': [
//         { src: JestImg, label: 'Jest' },
//         { src: enzymeImg, label: 'Enzyme' },
//         { src: karmaImg, label: 'Karma' },
//         { src: mochachaiImg, label: 'Mochachai' },
//         { src: eslintImg, label: 'ESLint' },
//         { src: jslintImg, label: 'JSLint' },
//         { src: webpackImg, label: 'Webpack' },
//         { src: npmYarnImg, label: 'Npm & Yarn' }
//       ],
//       'r1-set3': [
//         { src: nodejsImg, label: 'NodeJS' },
//         { src: expressImg, label: 'Express JS' },
//         { src: sqlImg, label: 'SQL' },
//         { src: mysqlImg, label: 'MySQL' },
//         { src: mongodbImg, label: 'MongoDB' },
//         { src: awsAzureImg, label: 'Cloud (AWS & Azure)' },
//         { src: microserviceImg, label: 'Microservice' },
//         { src: containerImg, label: 'Container' }
//       ]
//     }
//   }
;

// const ToolSection = ({toolSectionData}) => {
//   const [visibleSet, setVisibleSet] = useState('r1-set2');
//   const data = toolSectionData;



//   return (
//     <div className="w-full">
//       {/* Tab Buttons */}
//       <div className="bg-[#343434] w-full h-12 mt-10">
//         <div className="flex justify-around mx-auto w-[80%] h-12">
//           {data.map((btn) => (
//             <button
//               key={btn._id}
//               className={`my-auto py-1 px-3 border border-transparent rounded-3xl cursor-pointer text-white font-bold text-sm sm:text-base transition
//                 ${visibleSet === btn.target ? 'bg-amber-500' : 'hover:bg-amber-500'}
//               `}
//               onClick={() => setVisibleSet(btn.target)}
//             >
//               {btn.name}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Content Display */}
//       <div className="flex flex-wrap w-[86%] mx-auto mt-16 justify-center">
//         {sections.content[visibleSet]?.map((item, idx) => (
//           <div key={idx} className="mx-4 w-[45%] sm:w-[22%] md:w-[18%] my-5 text-center">
//             <Image
//               src={item.src}
//               alt={item.label}
//               width={100}
//               height={100}
//               className="mx-auto h-auto"
//             />
//             <p className="text-base sm:text-lg font-semibold mt-2">{item.label}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ToolSection;


interface ToolContentItem {
  data: string;
  name: string;
}

interface ToolSectionItem {
  type: 'text' | 'media';
  data: string;
  name: string;
  //  contents: ToolContentItem[];
  media_ref?: string; // Optional, used for images or other media references
}

interface ToolSectionProps {
  toolSectionData: ToolSectionItem[];
}

interface TabButton {
  target: string;
  name: string;
}

interface SectionContent {
  src: string;
  label: string;
}

const ToolSection = ({ toolSectionData }: ToolSectionProps) => {
  const [tabButtons, setTabButtons] = useState<TabButton[]>([]);
  const [sections, setSections] = useState<Record<string, SectionContent[]>>({});
  const [visibleSet, setVisibleSet] = useState<string>('');

  useEffect(() => {
    if (!toolSectionData || toolSectionData.length === 0) return;

    const buttons: TabButton[] = [];
    const contentMap: Record<string, SectionContent[]> = {};

    let currentTabKey = '';

    toolSectionData.forEach((item, index) => {
      if (item.type === 'text' && item.data) {
        // Create a new tab
        currentTabKey = `tab-${index}`;
        buttons.push({
          target: currentTabKey,
          name: item.data,
        });
        contentMap[currentTabKey] = [];
      } else if (item.type === 'media' && item.name && item.media_ref && currentTabKey) {
        // Add media to the latest tab
        contentMap[currentTabKey].push({
          src: item.media_ref,
          label: item.name,
        });
      }
    });

    setTabButtons(buttons);
    setSections(contentMap);
    setVisibleSet(buttons[0]?.target || '');
  }, [toolSectionData]);



  return (
    <div className="w-full">
      {/* Tab Buttons */}
      <div className="bg-[#343434] w-full h-24 sm:h-12 mt-10">
        <div className="flex justify-around mx-auto w-[80%] h-12 flex-col sm:flex-row">
          {tabButtons.map((btn) => (
            <button
              key={btn.target}
              className={`my-auto py-1 px-3 border border-transparent rounded-3xl cursor-pointer text-white font-bold text-sm sm:text-base transition
                ${visibleSet === btn.target ? 'bg-brandlight' : 'hover:bg-brandlight'}
              `}
              onClick={() => setVisibleSet(btn.target)}
            >
              {btn.name}
            </button>
          ))}
        </div>
      </div>

      {/* Content Display */}
      <div className="flex flex-wrap w-[86%] mx-auto mt-16 justify-center">
        {sections[visibleSet]?.map((item, idx) => (
          <div
            key={idx}
            className="w-1/2 sm:w-1/2 md:w-1/4 lg:w-[18%] px-3 my-5 text-center"
          >
            <Image
              src={item.src}
              alt={item.label}
              width={0}
              height={0}
              sizes="100vw"
              className="mx-auto h-auto w-16 sm:w-20 md:w-24 lg:w-28"
            />

            <p className="text-base sm:text-lg font-semibold mt-2">{item.label}</p>
          </div>
        ))}
      </div>


    </div>
  );
};

export default ToolSection;
