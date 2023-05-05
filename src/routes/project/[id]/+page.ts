import type { PageLoad } from './$types';
import { doc, getDoc } from 'firebase/firestore';

export const load = (async ({parent, params}) => {
    const { db } = await parent();
    const project = await getDoc( doc(db, 'projects', 'mobileese', 'projects', params.id));
    return {
        project: project.data()
    }
}) satisfies PageLoad;