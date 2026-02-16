"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import * as gtag from "@/lib/gtag";
import { FaBars, FaTimes } from "react-icons/fa";

/* ================= TYPES ================= */

interface BaseNavbarItem {
  data: string;
  name: string;
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

/* ================= NAVBAR ================= */

const Navbar = ({ navbarData, contactSubitems }: NavbarProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const [menuOpen, setMenuOpen] = useState(false);

  /* ✅ Close menu automatically when route changes */
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  /* ✅ Safe Navbar Data */
  const safeNavbarData: NavbarItem[] = navbarData ?? [];
  const navLogo = safeNavbarData[0]?.media_ref;

  /* ✅ Add Contact Dropdown Dynamically */
  const navMenuItems: NavbarItem[] = safeNavbarData.slice(1).map((item) => {
    if (item.title === "Contact Us") {
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

  /* ✅ Final Menu Items */
  const menuItems: NavbarItem[] = [
    ...navMenuItems,
    { data: "/our-team", name: "Our Team", title: "Our Team" },
    {
      data: "/fullstack-developer-job",
      name: "Search for Job",
      title: "Search for Job",
    },
    {
      data: "/fullstack-developer-login",
      name: "Login",
      title: "Login",
      isButton: true,
    },
  ];

  return (
    <header className="sticky top-0 w-full z-50">
      {/* ✅ Overlay when mobile menu open */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* ✅ Navbar */}
      <nav className="bg-brandlight h-[69px] relative z-50 shadow-md">
        <div className="container mx-auto flex items-center justify-between px-4 h-full">
          {/* Logo */}
          <Link href="/">
            {navLogo && (
              <Image
                src={navLogo}
                alt="Logo"
                width={200}
                height={60}
                className="h-[55px] w-auto object-contain"
              />
            )}
          </Link>

          {/* Hamburger Icon */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-2xl text-black"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-3 font-medium text-black">
            {menuItems.map((item) =>
              "isButton" in item ? (
                <NavItem
                  key={item.data}
                  text={item.title}
                  isButton
                  onClick={() => router.push(item.data)}
                />
              ) : "subItems" in item ? (
                <DropdownItem
                  key={item.title}
                  item={item}
                  pathname={pathname}
                />
              ) : (
                <NavItem
                  key={item.data}
                  href={item.data}
                  text={item.title}
                  isActive={pathname === item.data}
                />
              )
            )}
          </div>
        </div>

        {/* ✅ Mobile Menu Dropdown */}
        {menuOpen && (
          <div className="absolute top-[69px] left-0 w-full bg-brandStone text-white flex flex-col p-6 space-y-4 lg:hidden z-50">
            {menuItems.map((item) =>
              "isButton" in item ? (
                <NavItem
                  key={item.data}
                  text={item.title}
                  isButton
                  mobile
                  onClick={() => router.push(item.data)}
                />
              ) : "subItems" in item ? (
                <MobileDropdown key={item.title} item={item} />
              ) : (
                <NavItem
                  key={item.data}
                  href={item.data}
                  text={item.title}
                  mobile
                  isActive={pathname === item.data}
                />
              )
            )}
          </div>
        )}
      </nav>
    </header>
  );
};

/* ================= NAV ITEM ================= */

const NavItem = ({
  href = "#",
  text,
  mobile = false,
  isButton = false,
  onClick,
  isActive = false,
}: {
  href?: string;
  text: string;
  mobile?: boolean;
  isButton?: boolean;
  onClick?: () => void;
  isActive?: boolean;
}) => {
  const baseClasses =
    "px-4 py-2 rounded-lg transition-all duration-200 hover:bg-brandmenuhover hover:text-brandlight";

  const activeClasses = isActive
    ? "bg-brandmenuhover text-brandlight"
    : "";

  const mobileClasses = mobile
    ? "w-full text-left border-b border-white/20 pb-2"
    : "";

  const handleClick = () => {
    gtag.event({
      action: "navbar_click",
      category: "navigation",
      label: text,
    });

    if (onClick) onClick();
  };

  if (isButton) {
    return (
      <button
        onClick={handleClick}
        className={`${baseClasses} ${activeClasses} ${mobileClasses}`}
      >
        {text}
      </button>
    );
  }

  return (
    <Link
      href={href}
      className={`${baseClasses} ${activeClasses} ${mobileClasses}`}
    >
      {text}
    </Link>
  );
};

/* ================= DESKTOP DROPDOWN ================= */

const DropdownItem = ({
  item,
  pathname,
}: {
  item: DropdownNavbarItem;
  pathname: string;
}) => {
  const isParentActive = item.subItems.some((sub) =>
    pathname.startsWith(sub.path)
  );

  return (
    <div className="relative group">
      {/* Parent */}
      <button
        className={`px-4 py-2 rounded-lg hover:bg-brandmenuhover hover:text-brandlight transition-all ${
          isParentActive ? "bg-brandmenuhover text-brandlight" : ""
        }`}
      >
        {item.title}
      </button>

      {/* Dropdown */}
      <div className="absolute left-0 top-full mt-1 hidden group-hover:flex flex-col bg-white text-black shadow-lg rounded-lg min-w-[200px] overflow-hidden z-50">
        {item.subItems.map((sub) => (
          <Link
            key={sub.path}
            href={sub.path}
            className="px-4 py-2 hover:bg-stone-100"
          >
            {sub.Title}
          </Link>
        ))}
      </div>
    </div>
  );
};

/* ================= MOBILE DROPDOWN ================= */

const MobileDropdown = ({ item }: { item: DropdownNavbarItem }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-4 py-2 rounded-lg hover:bg-brandmenuhover"
      >
        {item.title}
      </button>

      {open && (
        <div className="ml-6 mt-2 flex flex-col space-y-2">
          {item.subItems.map((sub) => (
            <Link
              key={sub.path}
              href={sub.path}
              className="px-3 py-1 rounded-md hover:bg-white/20"
            >
              {sub.Title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
