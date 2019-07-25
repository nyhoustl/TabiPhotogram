// create HTML of figures (gallery list)

for (var i = 0; i < region_list.length; i++) {
  var div = document.getElementById('photo_tile');
  var fig = document.createElement('FIGURE');

  var a = document.createElement('A');
  var img = document.createElement('IMG');
  var figcaption = document.createElement('FIGCAPTION');

  // region_list[i][0]  - check if tile_jpg is (country) or (region) folder
  // region_list[i][1] is region name
  if (region_list[i][0] == 1) {
    var jpg_name = 'photo/tile/country/' + region_list[i][1] + '_tile.jpg';
  }
  else {
   var jpg_name = 'photo/tile/region/' + region_list[i][1] + '_tile.jpg';
  }
  var href_name = 'TripNote_' + region_list[i][1] + '.html';

  fig.setAttribute('class', 'gallery_list');
  figcaption.setAttribute('class', 'gallery_list');
  img.setAttribute('class', 'gallery_list');

  img.setAttribute('src', jpg_name);
  img.setAttribute('alt', region_list[i][1]);
  a.setAttribute('href', href_name);
  a.appendChild(img);
  figcaption.textContent = region_list[i][1];
  fig.appendChild(a);
  fig.appendChild(figcaption);
  div.appendChild(fig);
}
