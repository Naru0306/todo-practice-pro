'use strict';
const addTaskTrigger = document.getElementsByClassName('btn btn-primary 　.btn-block. ')[0];
const addTaskTarget = document.getElementsByClassName('todo js-addTask-targ')[0];
const addTaskValue = document.getElementsByClassName('form-control form-control-lg')[0];
const addTaskday = document.getElementsByClassName('mt-4 w-75 day')[0];


const removeTask = removeButton => {
  const targetTask = removeButton.closest('li');
  addTaskTarget.removeChild(targetTask);
};

 
const addTask = (task,day) => {
  const dayp = document.createElement('p');
  const textp = document.createElement('div');
  const listItem = document.createElement('li');
  const removeButton = document.createElement('button');
  textp .classList.add("tasuku-f")
  dayp .classList.add("day-f")
  removeButton.innerText = 'del';
  removeButton.addEventListener('click', () => removeTask(removeButton));
  textp.innerText = task;
  dayp.innerText  =day;
  listItem.appendChild(textp);
  listItem.appendChild(removeButton);
  listItem.appendChild(dayp);
  addTaskTarget.appendChild(listItem);
};


addTaskTrigger.addEventListener('click', event => {
  const task = addTaskValue.value;
  const day  = addTaskday.value;
    if(!task){
        alert("リストを追加してください");
  return false;

}else if(!day) {
  alert("締め切りを入力してください");
    }else{
      addTask(task,"締め切り　"+day);
      addTaskValue.value = "";
      addTaskday.value = "";
    }
});