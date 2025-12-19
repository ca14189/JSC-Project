




import Image from 'next/image';
import React from 'react';

interface CurriculumModulesComponent {
  type: 'text' | 'media';
  data?: string;
  name?: string;
  media_ref?: string;
}

interface CurriculumModulesProps {
  curriculumModulesData: CurriculumModulesComponent[];
}

// 🔹 Transform raw API data into structured heading + modules
function transformData(raw: CurriculumModulesComponent[]) {
  // ✅ raw hamesha array hai, index optional ho sakta hai
  const headingOne = raw[0]?.data ?? '';
  const headingTwo = raw[1]?.data ?? '';

  const modules: {
    title: string;
    description: string;
    images: string[];
  }[] = [];

  let currentModule:
    | {
        title: string;
        description: string;
        images: string[];
      }
    | null = null;

  // ✅ raw guaranteed array → slice safe
  raw.slice(2).forEach((item) => {
    // Text item with "title || description"
    if (item.type === 'text' && item.data?.includes('||')) {
      if (currentModule) {
        modules.push(currentModule);
      }

      const [title, description] = item.data.split('||');

      currentModule = {
        title: title?.trim() ?? '',
        description: description?.trim() ?? '',
        images: [],
      };
    }

    // Media item → push image to current module
    else if (item.type === 'media' && currentModule) {
      if (item.media_ref) {
        currentModule.images.push(item.media_ref.trim());
      }
    }
  });

  if (currentModule) {
    modules.push(currentModule);
  }

  return { headingOne, headingTwo, modules };
}

const CurriculumModules: React.FC<CurriculumModulesProps> = ({
  curriculumModulesData,
}) => {
  // ✅ curriculumModulesData already array → safe
  const { headingOne, headingTwo, modules } =
    transformData(curriculumModulesData);

  return (
    <section>
      {/* Title */}
      <div className="md:w-[750px] mx-auto mt-20 md:mt-36 text-center">
        <p className="text-2xl md:text-4xl font-bold">
          <span className="text-amber-500 text-3xl md:text-5xl font-extrabold">
            {headingOne}
          </span>{' '}
          {headingTwo}
        </p>
        <div className="border-b-[5px] border-amber-500 md:w-[500px] mx-auto mt-2" />
      </div>

      {/* Modules */}
      <div className="bg-[url('/yellow_spiral_1.jpg')] bg-no-repeat mt-12 md:mt-20">
        <div className="flex flex-wrap justify-center">
          {modules.map((mod, idx) => (
            <div
              key={idx}
              className="w-full max-w-[500px] mx-4 mb-10 rounded-xl bg-[#343434] shadow-lg"
            >
              {/* Module Title */}
              <div className="h-14 bg-amber-500 text-center pt-2 rounded-t-xl">
                <p className="text-2xl md:text-3xl font-extrabold">
                  {mod.title}
                </p>
              </div>

              {/* Module Description */}
              <p className="text-white text-center textBody px-4">
                {mod.description}
              </p>

              {/* Scrolling Images */}
              <div className="overflow-hidden relative border border-[#494949] rounded-b-xl pb-1">
                <div className="flex w-[210%] h-[48px] animate-scroll bg-[#494949]">
                  {[...Array(2)].map((_, repeatIndex) => (
                    <div key={repeatIndex} className="flex w-1/2">
                      {mod.images.map((src, imgIndex) => (
                        <div
                          key={`${imgIndex}-${repeatIndex}`}
                          className="mx-2 flex-shrink-0"
                        >
                          <Image
                            src={src}
                            alt={`${mod.title}-img-${imgIndex}`}
                            width={48}
                            height={48}
                            className="object-contain w-[48px] h-[48px]"
                          />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurriculumModules;
