function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}



































const avança = document.querySelectorAll(".proximo");
avança.forEach(buttom => {
  buttom.addEventListener('click', function(){
    const atual = document.querySelector('.ativo');
    const proximoPasso = 'passo-' + this.getAttribute('data-proximo');
    atual.classList.remove('ativo');
  document.getElementById(proximoPasso).classList.add('ativo');
  })
})









