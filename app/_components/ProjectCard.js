function ProjectCard({ ProjectName, ProjectDescription }) {
    return (
      <div className="bg-white shadow-xl rounded-lg p-6 w-96 h-64 mb-5 overflow-hidden">
        <div className="font-bold text-xl mb-2 flex justify-center items-center h-1/4 underline decoration-blue-500">
          {ProjectName}
        </div>
        <p className="text-gray-700 text-base overflow-y-auto h-3/4">
          {ProjectDescription}
        </p>
      </div>
    );
};

export default ProjectCard;
