import supabase from "../supabase";
async function checkAbout(email) {
    try {
      const { data, error } = await supabase
        .from('userinfo')
        .select('id')
        .eq('email', email)
        
  
      if (error) {
        if (error.message.includes('No rows found')) {
          return { exists: false, error: null };
        }
        console.error('Error checking data:', error);
        return { exists: false, error };
      }
  
      return { exists: !!data, error: null };
    } catch (error) {
      console.error('Exception when checking data:', error);
      return { exists: false, error };
    }
  }
  
  export default checkAbout;