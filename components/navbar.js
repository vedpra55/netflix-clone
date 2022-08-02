import Image from "next/image";
import Link from "next/dist/client/link";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Navbar({ email, handleLogOut }) {
  const [showDropDown, setShowDropDown] = useState(false);

  const router = useRouter();

  return (
    <div className=" absolute top-0  w-full">
      <div className="container mx-auto lg:px-10 w-full flex justify-between items-center h-24 fixed z-50">
        <div className="flex lg:gap-x-32 items-center">
          <Link href="/" passHref>
            <div className="relative w-32 h-32 lg:w-44 lg:h-32">
              <Image
                className="cursor-pointer"
                src={"/static/logo.svg"}
                objectFit="contain"
                layout="fill"
              />
            </div>
          </Link>
          <div className="hidden lg:flex gap-x-10">
            <Link href={"/"}>
              <p className="text-white cursor-pointer">Home</p>
            </Link>
            <Link href={"browse/mylist"}>
              <p className="text-white cursor-pointer">My List</p>
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-y-5 px-2 lg:px-0">
          <div className="flex gap-x-2">
            <p className="text-white text-xs lg:text-xl">{email}</p>
            <Image
              onClick={() => setShowDropDown(!showDropDown)}
              className="bg-white cursor-pointer"
              src="/static/expand.svg"
              width="24px"
              height="24px"
            />
          </div>
          {showDropDown && (
            <div>
              <div
                onClick={
                  email === "user" ? () => router.push("/login") : handleLogOut
                }
                className="bg-white cursor-pointer rounded-md px-3 py-1"
              >
                <Link href={"login"}>
                  <p>{email === "user" ? "SignIn" : "Sign out"}</p>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
