import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { navigation } from "../contants/navigation";

const Header = () => {
  const location = useLocation();
  const removeSpace = location?.search?.slice(3)?.split("%20")?.join(" ");
  const [searchInput, setSearchInput] = useState(removeSpace);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchInput) {
      navigate(`/search?q=${searchInput}`);
    }
  }, [searchInput]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <header className="fixed top-0 w-full h-16 bg-black bg-opacity-50 z-40">
      <div className="container mx-auto px-3 flex items-center h-full">
        <Link to={"/"}>
          <div className="flex gap-2 items-center text-2xl font-bold">
            <div>Movie</div>
            <div className="bg-yellow-400 px-3 rounded text-black">Info</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-2 ml-10 font-semibold">
          {navigation.map((nav, index) => {
            return (
              <div>
                <NavLink
                  key={nav.label + "header" + index}
                  to={nav.href}
                  className={({ isActive }) =>
                    `px-2 hover:text-yellow-400 ${
                      isActive && "text-yellow-400"
                    }`
                  }
                >
                  {nav.label}
                </NavLink>
              </div>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-5">
          <form className="flex items-center gap-2" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search by name..."
              className="bg-transparent px-4 py-1 outline-none border-none hidden lg:block"
              onChange={(e) => setSearchInput(e.target.value)}
              value={searchInput}
            />
            <button className="text-2xl text-yellow-400">
              <IoSearchOutline />
            </button>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;
