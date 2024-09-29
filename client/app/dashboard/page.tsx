import Link from "next/link";
import ClassBox from "./_components/class-box";

export default function Home() {
  return (
    //check if teacher
    // if userID is in teacher table
    //return button
    // use id to check how many classes if (user.id get classes > 0)
    // if x classes display x components (classes.map())
    //else display none (only create)

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
              <img
                src="assets/user-cog.svg"
                alt="Settings Logo"
                className="h-5 w-5"
              />
            </a>
          </li>
          <li>
            <a href="/login">
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
        className="h-screen flex items-center justify-left ml-10"
      >
        <div>
          <h1 className="text-3xl mb-4 -mt-52">Classes</h1>

          <button className=" bg-[#D0C2D8] text-white px-4 py-2 rounded-full hover:bg-[#c9a9db] transition duration-200">
            Join Class
          </button>
        </div>
      </section>
    </div>
  );
}
