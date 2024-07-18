import { auth, currentUser } from "@clerk/nextjs/server";
import addUser from "@/backend/user/AddUser";
import addSocials from "@/backend/Socials/addsocials";
import addUserInfo from "@/backend/Userinfo/AddAbout";
import checkUserExistsByEmail from "@/backend/user/CheckUser";

export default async function Dashboard() {
  
  const { userId } = auth();
  const user = await currentUser();
  const email = user.primaryEmailAddress.emailAddress;
  //await addSocials("","","",email)
  //await addUserInfo("","",email)
  const image=user.imageUrl
  const name=`${user.firstName +" "+ user.lastName}`
  
  if( await checkUserExistsByEmail(email)=== false){
    addUser(email,image,name)
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center p-4">
        <div className="max-w-4xl w-full bg-white rounded-lg shadow-2xl overflow-hidden">
          <div className="p-8">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
              About Me
            </h1>
            <p className="text-gray-700 text-lg mb-4">
              Welcome to my website! My name is{" "}
              <span className="font-bold">Mario Youssef</span>, and I am a{" "}
              <span className="font-bold">Web Developer</span>.
            </p>
            <p className="text-gray-700 text-lg mb-4">
              This website is a portfolio hub where users can create and
              showcase their professional portfolios. Whether you are a
              designer, developer, writer, or any other professional, this
              platform allows you to create a personalized portfolio to
              highlight your work and achievements.
            </p>
            <p className="text-gray-700 text-lg mb-4">
              The goal of this website is to provide an easy-to-use and visually
              appealing platform for professionals to present their work. Users
              can create dynamic and interactive portfolios that are accessible
              through unique links, making it easy to share with potential
              clients, employers, or collaborators.
            </p>
            <p className="text-gray-700 text-lg mb-4">
              I created this website because I believe in the power of
              showcasing one's work and achievements in a professional manner.
              By providing a platform that is both functional and aesthetically
              pleasing, I hope to help professionals around the world make a
              great impression with their portfolios.
            </p>
            <p className="text-gray-700 text-lg mb-4">
              Thank you for visiting my website. If you have any questions or
              feedback, feel free to contact me at{" "}
              <a
                href="mailto:marioyoussef936@gmail.com"
                className="text-blue-500 hover:underline"
              >
                marioyoussef936@gmail.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
