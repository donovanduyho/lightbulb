import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative h-screen">
      <nav
        style={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}
        className="fixed top-0 left-0 w-full flex justify-between items-center p-4 bg-white z-10"
      >
        <div className="flex items-center ">
          <a href="/" className="cursor-pointer">
            <Image
              src="/assets/nobg-logo.png"
              alt="logo"
              width={50}
              height={50}
            />
          </a>
          <h1 className="text-2xl -ml-2">
            <span className="text-yellow-500">Light</span>bulb
          </h1>
        </div>
        <ul className="flex space-x-4">
          <li>
            <a
              href="/login"
              className="hover:text-yellow-500 transition duration-200"
            >
              Login
            </a>
          </li>
          <li>
            <a
              href="/register"
              className="hover:text-yellow-500 transition duration-200"
            >
              Sign Up
            </a>
          </li>
        </ul>
      </nav>

      <section
        id="home"
        className="h-screen flex items-center justify-center 
        absolute inset-0 -z-10 w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"
      >
        <div className="text-center">
          <h1 className="text-4xl mb-4">
            A platform where <span className="text-yellow-500">questions</span>
            <br /> light the way
          </h1>
          <p className="mb-6 text-lg">
            Lightbulb allows students to ask questions
            <br /> anonymously while enhancing their
            <br /> learning experience.
          </p>

          <div className="flex justify-center space-x-4">
            <Link href="/instructor">
              <button className=" bg-[#F6CAD1] text-white px-4 py-2 rounded-full hover:bg-[#FFA8AF] transition duration-200">
                Instructors
              </button>
            </Link>
            <Link href="/student">
              <button className="bg-[#F6CAD1] text-white px-4 py-2 rounded-full hover:bg-[#FFA8AF] transition duration-200">
                Students
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
