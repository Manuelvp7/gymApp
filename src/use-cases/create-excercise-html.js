import { Exercise } from '../models/excercise-model';
/**
 * Creates an HTML element for an exercise card
 * @param {Exercise} exercise - The exercise object
 * @returns {HTMLElement} - The HTML element for the exercise card
 */
export const createExcerciseHtml = (exercise) => {
    if (!exercise) throw new Error('Exercise is required');
    const { uuid, id, name, description, category, equipment, muscles, imageSrc } = exercise;
    const html = `
        <h2>${name}</h2>
        <img src="${imageSrc}" alt="Exercise Image">
        <p>${description}</p>
        <p>${category}</p>
        <p>${equipment}</p>
        <p>${muscles}</p>
    `;
    const element = document.createElement('div');
    element.classList.add('card');
    element.setAttribute('data-id', uuid);
    element.innerHTML = html;
    return element;
};