import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Router from "next/router";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { AiOutlineLogout } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";

import Logo from "../utils/tiktik-logo.png";
import { createOrGetUser } from "../utils";
import useAuthStore from "../store/authStore";

import {IUser} from "../types"

const Navbar = () => {
  const { userProfile: IUser, addUser, removeUser } = useAuthStore();
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (searchValue) {
      Router.push(`/search/${searchValue}`);
    }
  };
  return (
    <>
      <div className="flex items-center justify-between w-full px-4 py-2 border border-b-2 border-gray-200">
        <Link href="/">
          <div className="w-[100px] md:w-[130px] ">
            <Image
              className="cursor-pointer"
              src={Logo}
              alt="TikTik"
              layout="responsive"
            />
          </div>
        </Link>
        <div className="relative hidden md:block">
          <form
            onSubmit={handleSearch}
            className="absolute bg-white md:static top-10 left-20"
            action=""
          >
            <input
              className="p-3 font-medium border-2 border-gray-100 forcus:border-2 md:text-md focus:outline-none bg-primary focus:border-gray-300 w-[300px] md:w-[350px] rounded-full md:top-0"
              type="text"
              placeholder="Search accounts and videos"
              value={searchValue}
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
            />
            <button className="absolute pl-4 text-2xl text-gray-400 border-l-2 border-gray-300 md:right-5 right-6 top-4">
              <BiSearch onClick={handleSearch} />
            </button>
          </form>
        </div>
        <div>
          {userProfile ? (
            <div className="flex gap-5 md:gap-10">
              <Link href="/upload">
                <button className="flex items-center px-2 font-semibold border-2 md:px-4 text-md">
                  <IoMdAdd className="text-xl" /> {` `}
                  <span className="hidden md:block">Upload</span>
                </button>
              </Link>
              {userProfile.image && (
                <Link href="/">
                  <>
                    <Image
                      width={40}
                      height={40}
                      className="rounded-full cursor-pointer"
                      src={userProfile.image}
                      alt="profile phoot"
                    />
                  </>
                </Link>
              )}
              <button
                type="button"
                className="px-2"
                onClick={() => {
                  googleLogout();
                  removeUser();
                }}
              >
                <AiOutlineLogout color="red" fontSize={21} />
              </button>
            </div>
          ) : (
            <GoogleLogin
              onSuccess={(response) => createOrGetUser(response, addUser)}
              onError={() => console.log("error")}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
