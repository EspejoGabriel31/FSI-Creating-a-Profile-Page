let content = document.querySelector('.js-generated.content')

let header = document.createElement('h1')
header.setAttribute('class','dog-name')
header.append('Rizzo')

content.append(header)

//main body section
let body = document.createElement('div')
body.setAttribute('class','dog-content')

//image
let image = document.createElement('img')
image.setAttribute('class','dog-image')
image.setAttribute('src','./assets/rizzo.jpg')

body.append(image)

//details section
let details = document.createElement('div')
details.setAttribute('class','dog-details')

//description header
let descriptionTitle = document.createElement('h3')
descriptionTitle.textContent = 'Description:'
details.append(descriptionTitle)

//description
let description = document.createElement('p')
description.textContent = 'This gentle dog is aloof toward her owner, and never comes when called. She always acts as though any stranger she meets will harm her, and dislikes other animals.'
details.append(description)

//list header
let listTitle = document.createElement('h3')
listTitle.textContent = 'Feeding Times:'
details.append(listTitle)

//list and list elements
let list = document.createElement('ul')
let list1 = document.createElement('li')
let list2 = document.createElement('li')
let list3 = document.createElement('li')
list1.textContent = '9:00 am'
list2.textContent ='12:00 pm'
list3.textContent = '5:00 pm'
list.append(list1, list2, list3)
details.append(list)

body.append(details)


content.append(body)