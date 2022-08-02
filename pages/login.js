import Image from "next/image";
import { useState } from "react";
import { handleLogin } from "../lib/magic-client";

import { useRouter } from "next/router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [showValidationError, setShowValidationError] = useState(false);
  const [loadingSignIn, setLoadingSignIn] = useState(false);

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  const router = useRouter();

  async function handleLoginBtn() {
    await handleLogin(setShowValidationError, setLoadingSignIn, email, router);
  }

  return (
    <div>
      <div className="relative w-full h-[35rem]">
        <Image
          priority
          src="/static/netflixBg.webp"
          objectFit="cover"
          layout="fill"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="flex items-center justify-center">
          <div className="absolute top-32">
            <div className="flex flex-col gap-y-6  bg-black/50 px-8 py-12 rounded-md">
              <p className="text-2xl text-white">Log In</p>
              <div className="flex flex-col gap-y-1">
                <input
                  name="email"
                  value={email}
                  onChange={handleEmailChange}
                  className="w-56 h-8 p-5 focus:outline-none"
                  placeholder="Email Address"
                  type="email"
                />
                {showValidationError && (
                  <p className="text-xs text-white">
                    Enter valid email address
                  </p>
                )}
              </div>
              <button
                onClick={handleLoginBtn}
                className="bg-red-600 rounded-md px-10 py-2 text-white hover:bg-red-400"
              >
                {loadingSignIn ? "Please wait" : "Log In"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
