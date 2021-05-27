/**
 * Builder is a design pattern which helps us in creation 
 * Its task is to separate the construction of a complex object from its representation so that the same construction process
 * can create different representations.
 * In simpler words it is used to build objects while encapsulating the process of building objects.
 *
 * In the example below we will look into the example of creating an object via builder pattern and without it to understand the difference
 * **/


class Person{

	constructor(name,isEmployee=false,isManager=false,hours,money=0,shoppingList=[]){
		this.name=name;
		this.isEmployee=employee;
		this.isManager=isManager;
		this.hours=hours;
		this.money=money;
		this.shoppingList=shoppingList;
	}
}

//we have a person class and now lets create its functions 

let person=new Person('John Doe',true,true,40,500,['macbook pro','dell xps','samsung cureved display']);


//we have successfully created a person object. However now we will try doing this with builder pattern 
//

//creating a builder for person class 
class PersonBuilder{

	constructor(name){
		this.name=name;
	}
	setIsEmployee(isEmployee){
	this.isEmployee= isEmployee||true;
		return this;
	}

	setIsManager(isManager){
	this.isManager=isManager||true
	}
	setHours(hours){
	this.hours=hours||0;
	}
	setMoney(money){
	this.money=money||0
	}
	setShoppingList(list=[]){
	this.shoppingList=list
	}
	build(){
	return new Person(this)
	}
}
}

//now our object creation changes when we use builder pattern 
let person_builder=new PersonBuilder('John Doe').setIsEmployee(true).setIsManager(false).setHours(50).setMoney(500).setShoppingList(['macbook pro','dell xps','samsung cureved display']).build();



//our object has now been created and we can use it the way we were supposed to use our person object. 
//using this pattern simplifies your code, and it makes it easier to handle large objects 
//
//
//hope you liked it 
