// Select DOM elements
const CHEST = document.querySelector('#chest');
const OPEN_CHEST_BTN = document.querySelector('#btn-open-chest');
const AWARD = document.querySelector('.award');

// Function to handle the chest opening and button disabling
function openChest() {
    // Open the chest
    CHEST.classList.remove('shake-chest');
    CHEST.classList.add('btn-open-chest');
    
    // Award a random dollar amount
    const randomDollar = (Math.random() * 9 + 1).toFixed(2);
    AWARD.innerText = `$${randomDollar}`;

    // Disable the button and change its style
    OPEN_CHEST_BTN.style.backgroundColor = 'gray';
    OPEN_CHEST_BTN.disabled = true;

    // Remove the event listener
    OPEN_CHEST.removeEventListener('click', openChest);
}
// Attach the event listener to the button
OPEN_CHEST.addEventListener('click', openChest);
