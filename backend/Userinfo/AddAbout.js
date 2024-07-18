import supabase from "../supabase";
async function addUserInfo(studySubject, aboutMe,email) {
    const { data, error } = await supabase
      .from('userinfo')
      .insert([
        { studySubject: studySubject, aboutMe: aboutMe,email:email },
      ])
      .select();
  
    if (error) {
      console.error('Error inserting data:', error);
      return { data: null, error };
    }
  
    console.log('Data inserted successfully:', data);
    return { data, error: null };
  }
  
  export default addUserInfo;