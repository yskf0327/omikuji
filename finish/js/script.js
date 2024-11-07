const omikujiArray = [
  {
    name: '大吉',
    filename: 'daikichi.png',
  },
  {
    name: '吉',
    filename: 'kichi.png',
  },
  {
    name: '中吉',
    filename: 'chuukichi.png',
  },
  {
    name: '小吉',
    filename: 'syoukichi.png',
  },
  {
    name: '末吉',
    filename: 'suekichi.png',
  },
  {
    name: '凶',
    filename: 'kyou.png',
  },
];

let btnOmikuji = document.getElementById('btn-omikuji');
let resultElm = document.getElementById('result');
let omikujiBox = document.querySelector('.img-omikuji');

btnOmikuji.addEventListener('click', function () {
  let r = Math.floor(Math.random() * omikujiArray.length);

  omikujiBox.classList.add('shake');

  let imgElm = document.createElement('img');
  imgElm.setAttribute('src', './img/' + omikujiArray[r].filename);
  imgElm.setAttribute('alt', omikujiArray[r].name);
  setTimeout(() => {
    resultElm.innerHTML = '';
    resultElm.append(imgElm);
  }, 1000);
});
