import supabase from "../supabase";

async function updateAbout(studySubject, aboutMe, email) {
  try {
    const { data, error } = await supabase
      .from("userinfo")
      .update({ studySubject, aboutMe })
      .eq("email", email)
      .select();

    if (error) {
      console.error("Error updating data:", error);
      return { data: null, error };
    }

    console.log("Data updated successfully:", data);
    return { data, error: null };
  } catch (error) {
    console.error("Exception when updating data:", error);
    return { data: null, error };
  }
}

export default updateAbout;
