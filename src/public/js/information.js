let editBtn = document.querySelector('#edit');
let editForm = document.querySelector('.editinfo');
let formoff = document.querySelector('#off');
editBtn.addEventListener('click', () => {
    editForm.classList.add('active');
});
formoff.addEventListener('click', () => {
    editForm.classList.remove('active');
})