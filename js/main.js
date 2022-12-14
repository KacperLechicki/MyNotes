'use stricts';

const addBtn = document.querySelector('.add');
const deleteAllBtn = document.querySelector('.deleteAll');
const noteArea = document.querySelector('.note-area');

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
};

//-----------------------------------------------
//-----------------------------------------------
//-----------------------------------------------
//-----------------------------------------------
//-----------------------------------------------

addBtn.addEventListener('click', openPanel);
cancelBtn.addEventListener('click', closePanel);
