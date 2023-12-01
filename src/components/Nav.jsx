import { hamburger } from '../assets/icons';
import { headerLogo } from '../assets/images';
import { navLinks } from '../constants';

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a
          href="/"
          className="logo-link group"
        >
          <img
            src={headerLogo}
            alt="logo"
            width={130}
            height={29}
            className="m-0 w-[129px] h-[29px] logo transition-transform transform group-hover:scale-105"
          />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li
              key={item.label}
              className="text-sm"
            >
              <a
                className="font-montserrat leading-normal text-lg text-slate-gray hover-underline-expand"
                href={item.href}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24">
          <a
            href="/"
            className="transition-colors hover:text-[#FF4040]"
          >
            Sign in
          </a>
          <span>/</span>
          <a
            href="/"
            className="transition-colors hover:text-[#FF4040]"
          >
            Explore now
          </a>
        </div>
        <div className="hidden max-lg:block">
          <img
            src={hamburger}
            alt="hamburger icon"
            width={25}
            height={25}
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
