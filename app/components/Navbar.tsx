import Link from "next/link";
import {
    FaLaptop, 
    FaTwitter,
    FaGithub,
    FaLinkedin,
} from "react-icons/fa";

function Navbar() {
  return (
    <nav className="sticky top-0 z-10 p-4 bg-slate-600 drop-shadow-xl">
      <div className="flex flex-col justify-between mx-auto prose prose-xl sm:flex-row">
        <h1 className="grid mb-2 text-3xl font-bold text-white place-content-center md:mb-0">
          <Link
            href={"/"}
            className="no-underline text-white/90 hover:text-white"
          >
            Daniel Kraus
          </Link>
        </h1>
        <div className="flex flex-row justify-center gap-4 text-4xl text-white align-middle sm:justify-evenly lg:text-5xl">
            <Link className="text-white/90 hover:text-white" href={'https://dekportfolio.netlify.app/'} target="no_blank">
                <FaLaptop />
            </Link>
            <Link className="text-white/90 hover:text-white" href={'https://github.com/danielkraus14'}target="no_blank">
                <FaGithub />
            </Link>
            <Link className="text-white/90 hover:text-white" href={'https://www.linkedin.com/in/daniel-kraus-245ab1112/'} target="no_blank">
                <FaLinkedin />
            </Link>
            <Link className="text-white/90 hover:text-white" href={'https://www.twitter.com'} target="no_blank">
                <FaTwitter />
            </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
