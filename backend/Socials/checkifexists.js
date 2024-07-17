import supabase from "../supabase";
export default async function checkSocialsExist(email) {
    try {
        const { data, error } = await supabase
            .from('Socials')
            .select('email')
            .eq('email', email)
            

        if (error) {
            console.error('Error checking socials:', error);
            throw error;  // Propagate error to be handled by the caller
        }

        // Return true if data length is greater than 0 (meaning a record exists)
        return data.length > 0;
    } catch (error) {
        console.error('Exception when checking for socials:', error);
        throw error;  // Ensure error can be handled where function is called
    }
}