"use client";
import getSocialsByEmail from "@/backend/Socials/getSocials";
import GetProjects from "@/backend/Projects/GetProjects";
import getAbout from "@/backend/Userinfo/GetAbout";
import getUserByEmail from "@/backend/user/GetUser";
import decodeUpToFirstPercent from "../_components/decode";
import checkUserExistsByEmail from "@/backend/user/CheckUser";
import { useRouter } from "next/navigation";

async function page({ params }) {
  const router = useRouter();
  const email = params.PortfolioEmail;
  const decodedemail = decodeUpToFirstPercent(email);

  const navigateToHome = () => {
    router.push("/");
  };
  const info = await getUserByEmail(decodedemail); // This function fetches the user data
  const userInfo = info?.data; // Assuming that the data is stored under the 'data' key

  // Access the user data if it exists and the array is not empty
  if (userInfo && userInfo.length > 0) {
    const user = userInfo[0]; // Get the first user object from the array
    var name = user.name;
    var imageurl = user.image;
    console.log("User Info:", user); // Log the entire user object
  } else {
    console.log("No user data available.");
  }

  const projects = await GetProjects(decodedemail);

  const Socials = await getSocialsByEmail(decodedemail);

  const socialLinks = Socials.data;
  const githubUrl = `https://github.com/${socialLinks?.github}`;
  const LinkedinUrl = `https://linkedin.com/in/${socialLinks?.linkedin}`;
  const twitterUrl = `https://twitter.com/${socialLinks?.twitter}`;

  const About = await getAbout(decodedemail);

  const aboutme = About?.data?.aboutMe;
  const studySubject = About?.data?.studySubject;

  if ((await checkUserExistsByEmail(decodedemail)) === false) {
    return (
      <>
        <h1 className="text-red-600 text-2xl text-center mt-8">
          Your username doesn't exist. Please create an account.
        </h1>
        <div className="flex items-center justify-center">
          <button
            onClick={navigateToHome}
            className="mt-4 px-4 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Go to Home
          </button>
        </div>
      </>
    );
  }

  return (
    <div className="min-h-screen text-white w-full bg-gradient-to-r from-blue-500 to-purple-600 ">
        <div className="p-5"></div>
      <div className="flex flex-col items-center px-4 md:px-10 lg:px-20 xl:px-40 2xl:px-80 ">
        <img src={imageurl} alt="Profile" className="w-40 h-40 rounded-full" />
        <h1 className="text-3xl font-bold mt-4">{name}</h1>
        <h1 className="text-3xl font-bold mt-4">{studySubject}</h1>
        <p className="mt-2 text-center">{aboutme}</p>

    

        <div className="w-screen mt-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center justify-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
            {projects.map((project, index) => (
              <div
                key={index}
                className="p-4 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold">{project.ProjectName}</h3>
                <p>{project.ProjectDescription}</p>
                <a
                  href={project.ProjectLink} // Assuming you have a link for the project
                  className="hover:text-blue-700 mt-2 inline-block"
                >
                  View Project
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="flex space-x-4 mt-9">
          <a href={githubUrl} className="hover:text-blue-700">
            GitHub
          </a>
          <a href={twitterUrl} className="hover:text-blue-500">
            Twitter
          </a>
          <a href={LinkedinUrl} className="hover:text-blue-800">
            LinkedIn
          </a>
          
        </div>
        <div className="mt-4">
          <a href={`mailto:${decodedemail}`} className="hover:text-gray-700">
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}

export default page;
