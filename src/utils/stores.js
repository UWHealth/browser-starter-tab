import { writable } from 'svelte/store';
import { getStateCookie } from './stateCookie';

export const stateCookie = writable(getStateCookie());