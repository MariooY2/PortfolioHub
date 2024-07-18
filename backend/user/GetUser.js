import supabase from "../supabase";

async function getUserByEmail(email) {
  try {
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("email", email);

    if (error) {
      console.error("Error fetching user:", error);
      return { data: null, error };
    }

    console.log("User fetched successfully:", data);
    return { data };
  } catch (error) {
    console.error("Exception when fetching user:", error);
    return { data: null, error };
  }
}

export default getUserByEmail;
