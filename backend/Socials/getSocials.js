import supabase from "../supabase";

async function getSocialsByEmail(email) {
    try {
        const { data, error } = await supabase
            .from('Socials')
            .select('github, linkedin, twitter')
            .eq('email', email)
            .single(); // Assumes there's only one entry per email

        if (error) {
            console.error('Error fetching socials:', error);
            return { data: null, error };
        }

        console.log('Socials fetched successfully:', data);
        return { data, error: null };
    } catch (error) {
        console.error('Exception when fetching socials:', error);
        return { data: null, error };
    }
}

export default getSocialsByEmail;