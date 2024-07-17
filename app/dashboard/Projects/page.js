import ProjectForm from "@/app/_components/ProjectForm";
import { currentUser } from "@clerk/nextjs/server";
import GetProjects from "@/backend/Projects/GetProjects";
import ProjectCard from "@/app/_components/ProjectCard";
import { DeleteButton } from "@/app/_components/ProjectForm";

async function Project() {
  const user = await currentUser();
  const email = user.primaryEmailAddress.emailAddress;
  const data = await GetProjects(email);
  console.log(data);

  return (
    <>
      <ProjectForm email={email} />
      <div className="flex justify-around gap-8 flex-wrap">
        {data.map((project) => (
          <div key={project.id} className="flex flex-col items-center w-full max-w-sm px-4 py-2">
            <ProjectCard
              ProjectName={project.ProjectName}
              ProjectDescription={project.ProjectDescription}
            />
            <DeleteButton ID={project.id}/>
          </div>
        ))}
      </div>
    </>
  );
}

export default Project;
