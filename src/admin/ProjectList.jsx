import React, { useEffect, useState } from "react";
import { supabase } from "../SupabaseClient";
import { FaGithub, FaX } from "react-icons/fa6";
import { PiEmpty } from "react-icons/pi";
import Loading from "../Components/Loading";

const ProjectList = () => {
  const [projectList, setProjectList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch data
  const fetchedData = async () => {
    try {
      const { data, error: er } = await supabase
        .from("portfolio-projects")
        .select("*");
      if (er) throw er;

      setProjectList(data);
    } catch (error) {
      console.error("Error while Fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchedData();
  }, []);

  // Delete project + image
  const deleteProject = async (project) => {
    try {
      if (!project.image_path) {
        console.error("No image_path found for project:", project.id);
        return;
      }

      // Delete from storage
      const { error: storageError } = await supabase.storage
        .from("project-images")
        .remove([project.image_path]);
      if (storageError) throw storageError;

      // Delete from database
      const { error: dbError } = await supabase
        .from("portfolio-projects")
        .delete()
        .eq("id", project.id);
      if (dbError) throw dbError;

      // Refresh list
      fetchedData();
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  return (
    <div className="projectList flex flex-col mt-12 overflow-auto">
      {/* Header row */}
      <div className="text-white grid grid-cols-[150px_150px_150px_150px_50px_50px] text-sm p-2 bg-stone-800 border-b border-b-gray-700">
        <h1 className="border-l border-l-gray-500 pl-2">Title</h1>
        <h1 className="border-l border-l-gray-500 pl-2">Techs</h1>
        <h1 className="border-l border-l-gray-500 pl-2">Features</h1>
        <h1 className="border-l border-l-gray-500 pl-2">Challenges</h1>
        <h1 className="border-l border-l-gray-500 pl-2">Live</h1>
        <h1 className="border-l border-l-gray-500 pl-2">Code</h1>
      </div>

      {/* Project rows */}
      {isLoading ? (
        <div className="mt-6 self-center overflow-hidden">
          <Loading />
        </div>
      ) : (
        projectList.map((project) => (
          <div
            key={project.id}
            className=" text-white grid grid-cols-[150px_150px_150px_150px_50px_50px] text-sm p-2 bg-gray-900 border-b border-b-gray-700 "
          >
            <h1 className="border-l flex gap-3 items-center border-l-gray-500 pl-2 mr-1 line-clamp-1">
              <FaX
                className=" cursor-pointer bg-red-800/50 hover:bg-red-800/70 duration-150 hover:scale-105 p-0.5"
                onClick={() => {
                  if (
                    window.confirm(
                      `Are you sure want to delete "${project.title}"?`
                    )
                  ) {
                    deleteProject(project);
                  }
                }}
              />{" "}
              {project.title}
            </h1>
            <h1 className="border-l border-l-gray-500 pl-2 mr-1 line-clamp-1">
              {project.techs.join(", ")}
            </h1>
            <h1 className="border-l border-l-gray-500 pl-2 mr-1 line-clamp-1">
              {project.features.join(", ")}
            </h1>
            <h1 className="border-l border-l-gray-500 pl-2 mr-1 line-clamp-1">
              {project.challenges}
            </h1>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="border-l border-l-gray-500 pl-2 hover:underline"
            >
              Live
            </a>
            {project.code ? (
              <a
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                className="border-l border-l-gray-500 hover:underline flex justify-center hover:text-accent duration-150"
              >
                <FaGithub className="text-xl" />
              </a>
            ) : (
              <div className="border-l border-l-gray-500 self-center flex justify-center">
                <PiEmpty />
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default ProjectList;
