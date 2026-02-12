'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";
import * as gtag from '@/lib/gtag';
import { FaBars, FaTimes } from 'react-icons/fa';


interface BaseNavbarItem {
  data: string;
  name: string;
  type?: string;
  title: string;
  media_ref?: string;
}
interface DropdownNavbarItem extends BaseNavbarItem {
  subItems: { name: string; path: string; Title: string }[];
}

interface ButtonNavbarItem extends BaseNavbarItem {
  isButton: true;
}

type NavbarItem = BaseNavbarItem | DropdownNavbarItem | ButtonNavbarItem;

interface NavbarProps {
  navbarData: NavbarItem[];
  contactSubitems: { type: string; name: string; data: string; title: string }[];
}

const Navbar = ({ navbarData, contactSubitems }: NavbarProps) => {


  console.log(contactSubitems,"contactSubitems")
  console.log(navbarData,"navbarData")
  // const navLogo = (navbarData[0] as BaseNavbarItem)?.media_ref;
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSignIn, setIsSignIn] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsSignIn(false);
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Dynamically add subItems to "Contact Us"
const safeNavbarData: NavbarItem[] = navbarData ?? [];

const navLogo = safeNavbarData[0]?.media_ref;

const navMenuItems: NavbarItem[] = safeNavbarData.slice(1).map((item) => {
  if (item.title === 'Contact Us') {
    return {
      ...item,
      subItems: contactSubitems.map((sub) => ({
        name: sub.title,
        Title: sub.title,
        path: sub.data,
      })),
    } as DropdownNavbarItem;
  }
  return item;
});

  const menuItems: NavbarItem[] = [
    ...navMenuItems,
    { data: '/our-team', name: 'Our Team', title: 'Our Team', type: "link" },
    {
      data: '/fullstack-developer-job',
      name: 'Search for Job',
      title: 'Search for Job',
      type: 'link',
    },
    { data: '#', name: 'Login', title: 'Login', isButton: true },
  ];

  const increaseNavHeight = menuOpen ? 'h-[490px]' : '';

  return (
    <>
      <div className={`${increaseNavHeight}`}>
        <div className="bg-brandlight h-[69px] relative z-50">
          <div className="container mx-auto h-full flex items-center px-4">
            {/* Logo */}
            {pathname !== '/' ? (
              <Link href="/" className="block">
                {navLogo && (
                  <Image
                    src={navLogo}
                    alt="Logo"
                    width={200}
                    height={50}
                    className="h-13 w-48 xl:w-48 cursor-pointer mr-2"
                  />)}
              </Link>
            ) : (
              <div className='mr-4'>
                {navLogo && (
                  <Image
                    src={navLogo}
                    alt="Logo"
                    width={200}
                    height={50}
                    className="h-13 w-48 xl:w-48 cursor-pointer"
                  />
                )}
              </div>
            )}

            {/* Hamburger Icon (Mobile) */}
            <div className="ml-auto lg:hidden">
              <button
                onClick={toggleMenu}
                className="text-xl font-extrabold hover:shadow-xl"
              >
                {menuOpen ? <FaTimes className="text-black" /> : <FaBars className="text-black" />}
              </button>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex ml-auto space-x-2 text-black font-medium">
              {menuItems.map((item) =>
                'isButton' in item ? (
                  <NavItem
                    key={item.data}
                    text={item.title}
                    isButton
                    isActive={isSignIn}
                    onClick={() => router.push("/fullstack-developer-login")}
                  />
                ) : "subItems" in item ? (
                  <DropdownItem
                    key={item.title}
                    item={item}
                    pathname={pathname}
                    isSignIn={isSignIn}
                  />
                ) : (
                  <NavItem
                    key={item.data}
                    href={item.data}
                    text={item.title}
                    isActive={pathname === item.data && !isSignIn}
                  />
                )
              )}
            </div>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="h-90 w-full bg-brandStone flex flex-col text-white font-medium lg:hidden z-50">
              <div className="container mx-auto flex flex-col py-10 ">
                {menuItems.map((item) =>
                  'isButton' in item ? (
                    <div
                      key={item.data}
                      onClick={() => setTimeout(() => setMenuOpen(false), 100)}
                    >
                      <NavItem
                        text={item.title}
                        isButton
                        mobile
                        isActive={isSignIn}
                        onClick={() => router.push("/fullstack-developer-login")}
                      />
                    </div>
                  ) : "subItems" in item ? (
                    <div
                      key={item.title}
                      onClick={() => setTimeout(() => setMenuOpen(false), 100)}
                    >
                      <DropdownItem
                        item={item}
                        pathname={pathname}
                        mobile
                        isSignIn={isSignIn}
                      />
                    </div>
                  ) : (
                    <div
                      key={item.data}
                      onClick={() => setTimeout(() => setMenuOpen(false), 100)}
                    >
                      <NavItem
                        href={item.data}
                        text={item.title}
                        mobile
                        isActive={pathname === item.data && !isSignIn}
                      />
                    </div>
                  )
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

// ----------------------
// ✅ Normal or Button Nav Item
const NavItem = ({
  href = '#',
  text,
  mobile = false,
  extraClass = '',
  isButton = false,
  onClick,
  isActive = false,
}: {
  href?: string;
  text: string;
  mobile?: boolean;
  extraClass?: string;
  isButton?: boolean;
  onClick?: () => void;
  isActive?: boolean;
}) => {
  const baseClasses =
    'cursor-pointer px-4 py-2 rounded-lg hover:bg-brandmenuhover hover:text-brandlight transition-all duration-200';
  const activeClasses = isActive ? 'bg-brandmenuhover text-brandlight' : '';
  const mobileClasses = mobile ? 'border-b border-stone-600 flex mt-2 w-full' : '';

  const handleClick = () => {
    gtag.event({
      action: 'navbar_click',
      category: 'navigation',
      label: text,
    });

    if (onClick) onClick();
  };

  if (isButton) {
    return (
      <button
        onClick={handleClick}
        className={`${baseClasses} ${activeClasses} ${extraClass} ${mobileClasses}`}
      >
        {text}
      </button>
    );
  }

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={`${baseClasses} ${activeClasses} ${extraClass} ${mobileClasses}`}
    >
      {text}
    </Link>
  );
};

// ✅ Dropdown Item with GA Event
const DropdownItem = ({
  item,
  pathname,
  mobile = false,
  isSignIn = false,
}: {
  item: DropdownNavbarItem;
  pathname: string;
  mobile?: boolean;
  isSignIn?: boolean;
}) => {
  const isParentActive =
    item.subItems?.some((sub) => pathname.startsWith(sub.path)) && !isSignIn;

  return (
    <div className={`relative group ${mobile ? 'py-2' : 'py-0'}`}>
      {/* Dropdown Label (track clicks) */}
      <button
        onClick={() =>
          gtag.event({
            action: 'navbar_dropdown_open',
            category: 'navigation',
            label: item.title,
          })
        }
        className={`cursor-pointer px-4 py-2 inline-block rounded-lg hover:bg-brandmenuhover hover:text-brandlight transition-all duration-200 ${isParentActive ? 'bg-brandmenuhover text-brandlight' : ''
          }`}
      >
        {item.title}
      </button>

      {/* Dropdown List */}
      <div
        className={`${mobile
          ? 'pl-4 flex flex-col space-y-1'
          : 'absolute left-0 top-full bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 group-hover:flex pointer-events-none group-hover:pointer-events-auto transition-all duration-200 flex-col text-black min-w-[200px] z-10'
          }`}
      >
        {item.subItems?.map((sub) => {
          const isSubActive = pathname.startsWith(sub.path) && !isSignIn;
          return (
            <Link
              key={sub.path}
              href={sub.path}
              onClick={() =>
                gtag.event({
                  action: 'navbar_subitem_click',
                  category: 'navigation',
                  label: `${item.title} → ${sub.Title}`,
                })
              }
              className={`px-4 py-2 hover:bg-stone-100 hover:text-brandlight ${isSubActive ? 'bg-brandmenuhover text-brandlight' : ''
                }`}
            >
              {sub.Title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
