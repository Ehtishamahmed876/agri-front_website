import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-navbar-image bg-cover bg-center    bg-no-repeat  h-48">
      <div className="flex items-center gap-10 justify-start p-4 ml-28">
        <Link href="/">
          <div className="logo">
            <img src="images/logo1.png" alt="Logo" className='rounded-full w-40 h-40' />
          </div>
        </Link>
        <div className="flex ">
            <ul className="navbar-nav flex gap-5 text-[#4e460a] font-bold text-2xl mr-auto">
              <li className="">
                <Link href="/">
                  <div className="p-5 bg-[#e9ece9] rounded-lg hover:bg-green-500 hover:text-white  ">Home</div>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about">
                  <div className="p-5 bg-[#e9ece9] rounded-lg hover:bg-green-500 hover:text-white ">About</div>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contact">
                  <div className="p-5 bg-[#e9ece9] rounded-lg hover:bg-green-500 hover:text-white ">Contact Us</div>
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link href="/login">
                  <div className="nav-link">Login</div>
                </Link>
              </li> */}
              <li className="nav-item">
                <Link href="/results">
                  <div className="p-5 bg-[#e9ece9] rounded-lg hover:bg-green-500 hover:text-white ">Results</div>
                </Link>
              </li>
            </ul>
            {/* <div className="search_icon">
              <div href="#">
                <img src="images/search-icon.png" alt="Search" />
              </div>
            </div> */}
          </div>
        </div>
      
    </nav>
  );
};

export default Navbar;
