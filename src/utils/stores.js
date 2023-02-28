import { writable } from 'svelte/store';
import { getInitialStateCookie } from './stateCookie';


export const stateCookie = writable(getInitialStateCookie());