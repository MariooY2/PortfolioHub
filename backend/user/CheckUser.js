import supabase from "../supabase";
async function checkUserExistsByEmail(email) {
    try {
        const { data, error } = await supabase
            .from('users')
            .select('email')
            .eq('email', email)
            .single();  // Use single to expect at most one row to be returned

        if (error) {
            // If no row found, Supabase returns error "PGRST116 - Could not find a single row in ..."
            if (error.message.includes("Could not find a single row in")) {
                return false;
            }
            console.error('Error checking user:', error);
            throw error;
        }

        // If data is returned, a user exists
        return true;
    } catch (error) {
        console.error('Exception when checking for user:', error);
        return false; // Optionally handle different types of errors distinctly
    }
}

export default checkUserExistsByEmail;