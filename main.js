const CHEST = document.querySelector('#chest');
const OPEN_BUTTON = document.querySelector('#open-chest');

function openChest() {
	CHEST.classList.remove('shake-chest');
	CHEST.classList.add('open-chest');
}

function resetChest() {
	CHEST.classList.remove('open-chest');
	CHEST.classList.add('shake-chest');
}

OPEN_BUTTON.addEventListener('click', openChest);
