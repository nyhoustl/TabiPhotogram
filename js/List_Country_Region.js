country_region_dict = {
  'Cuba': ['Havana', 'Trinidad'],
  'Easter Island': ['Easter Island 1', 'Easter Island 2'],
  'Patagonia':['Perito Moreno Glacier', 'El Chalten'],
  'Mexico': ['San Miguel de Allende', 'Puerto Vallarta'],
  'USA': ['Arizona', 'California', 'Oregon and Washington',
          'Minnesota', 'New York', 'Hawaii'],
  'France': ['Paris', 'Alsace', 'Bordeaux', 'Aveyron',
            'Normandie', 'Provence', 'Rhone', 'Basque'],
  'Italy': ['Florence and Siena', "Val d'Orcha 1", "Val d'Orcha 2",'Maremma',
            'Civita and Orvieto', 'Rome'],
            //'Milan and Como', 'Ravenna', 'Naples', 'Positano'],
  'Spain': ['Andalucia', 'Barcelona', 'Basque'],
  'UK and Ireland': ['Ireland', 'Scotland'],
  'Other Countries':['Croatia 1', 'Croatia 2', 'Montenegro', 'Czech', 'Norway', 'Greece',
            'Portugal', 'Thailand']
}

var urlHash = location.hash.slice(1) // obtain keyword from url hash
urlHash = urlHash.replace('%20', ' ')
urlHash = urlHash.replace('%20', ' ')
urlHash = urlHash.replace('%20', ' ')
urlHash = urlHash.replace('%20', ' ')  // remove %20 for space
region_list = country_region_dict[urlHash]

// create HTML for <div id=page_description>
var div = document.getElementById('page_description')
var h3 = document.createElement('H3')
h3.textContent = 'Photo Galleries of ' + urlHash
div.appendChild(h3)
