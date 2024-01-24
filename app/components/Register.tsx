"use client";
import { AtSymbolIcon, KeyIcon, UserIcon } from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export default function RegisterForm() {
  return (
    <form className="space-y-3" action="">
      <div className="flex-1 rounded-lg bg-base-200 px-6 pb-4 pt-8 my-6">
        <h1 className={"mb-3 text-2xl"}>Please register to continue.</h1>
        <div className="w-full">
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium "
              htmlFor="username"
            >
              Username
            </label>
            <div className="relative">
              <input
                className="input input-primary block w-full rounded-md py-[9px] pl-10 text-sm"
                id="username"
                type="text"
                name="username"
                placeholder="Enter your email or username"
                required
              />
              <UserIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:" />
            </div>
          </div>
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium "
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <input
                className="input input-primary block w-full rounded-md py-[9px] pl-10 text-sm  "
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email or username"
                required
              />
              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:" />
            </div>
          </div>
          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium "
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="input input-primary block w-full rounded-md py-[9px] pl-10 text-sm  "
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                minLength={6}
                required
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:" />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-4">
          <button className="btn btn-primary w-56 my-6" type="submit">
            <ArrowRightIcon className="h-5 w-5" /> Signup
          </button>
          <Link className="text-muted" href="/login">
            Have an account? Login
          </Link>
        </div>
      </div>
    </form>
  );
}
