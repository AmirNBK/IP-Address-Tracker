import { writable, type Writable } from 'svelte/store';
import { createQuery } from "@tanstack/svelte-query";

export const ip: any = writable('');
export const finalIp = writable('');
export const correctIp = writable('');

export async function fetchUserData(ipAddress: string) {
    const response = await fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=9c095da267384cf0a9fccc8c7cb83ec5&ip=${ipAddress}`);
    const data = await response.json();
    if (response.status === 200) {
        correctIp.set(ip);
        return data;
    }

}