# webservices_test

## Overview

### [POST] Create user
Allows the creation of a single user.

|                  |                   |
|--------------------------------------|
|Requires auth?    | No                |
|Who can use it?   | Owner and users   |
|Response formats  | Application/json  |

*HTTP request : POST -> user/create

#### Parameters :
``` Javascript
{
  'first_name': 'Alicia', // optionnal
  'last_name': 'Tavernier', // optionnal
  'age': 32, // required
  'gender': 'female', // optionnal
  'height': 1.57, // optionnal
  'weight': 60, // optionnal
  'city': 'Paris', // optionnal
  'city_code': '75010', // optionnal
  'street_number': 31, // optionnal
  'street_name': 'rue Jacques Louvel-Tessier', // optionnal
  'phone': '0102030405', // optionnal
  'image_profil': 'https://www.google.fr/url?sa=i&url=http%3A%2F%2Fmadame.lefigaro.fr%2Fcelebrites%2Fgrumpy-cat-nest-plus-170519-165163&psig=AOvVaw2u9eZ7knNDIh_mD_DNIXCj&ust=1581419859144000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLj7jZruxucCFQAAAAAdAAAAABAJ', // optionnal
  'email': 'tavernieralicia00@gmail.com', // required
  'password': '1234' // required
}

```

#### Response : 
``` Javascript
{
  'id': '2343ihd9',
  'first_name': 'Alicia', // optionnal
  'last_name': 'Tavernier', // optionnal
  'age': 32, // required
  'gender': 'female', // optionnal
  'height': 1.57, // optionnal
  'weight': 60, // optionnal
  'city': 'Paris', // optionnal
  'city_code': '75010', // optionnal
  'street_number': 31, // optionnal
  'street_name': 'rue Jacques Louvel-Tessier', // optionnal
  'phone': '0102030405', // optionnal
  'image_profil': 'https://www.google.fr/url?sa=i&url=http%3A%2F%2Fmadame.lefigaro.fr%2Fcelebrites%2Fgrumpy-cat-nest-plus-170519-165163&psig=AOvVaw2u9eZ7knNDIh_mD_DNIXCj&ust=1581419859144000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLj7jZruxucCFQAAAAAdAAAAABAJ', // optionnal
  'email': 'tavernieralicia00@gmail.com', // required
  'password': '1234' // required
}
```


### [GET] Show user
Get an user by id

|                  |                   |
|--------------------------------------|
|Requires auth?    | No                |
|Who can use it?   | Owner and users   |
|Response formats  | Application/json  |

*HTTP request : GET -> user/show/:id

#### Parameters :
``` Javascript
```
