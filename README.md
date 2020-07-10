# _TapRoom with Redux_

#### _Epicodus Redux Week 3 Project with Jest_

#### By _**Khan Sahab**_

## Description

_This React Project converted to redux allows the users to add Kegs of drinks that are than shown in pints. Different products can be added with information on name, Brand, price per pint, alcohol contents. User can buy the product per pint and it'll reduce the quantity by pints. User can view the details on any product on a separate screen. This project contains 9 tests to test reducers in src/reducer/ directory_

### Tree structure

[componentTree](./taproom.jpg)




## Setup/Installation Requirements for running the web site

1. Clone this repository from GitHub.
2. In the terminal executs "npm install"
3. Than execute "npm run start". There display would guide you thru various interface views.

## Precaution 
#### To fill up the form of adding Kegs, it requires a URL for the picture of the Drinking Product. For Teacher's ready reference I am placing four picture addresses of various cities in Turkey to fill the form. You'll not see the picture of a drink with each product but each drink you add with the underneath URL's would be represented by a city of Turkey

https://www.ebrdgreencities.com/assets/Uploads/180881cd07/IZMIR.png
https://www.ephesus.us/upload/1553941149_IMG_7440.jpg
https://comps.canstockphoto.com/sunrise-in-goreme-city-turkey-stock-photograph_csp57462296.jpg
https://z7f7y8d6.stackpathcdn.com/wp-content/uploads/2018/05/Gibraltar-rock-1024x683.jpg



## Setup/Installation Requirements for running the tests in Jest

1. Clone this repository from GitHub.
2. In the terminal executs "npm install"
3. Than execute "npm run test". There would 9 tests that would run and pass. One of test even add a keg and see whether it added the Keg correctly. You can go to src/__tests__/reducer/index.js to see the tests coded in Jest.



## Known Bugs

None. All the basic requirements of Project are fulfilled fully.
 
## Support and contact details

_Have a bug or an issue with this application? Email post_khan@yahoo.com_

## Technologies Used

* React
* Redux with actions and reducers
* CSS
* JS functional Programming
* HTML
* jest

### Specs
| Spec | Input | Output |
| :------------- | :------------- | :------------- |
| **User can add Kegs on the main page** | User Input:"click 'add kegs' and enter price, brand, contents, Keg quantity” | Output: "A box displayed with the picture of the product and information" |
| **User can buy product in pints** | User Input:”click the buy button on any product” | Output: "that product is reduced in quantity by a pint" |
| **User can view details of a particular product** | User Input:”click 'view detail' on any product box” | Output: "That box is displayed in a separate page with all the details available" |


### License

This software is licensed under the MIT license.

Copyright (c) 2020 **_Khan Sahab_**