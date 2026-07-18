import { PersonPencil } from "@gravity-ui/icons";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <nav className="max-w-7xl mx-auto h-14 px-2 flex items-center justify-between">
        {/* Left */}
        <ul className="flex items-center gap-7 text-[13px] font-medium text-gray-700">
          <li>
            <Link
              href="/"
              className="text-[#2AB7E8] border-b-2 border-[#2AB7E8] pb-4.5"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/destinations"
              className="hover:text-[#2AB7E8] transition"
            >
              Destinations
            </Link>
          </li>

          <li>
            <Link
              href="/my-bookings"
              className="hover:text-[#2AB7E8] transition"
            >
              My Bookings
            </Link>
          </li>

          <li>
            <Link href="/add-destination" className="hover:text-[#2AB7E8] transition">
              Add Destination
            </Link>
          </li>
        </ul>

        {/* Center Logo */}
        <Link href="/">
          <Image
            src="/assets/Wanderlast.png"
            alt="Wanderlast"
            width={155}
            height={38}
            priority
          />
        </Link>

        {/* Right */}
        <ul className="flex items-center gap-6 text-[13px] font-medium text-gray-700">
          <li>
            <Link
              href="/profile"
              className="flex items-center gap-1 hover:text-[#2AB7E8]"
            >
              <PersonPencil className="w-4 h-4" />
              Profile
            </Link>
          </li>

          <li>
            <Link href="/login" className="hover:text-[#2AB7E8]">
              Login
            </Link>
          </li>

          <li>
            <Link href="/signup" className="hover:text-[#2AB7E8]">
              Sign Up
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
