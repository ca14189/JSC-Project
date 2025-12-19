'use client';

import { log } from 'console';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface ContentItem {
  data: string; // image src
  name: string; // label
  media_ref?: string;
}

interface Section {
  name: string;
  contents: ContentItem[];
  data?: string; // tab name
}

interface TabButton {
  target: string;
  name: string;
}

interface MappedContentItem {
  src: string;
  label: string;
}

interface ToolSectionProps {
  secondToolSectionData: Section[];
}

const ToolSection: React.FC<ToolSectionProps> = ({ secondToolSectionData }) => {
  //  console.log("secondToolSectionData", JSON.stringify(secondToolSectionData, null, 2));
  const [tabButtons, setTabButtons] = useState<TabButton[]>([]);
  const [sections, setSections] = useState<Record<string, MappedContentItem[]>>({});
  const [visibleSet, setVisibleSet] = useState<string>('');

  useEffect(() => {
    if (!secondToolSectionData || secondToolSectionData.length === 0) return;

    const buttons: TabButton[] = [];
    const contentMap: Record<string, MappedContentItem[]> = {};

    secondToolSectionData.forEach((section, sectionIndex) => {
      let currentTabKey = '';
      section.contents.forEach((item, contentIndex) => {
        if (item.data) {
          // Start a new tab
          currentTabKey = `tab-${sectionIndex}-${contentIndex}`;
          buttons.push({
            target: currentTabKey,
            name: item.data,
          });
          contentMap[currentTabKey] = [];
        } else if (item.name && item.media_ref && currentTabKey) {
          // Add to the current tab's items
          contentMap[currentTabKey].push({
            src: item.media_ref,
            label: item.name,
          });
        }
      });
    });

    setTabButtons(buttons);
    setSections(contentMap);
    setVisibleSet(buttons[0]?.target || '');
  }, [secondToolSectionData]);


  return (
    <div className="w-full">
      {/* Tab Buttons */}
      <div className="bg-grayDark w-full h-24 sm:h-12 mt-10">
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
            className="w-1/2 sm:w-1/2 md:w-[22%] lg:w-[18%] px-3 my-5 text-center"
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
