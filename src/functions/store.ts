import { writable } from 'svelte/store';

export const ip = writable('');
export const ipChange = writable(false);
