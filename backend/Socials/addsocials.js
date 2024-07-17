import supabase from "../supabase";

async function addSocials(github, linkedin, twitter, email) {
    try {
        const { data, error } = await supabase.from('Socials').insert([
            { github, linkedin, twitter, email }
        ]);
        
        if (error) {
            console.error('Error inserting socials:', error);
            return { data: null, error };
        }

        console.log('Socials inserted successfully:', data);
        return { data, error: null };
    } catch (error) {
        console.error('Exception when inserting socials:', error);
        return { data: null, error };
    }
}

export default addSocials;