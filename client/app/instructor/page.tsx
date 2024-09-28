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
            <a
              href=""
              className="hover:text-yellow-500 transition duration-200"
            >
              Instructors
            </a>
          </li>
          <li>
            <a
              href=""
              className="hover:text-yellow-500 transition duration-200"
            >
              Students
            </a>
          </li>
        </ul>
      </nav>

      <section id="home" className="h-screen flex items-center justify-center">
        <div className="text-center -mt-15">
          <h1 className="text-4xl mb-4">Instructors</h1>
          <p className="mb-6 text-lg">
            Lightbulb allows students to ask questions
            <br /> anonymously while enhancing their
            <br /> learning experience.
          </p>

          <div className="flex justify-center space-x-4">
            <button className=" bg-[#D0C2D8] text-white px-4 py-2 rounded-full hover:bg-[#c9a9db] transition duration-200">
              Login
            </button>
            <button className="bg-[#D0C2D8] text-white px-4 py-2 rounded-full hover:bg-[#c9a9db] transition duration-200">
              Sign Up
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
