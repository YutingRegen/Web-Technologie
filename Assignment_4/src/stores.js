import { writable } from 'svelte/store';

const storedReviews = JSON.parse(localStorage.getItem('reviews')) || [];

export const reviewsStore = writable(storedReviews);

reviewsStore.subscribe((value) => {
    localStorage.setItem('reviews', JSON.stringify(value));
});