import supabase from "../supabase";
async function addProject(projectName, projectDescription, email) {
    // Insert data into the 'Projects' table
    const { data: insertData, error: insertError } = await supabase
      .from('Projects')
      .insert([
        {
          ProjectName: projectName,
          ProjectDescription: projectDescription,
          email: email
        }
      ]);
  
    if (insertError) {
      console.error('Error inserting data:', insertError);
      return;
    }
  
    console.log('Insertion successful:', insertData);
    return insertData; // Contains the inserted data including any default fields like id, created_at
  }
export default addProject;  