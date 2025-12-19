import type { Metadata } from 'next';
// import { Montserrat } from 'next/font/google';
import Script from 'next/script';
import '@/styles/colors.css';
import '@/styles/globals.css';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Footer from '@/components/home/Footer';
import Navbar from '@/components/home/Navbar';


interface SectionItemComponent {
  type: 'text' | 'media';
  data: string;
  name: string;
  title: string;

}

interface SectionItem {
  name: string;
  contents: SectionItemComponent[];
  component: string;
}
// async function getLayoutData() {
//   const domain = 'Jschamps.com';
//   const page = 'layout';

//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_BASE_URL}/static?domain=${domain}&page=${encodeURIComponent(page)}`,
//     { next: { revalidate: 60 } }
//   );

//   if (!res.ok) throw new Error('Failed to fetch layout data');

//   const data = await res.json();
//   const all: SectionItem[] = data?.sections ?? [];

//   return {
//     navbarDetailsData: all.find((s) => s.name === 'Navbar')?.contents || [],
//     contactSubitems: all.find((s) => s.name === 'Contact-subitems')?.contents || [],
//     footerDetails: all.slice(0, 2) || [],
//   };
// }


async function getLayoutData() {
  const domain = 'jschamps.com';
  const group = 'layout';

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/cms-static?domain=${domain}&group=${encodeURIComponent(group)}`,
    { next: { revalidate: 60 } }
  );

  if (!res.ok) throw new Error('Failed to fetch layout data');

  const data: SectionItem[] = await res.json();
  const nav = data.find((s) => s.component === 'Navbar');
  const contactSub = data.find((s) => s.component === 'Contact-subitems');
  const footer = data.find((s) => s.component === 'Footer');
  const footerBanner = data.find((s) => s.component === 'Footer-Banner');
  //console.log("navdata", nav);

  return {
    navbarDetailsData: nav?.contents || [],
    contactSubitems: contactSub?.contents || [],
    footerDetails: footer?.contents || [],
    footerBannerDetails: footerBanner?.contents || [],
  };
}

export async function generateMetadata(): Promise<Metadata> {
  const domain = 'jschamps.com';
  const group = 'Site Metadata';

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/cms-static?domain=${domain}&group=${encodeURIComponent(group)}`,
    { cache: 'no-store' }
  );

  if (!res.ok) throw new Error('Failed to fetch layout metadata');

  const data = await res.json();
  // const meta = data[0]?.contents || [];
  //console.log("meta ", meta[0]?.data);

  return {
    // title: meta[0]?.data ?? 'Jschamps',
    // description: meta[1]?.data ?? 'Fullstack Champs Platform',
    // keywords: meta[2]?.data?.split(',') ?? ['jschamps', 'fullstack'],
    // icons: {
    //   icon: '/images/fabicon.png',
    //   shortcut: '/images/fabicon.png',
    //   apple: '/images/fabicon.png',
    // },
    // openGraph: {
    //   title: meta[0]?.data,
    //   description: meta[1]?.data,
    //   url: meta[3]?.data ?? 'https://jschamps.com',
    //   images: [
    //     {
    //       url: meta[4]?.media_ref ?? 'https://jschamps.com/default.jpg',
    //       width: 1200,
    //       height: 630,
    //       alt: meta[0]?.data ?? 'Jschamps',
    //     },
    //   ],
    // },
    // twitter: {
    //   card: 'summary_large_image',
    //   title: meta[0]?.data,
    //   description: meta[1]?.data,
    //   images: [meta[4]?.media_ref],
    // },
    // metadataBase: new URL(meta[3]?.data ?? 'https://jschamps.com'),
  };
}


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sections = await getLayoutData();

  return (
    <html lang="en" className={` scroll-smooth`}>
      <body className="font-primary">
        {/* Google Analytics Scripts */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-9YJ1MW92QY"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9YJ1MW92QY', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
        <Navbar
          navbarData={sections.navbarDetailsData}
          contactSubitems={sections.contactSubitems}
        />
        {children}
        <ToastContainer />
        <Footer footerDetails={sections.footerDetails} footerBannerDetails={sections.footerBannerDetails} />
      </body>
    </html>
  );
}
