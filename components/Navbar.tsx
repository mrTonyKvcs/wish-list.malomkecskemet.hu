"use client";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const linkOfMalomLogo = "/malom_xmas.png";
  const linkOfMalomSite = "https://malomkecskemet.hu/hu";

  return (
    <>
      <div className="bg-white my-5">
        <div className="container mx-auto flex items-center justify-between px-3 md:px-0">
          <Image
            src={linkOfMalomLogo}
            width={172}
            height={50}
            alt="Malom Kozpont logo"
          />
          <Link
            className="text-gray-400 text-lg font-medium uppercase hidden md:block"
            href={linkOfMalomSite}
          >
            malomkecskemet.hu
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
