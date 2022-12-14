'use stricts';

const addBtn = document.querySelector('.add');
const deleteAllBtn = document.querySelector('.deleteAll');
const noteArea = document.querySelector('.notes-area');

const deleteNote = document.getElementsByClassName('.note-header-delete');

const saveBtn = document.querySelector('.save');
const cancelBtn = document.querySelector('.cancel');
const notePanel = document.querySelector('.note-panel');
const category = document.querySelector('#category');
const textarea = document.querySelector('#text');
const error = document.querySelector('.error');

let selectedValue;

let cardID = 0;

//-----------------------------------------------
//-----------------------------------------------
//-----------------------------------------------
//-----------------------------------------------
//-----------------------------------------------

const openPanel = () => {
	notePanel.style.display = 'flex';
};

const closePanel = () => {
	notePanel.style.display = 'none';
	error.style.visibility = 'hidden';
	textarea.value = '';
	category.selectedIndex = 0;
	category.value = '0';
};

const addNote = () => {
	if (
		textarea.value !== '' &&
		category.options[category.selectedIndex].value != '0'
	) {
		createNote();
		error.style.visibility = 'hidden';
		notePanel.style.display = 'none';
		textarea.value = '';
		category.selectedIndex = 0;
		category.value = '0';
	} else {
		error.style.visibility = 'visible';
	}
};

const createNote = () => {
	const newNote = document.createElement('div');
	newNote.classList.add('note');
	newNote.setAttribute('id', cardID);

	newNote.innerHTML = `<div class="note-header">
    <h3 class="note-header-title">${selectedValue}</h3>
    <button class="note-header-delete" onclick="handleDeleteNote(${cardID})"><i class="fas fa-times icon"></i></button>
</div>
<div class="note-body">${textarea.value}</div>`;

	noteArea.appendChild(newNote);
	cardID++;
};

const selectValue = () => {
	selectedValue = category.options[category.selectedIndex].text;
};

const handleDeleteNote = (id) => {
	const noteToDelete = document.getElementById(id);
	noteArea.removeChild(noteToDelete);
};

const deleteAllNotes = () => {
	noteArea.textContent = '';
};

//-----------------------------------------------
//-----------------------------------------------
//-----------------------------------------------
//-----------------------------------------------
//-----------------------------------------------

addBtn.addEventListener('click', openPanel);
cancelBtn.addEventListener('click', closePanel);
saveBtn.addEventListener('click', addNote);
deleteAllBtn.addEventListener('click', deleteAllNotes);
