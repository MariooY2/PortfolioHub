import supabase from "../supabase";
async function GetProjects(email) {
    try {
      const { data: projects, error } = await supabase
        .from('Projects')
        .select("*")
        .eq('email', email);
  
      if (error) {
        console.error('Error fetching projects:', error);
        throw error; // Rethrow the error if you want the caller to handle it
      }
  
      //console.log('Projects fetched successfully:', projects);
      return projects;
    } catch (error) {
      console.error('Error during fetching projects by email:', error);
      throw error; // Ensure the error is thrown so it can be caught by the caller
    }
  }
  
  export default GetProjects;