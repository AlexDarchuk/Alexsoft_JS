const arr = [];

const select = document.querySelector("#select");
const listItems = document.querySelector('ul')

const chars = "abcdefghiklmnopqrstuvwxyz";

function randomChars() {
  for (let i = 0; arr.length < 5; i++) {
    let num = chars[Math.floor(Math.random() * chars.split('').length)];

    if (!arr.includes(num)) arr.push(num);
   
  }
 
}
randomChars();

function createItem() {
  for (let i = 0; i < arr.length; i++) {
      let option = document.createElement('option');
          option.innerText = arr[i];
          select.appendChild(option);
   }
}
createItem();



async function string() {
  const req = await fetch("http://localhost:3000/user");
  const json = await req.json();
  listItems.innerHTML = ''
    for (let user of json) {
        if(select.value.includes(user.name[0].toLowerCase())){
            let listUser = document.createElement('li');
                listUser.innerText = user.name;
            listItems.appendChild(listUser);
        } 
      }
      if(listItems.children.length === 0)  
      listItems.innerHTML = 'Співпадінь не знайденно!'
     
}
string();

select.addEventListener('change', string)
    