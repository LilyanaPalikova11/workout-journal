import { ref, set } from 'firebase/database';
import { db } from '../config/firebase-config';

// CREATE
export const createUser = async (username, uid, email, firstName, lastName) => {
    const user = { username, uid, firstName, lastName, email };
    const userRef = ref(db, `users/${username}`);

    try {
        await set(userRef, user);
        return user;
    } catch (error) {
        console.error('Error creating user:', error);
        throw new Error('Failed to create user: ' + error.message);
    }
};
