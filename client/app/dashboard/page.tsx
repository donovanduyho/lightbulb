import Link from "next/link";
import ClassBox from "./_components/class-box";

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
        <ul className="flex space-x-3 items-center">
          <li>
            <a href=" ">
              <img src="assets/user.svg" alt="User Logo" className="h-5 w-5" />
            </a>
          </li>
          <li>
            <a href=" ">
              <img
                src="assets/settings.svg"
                alt="Settings Logo"
                className="h-5 w-5"
              />
            </a>
          </li>
          <li>
            <a href="">
              <img
                src="assets/log-out.svg"
                alt="Logout Logo"
                className="h-5 w-5"
              />
            </a>
          </li>
        </ul>
      </nav>

      <section
        id="home"
        className="h-screen flex items-center justify-center"
      >
              <ClassBox />

      </section>

    </div>
  );
}
