var list = document.getElementById('page').getElementsByTagName('ul')[0];
// ADD NEW ITEM TO END OF LIST
var listItem = document.createElement('li');
listItem.textContent = "cream";
list.appendChild(listItem);

// ADD NEW ITEM START OF LIST
var firstItem = document.createElement('li');
firstItem.textContent = "kale"
list.insertBefore(firstItem, list.firstChild);

// ADD A CLASS OF COOL TO ALL LIST ITEMS
var listArr = document.getElementsByTagName('li');
for(var i = 0; i < listArr.length; i++) {
    listArr[i].setAttribute("class", "cool");
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var num = list.getElementsByTagName('li').length;
var head = document.getElementsByTagName('h2')[0];
head.innerHTML = head.innerHTML + ' ' + num;