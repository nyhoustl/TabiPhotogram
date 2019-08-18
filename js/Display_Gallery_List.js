// create HTML of figures (gallery list)

for (var i = 0; i < region_list.length; i++) {
  var div = document.getElementById('photo_tile');
  var fig = document.createElement('FIGURE');

  var a = document.createElement('A');
  var img = document.createElement('IMG');
  var figcaption = document.createElement('FIGCAPTION');

  // check if list is gallery_list1 (country) or gallery_list2 (region)
  // then create a link with #region_name
  if (region_list.includes('USA')){
    var jpg_name = 'photo/tile/country/' + region_list[i] + '_tile.jpg';
    var href_name = 'Gallery_List2.html#' + region_list[i];
    }
  else {
    var jpg_name = 'photo/tile/region/' + region_list[i] + '_tile.jpg';
    var href_name = 'Gallery_' + region_list[i] + '.html';
  }

  fig.setAttribute('class', 'gallery_list');
  figcaption.setAttribute('class', 'gallery_list');
  img.setAttribute('class', 'gallery_list');
  img.setAttribute('src', jpg_name);
  img.setAttribute('alt', region_list[i]);
  a.setAttribute('href', href_name);
  a.appendChild(img);
  figcaption.textContent = region_list[i];
  fig.appendChild(a);
  fig.appendChild(figcaption);
  div.appendChild(fig);
}
