//Ordem de programação das vogais encriptadas
//  e --> enter  o --> ober  i --> imes  a --> ai  u --> ufat

function encriptar() {
  var texto = document.getElementById('text-area-esq').value.toLowerCase()
  //i afetará letras maiúsculas e minúsculas.
  //g afetará toda a frase (apenas uma linha).
  //m afetará todas as linhas.
  var txtCriptado = texto.replace(/e/gim, 'enter')
  var txtCriptado = txtCriptado.replace(/o/gim, 'ober')
  var txtCriptado = txtCriptado.replace(/i/gim, 'imes')
  var txtCriptado = txtCriptado.replace(/a/gim, 'ai')
  var txtCriptado = txtCriptado.replace(/u/gim, 'ufat')

  //document.getElementById('menino-lupa').style.display = 'none'
  document.getElementById('txt-menino-lupa').style.display = 'none'
  document.getElementById('text-area').innerHTML = txtCriptado
  document.getElementById('copia').style.display = 'show'
  document.getElementById('text-area-esq').innerHTML = ' '
  document.getElementById('copia').style.display = 'inherit'
}

function desencriptar() {
  var texto = document.getElementById('text-area-esq').value.toLowerCase()
  //i afetará letras maiúsculas e minúsculas.
  //g afetará toda a frase (apenas uma linha).
  //m afetará todas as linhas.
  var txtCriptado = texto.replace(/enter/gim, 'e')
  var txtCriptado = txtCriptado.replace(/ober/gim, 'o')
  var txtCriptado = txtCriptado.replace(/imes/gim, 'i')
  var txtCriptado = txtCriptado.replace(/ai/gim, 'a')
  var txtCriptado = txtCriptado.replace(/ufat/gim, 'u')

  //document.getElementById('menino-lupa').style.display = 'none'
  document.getElementById('txt-menino-lupa').style.display = 'none'
  document.getElementById('text-area').innerHTML = txtCriptado
  document.getElementById('copia').style.display = 'show'
  document.getElementById('text-area-esq').innerHTML = ' '
  document.getElementById('copia').style.display = 'inherit'
}

function copia() {
  var contenido = document.querySelector('#text-area')
  contenido.select()
  document.execCommand('copy')
  alert('Copied!')
}
