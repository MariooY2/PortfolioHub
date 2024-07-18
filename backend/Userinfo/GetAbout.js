import supabase from "../supabase";

async function getAbout(email) {
    try {
      const { data, error } = await supabase
        .from('userinfo')
        .select('studySubject, aboutMe')
        .eq('email', email)
        .single(); // Assuming each email is unique and returns a single row
  
      if (error) {
        console.error('Error fetching data:', error);
        return { data: null, error };
      }
  
      console.log('Data fetched successfully:', data);
      return { data, error: null };
    } catch (error) {
      console.error('Exception when fetching data:', error);
      return { data: null, error };
    }
  }
  
  export default getAbout;