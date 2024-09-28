import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans">
      <nav
        style={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}
        className="fixed top-0 left-0 w-full flex justify-between items-center p-4 bg-white z-10"
      >
        <div className="flex items-center ">
          <a href="/" className="cursor-pointer">
            <img
              src="assets/nobg-logo.png"
              alt="Lightbulb Logo"
              className="h-12 w-12"
            />
          </a>
          <h1 className="text-2xl -ml-2">
            <span className="text-yellow-500">Light</span>bulb
          </h1>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link
              href="/instructor"
              className="hover:text-yellow-500 transition duration-200"
            >
              Instructors
            </Link>
          </li>
          <li>
            <Link
              href="/student"
              className="hover:text-yellow-500 transition duration-200"
            >
              Students
            </Link>
          </li>
        </ul>
      </nav>

      <section id="home" className="h-screen flex items-center justify-left ml-10">
        <div className="text-left -mt-18">
          <h1 className="text-4xl mb-4">Instructors</h1>
          <p className="mb-6 text-lg">
            Lightbulb is a platform designed specifically for educators to
            <br /> enhance their teaching and connect with students more
            <br /> effectively. Teachers can create and manage classes to address
            <br /> student questions and have the class participate in real-time discussions.
          </p>

          <div className="flex justify-left space-x-4">
            <Link href="/login">
              <button className=" bg-[#D0C2D8] text-white px-4 py-2 rounded-full hover:bg-[#c9a9db] transition duration-200">
                Login
              </button>
            </Link>
            <Link href="register">
              <button className="bg-[#D0C2D8] text-white px-4 py-2 rounded-full hover:bg-[#c9a9db] transition duration-200">
                Sign Up
              </button>
            </Link>
           
          </div>
        </div>

        <img
            src="assets/connect.png"
            alt="Students Picture"
            style={{ marginLeft: "80px" }}
            className="h-21 w-30 mt-10 "
          />

      </section>
    </div>
  );
}
