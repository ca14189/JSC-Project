import SignIn from "../../components/auth/SignIn";
import AuthBanner from '@/components/authBanner/authBanner'
export const dynamic = 'force-static'
interface SectionItemComponent {
  type: 'text' | 'media';
  name: string;
  data: string;
}

interface SectionItem {
  name: string;
  contents: SectionItemComponent[];
  component: string;
}

async function getData(): Promise<SectionItem[]> {
  const domain = 'jschamps.com';
  const group = 'registerBanners';

 const url = `${process.env.NEXT_PUBLIC_BASE_URL}/cms-static?domain=${domain}&group=${group}`;

  const res = await fetch(url, {
    cache: "force-cache", // fully static fetch
    
  });
  if (!res.ok) throw new Error('Failed to fetch group data');
   const data: SectionItem[] = await res.json();
  return data;
}

const  JschampsLoginPage = async() => {
  const sections = await getData();

  const banner = sections.find((s) => s.component === 'signinBanner');

  return (
    <div className='flex flex-col md:flex-row w-[100%]'>
      <div className=' bg-zinc-500 lg:w-1/2 hidden md:block'> 
        {banner ? (
          <AuthBanner header={banner.contents} />
        ) : (
          <div className="flex items-center justify-center h-full text-white">
            No banner available
          </div>
        )}
      </div>
        <div className='lg:w-1/2'>
          <SignIn  />
        </div> 
    </div>
  );
}
export default JschampsLoginPage;