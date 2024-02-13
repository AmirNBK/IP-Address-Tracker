import { writable } from 'svelte/store';
import { createQuery } from "@tanstack/svelte-query";

export const ip = writable('');
export const ipChange = writable(false);