import supabase from "../supabase";

async function checkAbout(email) {
  try {
    const { data, error } = await supabase
      .from("userinfo")
      .select()
      .eq("email", email)
      .single(); // Use .single() if you expect one or no record

    if (error) {
      console.error("Error fetching user info:", error.message);
      return false;
    }

    // If data is found, return true to indicate the user info exists
    return !!data;
  } catch (error) {
    console.error("Exception when checking about:", error.message);
    return false;
  }
}

export default checkAbout;
