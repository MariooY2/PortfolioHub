import supabase from "../supabase";
async function updateSocials( github,twitter,linkedin,email) {
    try {
        const { data, error } = await supabase
            .from('Socials')
            .update({
                github: github,
                linkedin: linkedin,
                twitter: twitter
            })
            .eq('email', email);

        if (error) {
            console.error('Error updating socials:', error);
            return { data: null, error };
        }

        console.log('Socials updated successfully:', data);
        return { data, error: null };
    } catch (error) {
        console.error('Exception when updating socials:', error);
        return { data: null, error };
    }
}

export default updateSocials;