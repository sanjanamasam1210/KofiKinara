export default function Navbar() {
  return (
    <header className="m-4 border-3 rounded-sm border-black md:h-[10vh] h-[8vh] flex items-center">
      <div className="w-full flex items-center justify-between h-full px-2 sm:px-[1vw]">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/logo.svg"
            alt="Logo"
            className=""
          />
        </div>
        {/* Name */}
        <span className="font-manrope font-medium text-[1.8rem] md:text-[1.5rem] text-center">
          Kofi Kinara
        </span>
      </div>
    </header>
  );
}
