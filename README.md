# **Pizza Time**
### This is a web application that is a mock up of a pizza parlor site.

 ### _Contributor(s) and Contact Info_
> Logan Roth diamondintheroth@gmail.com - [Github(Lo-GR)](https://github.com/Lo-GR)

<br/>

## _Technologies Used_

* **HTML**
* **CSS**
* **Markdown**
* **Gitbash**
* **JavaScript**

## _Description_
This web application will give the user a list of ingredient options and then tell the user what they ordered and at what cost. The pizza object is hard coded at the start of the page but it is assigned properties based off of a Pizza Constructor. There is a secret menu that is accessible by following the dialogue tree on the order summary page. 

This is a practice project for practicing Constructors and Objects in a class at Epicodus.

## _Setup/Installation_

> Repository: https://github.com/Lo-GR/pizzaparlor.git
1. Clone the above repository from Github
2. Navigate to the root directory of the project in your terminal and type "open index.html" to view the project in your default browser.
3. Open the project in your text editor to view the code.

## _Known Bugs_
* No known bugs at this time. Please contact a contributor to report any bugs found during use.

## _Future Updates_
* Add an Order Constructor and assign IDs to pizzas made in order to add multiple pizzas.
* Images and animations

## _Specs/Tests_

Describe: Pizza.prototype.findPrice()

Test: "it returns a price based on the property of "this.price" from a Pizza object"
>Expect(Pizza.prototype.findPrice().toEqual(10))

Test: "it returns a price adjusted by having bacon be a property of a pizza object"
>Expect(Pizza.prototype.findPrice().toEqual(11))

Test: "it returns a price adjusted by having Pineapple be a property of a pizza object"
>Expect(Pizza.prototype.findPrice().toEqual(12))

Test: "it returns a price adjusted by the size property of a pizza objet, 'expect' based on selecting small"
>Expect(Pizza.prototype.findPrice().toEqual(8))



## _License_

[_MIT_](https://opensource.org/licenses/MIT)

Copyright (c) 2021, Logan Roth.

Please contact Contributor for further use information or if you would like to make a contribution.