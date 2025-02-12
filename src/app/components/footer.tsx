"use client";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-[#BEC1A7]  font-manrope">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-row justify-between items-start md:items-center mb-20">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl font-bold mb-2">
              We&apos;d love to hear from you!
            </h2>
            <p>Created by Adnan Memos & Sanjana Masam</p>
          </div>
          <div className="self-end md:self-center">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="mt-4 md:mt-0"
            >
              <Image
                src="/above.svg"
                alt="Kofi Kinara Logo 1"
                width={60}
                height={10}
              />
            </button>
          </div>
        </div>

        {/* Links Section */}
        <div className="mb-6">
          <h3 className=" mb-2 underline decoration-1 underline-offset-2">
            Contribute to our Project
          </h3>
          <div className="flex space-x-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline decoration-1 underline-offset-2 flex items-center"
            >
              <span>Github</span>
              <Image
                src="/crossarrow.svg"
                alt="External link"
                width={10}
                height={10}
                className="ml-1"
              />
            </a>
            <a
              href="https://ko-fi.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline decoration-1 underline-offset-2 flex items-center"
            >
              <span>Buy us a Kofi</span>
              <Image
                src="/crossarrow.svg"
                alt="External link"
                width={10}
                height={10}
                className="ml-1"
              />
            </a>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mb-6 mt-12">
          <h3 className=" mb-2 underline decoration-1 underline-offset-2 ">
            Sign up for our newsletter (No spam)
          </h3>
          <form className="relative w-96">
            <input
              type="email"
              placeholder="Email"
              className="bg-transparent border-b border-[#BEC1A7] focus:outline-none  text-base py-1 w-full pr-10 placeholder-[#555555] "
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2"
            >
              <Image
                src="/arrow.svg" // Replace with your actual image path
                alt="Submit"
                width={14}
                height={10}
              />
            </button>
          </form>
        </div>

        {/* Contact Section */}
        <div className="flex space-x-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline decoration-1 underline-offset-2 flex items-center"
          >
            <span>Instagram</span>
            <Image
              src="/crossarrow.svg"
              alt="External link"
              width={10}
              height={10}
              className="ml-1"
            />
          </a>
          <a
            href="https://ko-fi.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline decoration-1 underline-offset-2 flex items-center"
          >
            <span>hello@kofikinara.com</span>
            <Image
              src="/crossarrow.svg"
              alt="External link"
              width={10}
              height={10}
              className="ml-1"
            />
          </a>
        </div>

        <div className="flex justify-between items-end mt-28 ">
          {/* Left Section */}
          <span className="text-11xl  font-extrabold text-[#BEC1A7] leading-none">
            Kofi Kinara
          </span>

          {/* Right Section */}
          <div className="flex items-end space-x-16 text-lg text-[#BEC1A7]">
            {/* Hyderabad - India */}
            <span>Hyderabad - India</span>

            {/* ©2025 and Terms of Use */}
            <div className="flex flex-col items-end">
              <span>©2025</span>
              <a href="#" className="hover:underline">
                Terms of use
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
