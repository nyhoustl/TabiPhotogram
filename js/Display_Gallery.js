var div = document.getElementById('photo_gallery')

// create HTML for figures
for (var i = 0; i < photo_list.length; i++) {
  var fig = document.createElement('FIGURE')
  var img = document.createElement('IMG')
  var jpg_name = 'photos/galleries/' + photo_list[i] + '.jpg'
  var figcaption = document.createElement('FIGCAPTION')
  img.setAttribute('src', jpg_name)
  img.setAttribute('width', '100%')
  img.setAttribute('height', '100%')
  img.setAttribute('alt', photo_list[i])
  img.setAttribute('class', 'gallery')
  fig.setAttribute('class', 'slides fade')
  figcaption.textContent = photo_list[i]
  figcaption.setAttribute('class', 'gallery')
  fig.appendChild(img)
  fig.appendChild(figcaption)
  div.appendChild(fig)
}

// create HTML for dots
var div2 = document.getElementById('photo_gallery_dot') // dots
for (var i = 0; i < photo_list.length; i++) {
  var span = document.createElement('SPAN')
  span.setAttribute('class', 'dot')
  var showSlide_name = 'showSlide(' + i.toString() + ')'
  span.setAttribute('onclick', showSlide_name)
  div2.appendChild(span)
}

var slideIndex = 1
showSlide(slideIndex)

// show slide
function showSlide(n){
  var slides = document.getElementsByClassName('slides')
  slideIndex = n
  if (n > slides.length){
    slideIndex=1
  }
  if (slideIndex < 1){
    slideIndex= slides.length
  }
  for (var i=0; i< slides.length; i++){
    slides[i].style.display = 'none' //hide all slides (except current)
  }
  slides[slideIndex-1].style.display = 'block' //show slide as block
}

// Next/previous controls
function plusSlides(n) {
  showSlide(slideIndex += n)
}
