import UserProfileForm from "@/app/_components/UserForm";
import { currentUser } from "@clerk/nextjs/server";
import getAbout from "@/backend/Userinfo/GetAbout";

async function page() {
  const user = await currentUser();
  const email = user.primaryEmailAddress.emailAddress;
  const Data = await getAbout(email);
  const Subject = Data.data.studySubject;
  const About = Data.data.aboutMe;
  console.log(About);
  return (
    <div className="flex items-center justify-center">
      <UserProfileForm email={email} Subject={Subject} About={About}/>
    </div>
  );
}

export default page;
