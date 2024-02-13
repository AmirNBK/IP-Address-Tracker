import { writable } from 'svelte/store';
import { createQuery } from "@tanstack/svelte-query";

export const ip = writable('');
export const ipChange = writable(false);

export async function fetchUserData(ipAddress: string) {
    const response = await fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=9c095da267384cf0a9fccc8c7cb83ec5&ip=${ipAddress}`);
    const data = await response.json();
    return data;
}