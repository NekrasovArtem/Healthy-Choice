function filter() {
  nuts();
  grains();
  pasta();
  cereals();
  snaks();
  cookies();
  phyto();
  juice();
  tea();
  coffee();
};
function nuts() {
  const nuts = document.querySelector('.nuts');
  const nutsBlock = document.querySelectorAll('.nutsBlock');
  if (nuts.checked) {
    for (var i = 0; i < nutsBlock.length; i++) {
      nutsBlock[i].style.display = 'block';
    }
  } else {
    for (var i = 0; i < nutsBlock.length; i++) {
      nutsBlock[i].style.display = 'none';
    }
  }
};
function grains() {
  const grains = document.querySelector('.grains');
  const grainsBlock = document.querySelectorAll('.grainsBlock');
  if (grains.checked) {
    for (var i = 0; i < grainsBlock.length; i++) {
      grainsBlock[i].style.display = 'block';
    }
  } else {
    for (var i = 0; i < grainsBlock.length; i++) {
      grainsBlock[i].style.display = 'none';
    }
  }
};
function pasta() {
  const pasta = document.querySelector('.pasta');
  const pastaBlock = document.querySelectorAll('.pastaBlock');
  if (pasta.checked) {
    for (var i = 0; i < pastaBlock.length; i++) {
      pastaBlock[i].style.display = 'block';
    }
  } else {
    for (var i = 0; i < pastaBlock.length; i++) {
      pastaBlock[i].style.display = 'none';
    }
  }
};
function cereals() {
  const cereals = document.querySelector('.cereals');
  const cerealsBlock = document.querySelectorAll('.cerealsBlock');
  if (cereals.checked) {
    for (var i = 0; i < cerealsBlock.length; i++) {
      cerealsBlock[i].style.display = 'block';
    }
  } else {
    for (var i = 0; i < cerealsBlock.length; i++) {
      cerealsBlock[i].style.display = 'none';
    }
  }
};
function snaks() {
  const snacks = document.querySelector('.snacks');
  const snacksBlock = document.querySelectorAll('.snacksBlock');
  if (snacks.checked) {
    for (var i = 0; i < snacksBlock.length; i++) {
      snacksBlock[i].style.display = 'block';
    }
  } else {
    for (var i = 0; i < snacksBlock.length; i++) {
      snacksBlock[i].style.display = 'none';
    }
  }
};
function cookies() {
  const cookies = document.querySelector('.cookies');
  const cookiesBlock = document.querySelectorAll('.cookiesBlock');
  if (cookies.checked) {
    for (var i = 0; i < cookiesBlock.length; i++) {
      cookiesBlock[i].style.display = 'block';
    }
  } else {
    for (var i = 0; i < cookiesBlock.length; i++) {
      cookiesBlock[i].style.display = 'none';
    }
  }
};
function phyto() {
  const phyto = document.querySelector('.phyto');
  const phytoBlock = document.querySelectorAll('.phytoBlock');
  if (phyto.checked) {
    for (var i = 0; i < phytoBlock.length; i++) {
      phytoBlock[i].style.display = 'block';
    }
  } else {
    for (var i = 0; i < phytoBlock.length; i++) {
      phytoBlock[i].style.display = 'none';
    }
  }
};
function juice() {
  const juice = document.querySelector('.juice');
  const juiceBlock = document.querySelectorAll('.juiceBlock');
  if (juice.checked) {
    for (var i = 0; i < juiceBlock.length; i++) {
      juiceBlock[i].style.display = 'block';
    }
  } else {
    for (var i = 0; i < juiceBlock.length; i++) {
      juiceBlock[i].style.display = 'none';
    }
  }
};
function tea() {
  const tea = document.querySelector('.tea');
  const teaBlock = document.querySelectorAll('.teaBlock');
  if (tea.checked) {
    for (var i = 0; i < teaBlock.length; i++) {
      teaBlock[i].style.display = 'block';
    }
  } else {
    for (var i = 0; i < teaBlock.length; i++) {
      teaBlock[i].style.display = 'none';
    }
  }
};
  function coffee() {
    const coffee = document.querySelector('.coffee');
    const coffeeBlock = document.querySelectorAll('.coffeeBlock');
    if (coffee.checked) {
      for (var i = 0; i < coffeeBlock.length; i++) {
        coffeeBlock[i].style.display = 'block';
      }
    } else {
      for (var i = 0; i < coffeeBlock.length; i++) {
        coffeeBlock[i].style.display = 'none';
      }
    }
};