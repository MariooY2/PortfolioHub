import supabase from "../supabase";

async function addUser(email,image,name) {
  try {
    const { data, error } = await supabase.from("users").insert([
      {
        email: email,image:image,name:name
      },
    ]);

    if (error) {
      console.error("Error adding user:", error);
      return { data: null, error };
    }

    console.log("User added successfully:", data);
    return { data, error: null };
  } catch (error) {
    console.error("Exception when adding user:", error);
    return { data: null, error };
  }
}

export default addUser;
