let numbersArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
let container = document.getElementById('container');
//created child elements dynamically using array
numbersArray.forEach((item) => {
  container.innerHTML += '<li class=' + 'item-' +  item + '>' + item + '</li>'
});

shuffleArray = (args) => {
  let index = 0;
  // passing arguments to decide shuffle or sort
  numbersArray = args === 'shuffle' ? numbersArray.sort(() => { return 0.5 - Math.random() }) : numbersArray.sort((a, b) => { return a - b });
  container.innerHTML = '';
  while (index < numbersArray.length) {
    let childItem = document.createElement('li');
    childItem.innerHTML = numbersArray[index];
    childItem.setAttribute('class', 'item-' + numbersArray[index]);
    container.appendChild(childItem);
    index++;
  }
}