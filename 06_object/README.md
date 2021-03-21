# Objects and Oops

## q01

Given an array of objects of student's marks:

-   Print the name and total marks of each student.
-   Print the name of student whose total marks is highest.
-   Print the name of student whose total marks is lowest.
-   Print the average marks of the class in computer subject.
-   Print the grades of all students:  
     Grade A if total marks is higher than or equal to 75%,  
     Grade B if higher than or equal to 60%,  
     Grade C if higher than or equal to 35%,  
     Grade D if lower than 35%.
-   Print the total number of students passed and their names. Pass when total marks is greater than 35%.

```js script
const studentDetails = [
	{
		roll: "1",
		name: "Rohan Singh",
		maths: 86,
		science: 90,
		english: 75,
		computer: 85
	},
	{
		roll: "2",
		name: "Ritvik Patel",
		maths: 27,
		science: 30,
		english: 35,
		computer: 30
	},
	{
		roll: "3",
		name: "Neha Maurya",
		maths: 75,
		science: 69,
		english: 40,
		computer: 75
	},
	{
		roll: "4",
		name: "Mohit Verma",
		maths: 21,
		science: 31,
		english: 45,
		computer: 40
	},
	{
		roll: "5",
		name: "Karan Trivedi",
		maths: 70,
		science: 80,
		english: 35,
		computer: 60
	}
];
```

	```
	// print name and marks
	const printNameandMarks = (studentDetails) => {
		studentDetails.forEach(({name, maths, science, english, computer}) => {
			console.log(`Name: ${name} Total Marks: ${maths+science+english+computer}`)
		})
	}

	printNameandMarks(studentDetails)

	// print highest score
	const printHighest = (studentDetails) => {
		let score = {};
		studentDetails.forEach(({name, maths,english,science,computer}) => {
			score[name] = maths + english + science + computer;
		})
		//console.log(score)
		const highScore = Math.max(...Object.values(score));
		const topperName = Object.keys(score).find(key => score[key] === highScore)
		console.log(`Name: ${topperName}  Score: ${highScore}`)
	}

	printHighest(studentDetails)

	//print lowest score
	const printLowest = (studentDetails) => {
		let score = {};
		studentDetails.forEach(({name, maths,english,science,computer}) => {
			score[name] = maths + english + science + computer;
		})
		//console.log(score)
		const lowScore = Math.min(...Object.values(score));
		const studentName = Object.keys(score).find(key => score[key] === lowScore)
		console.log(`Name: ${studentName}  Score: ${lowScore}`)
	}

	printLowest(studentDetails)

	//print average score
	const avgCompScore = studentDetails => {
		let score = 0;
		studentDetails.forEach(({computer}) => score += computer);
		console.log(`Average in Computer: ${score/studentDetails.length}`)
	}

	avgCompScore(studentDetails);

	// grades of studnets
	const gradeStudnets = studentDetails => {
		let grades = {};
		studentDetails.forEach(({name, maths, english, science, computer}) => {
			let score = maths+science+english+computer/4
			if(score >= 75) {
				grades[name] = "Grade A"
			} else if (score >= 60) {
				grades[name] = "Grade B"
			} else if(score >= 35) {
				grades[name] = "Grade C"
			} else {
				grades[name] = "Grade D"
			}
			console.log(`Student Name: ${name}  Grade: ${grades[name]}`)
		})
	}

	gradeStudnets(studentDetails)

	```

## q02

Salary calculation using OOPS concept.

-   Create a Class using ES6 in JavaScript named Employee and assign necessary  
    data members and methods such as name, id, basic salary, HRA, Allowances; define getSalary method which will return the net salary.
-   Create two Instances of Employee with all necessary details.
-   Call the getSalary method of each instance and return the net salary based on your computation.

	```
	class Employee {
		constructor(id, name, basicSalary, hra, allowance) {
			this.id = id;
			this.name = name;
			this.basicSalary = basicSalary;
			this.hra = hra;
			this.allowance = allowance;
		}

		getSalary() {
			return this.basicSalary + this.hra + this.allowance;
		}
	}

	const e1 = new Employee(1, "abcd", 2000, 500, 500);
	const e2 = new Employee(2, "pqrs", 5000, 200, 200);

	console.log(`Net Salary: ${e1.name}: ${e1.getSalary()}`);
	console.log(`Net Salary: ${e2.name}: ${e2.getSalary()}`);

	```

## q03

Bank Account (Object Oriented Programming in JavaScript)

-   Create a class and define data members such as name, bank account number,  
    account balance, account type, ifsc and name it as BankAccount.
-   Create three Instances(three customers) of BankAccount with all necessary details.
-   Print the name of customers and their account balances.
-   Calculate the average account balance from all the instances.

	```
	class BankAcccount {
		constructor(accountNumber, name, balance, type, ifsc) {
			this.accountNumber = accountNumber;
			this.name = name;
			this.balance = balance;
			this.type = type;
			this.ifsc = ifsc;
		}
	}
	const accounts = [
		new BankAcccount(123, "abc", 500, "current", 1),
		new BankAcccount(456, "mno", 1000, "saving", 1),
		new BankAcccount(789, "xyz", 2000, "saving", 2)
	]
	let totalCash = 0
	accounts.forEach(({name, balance}) => {
		console.log(`Account Name: ${name}  Balance: ${balance}`);
		totalCash += balance;
	})

	console.log(`Average Balance: ${totalCash/accounts.length}`)
	```

## q04

Given an array of objects of items in cart, print:

-   the total No. of items
-   the total cart value
-   the total discounted value(sum of dicounted values on each item) based on the given discount
-   total tax amount (18% tax, calculated on total cart value)

```js script
const cartItems = [
	{
		id: "101",
		name: "Oreo",
		count: 2,
		price: 30.0,
		discount: 0.18
	},
	{
		id: "102",
		name: "Red Bull",
		count: 1,
		price: 99.0,
		discount: 0.15
	},
	{
		id: "103",
		name: "Dairy Milk Silk",
		count: 3,
		price: 175.0,
		discount: 0.05
	},
	{
		id: "104",
		name: "Pulse Candy Pack",
		count: 1,
		price: 135.0,
		discount: 0.2
	}
];
```

	```
	// total items
	const totalItems = cartItems => console.log(`Total Items: ${cartItems.length}`)
	totalItems(cartItems)

	```