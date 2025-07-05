
const form = document.querySelector('#new-form');
const input = document.querySelector('#item-input');
const list = document.querySelector('#list');

form.addEventListener('submit',(event)=>{
    event.preventDefault();

    const item = document.createElement('div');
    item.innerText = input.value ;
    item.classList.add('list-item');

    list.appendChild(item);

    input.value ='';
    item.addEventListener('click',()=>{
        item.remove();
    })
})