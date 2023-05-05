import type { PageLoad } from './$types';
import { collection, getDocs } from 'firebase/firestore';

export const load = (async ({parent, params}) => {
    const { db } = await parent();
    const projects = await getDocs( collection(db, 'projects', 'mobileese', 'projects'));
    return {
        projects: projects.docs.map(doc => doc.data())
    }
}) satisfies PageLoad;