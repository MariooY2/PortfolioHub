import supabase from "../supabase";
async function DeleteProject(projectId) {
  try {
    const { data, error } = await supabase
      .from("Projects")
      .delete()
      .match({ id: projectId });

    if (error) {
      throw error;
    }

    console.log("Project deleted successfully:", data);
    return data;
  } catch (error) {
    console.error("Error deleting project:", error);
    throw error; // Re-throw the error so it can be handled by the caller
  }
}
export default DeleteProject;