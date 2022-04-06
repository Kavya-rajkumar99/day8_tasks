const avengers = [
    "Black Widow",
    "Hulk",
    "Iron Man",
    "Spider Man",
    "Thor",
    "Captain America"
]

// var names = avengers.filter(name=>name.length>=10)
// console.log(names)

const scores = [
    {
      marks: 32,
      name: "Yvette Merritt"
    },
    {
      marks: 57,
      name: "Lillian Ellis"
    },
    {
      marks: 22,
      name: "Mccall Carter"
    },
    {
      marks: 21,
      name: "Pate Collier"
    },
    {
      marks: 91,
      name: "Debra Beard"
    },
    {
      marks: 75,
      name: "Nettie Hancock"
    },
    {
      marks: 20,
      name: "Hatfield Hodge"
    }
  ];
  // [32, 57, 22]
  // Task 1
  // Print the name list - As an array
  // Expected Output
  // ["Yvette Merritt", "Lillian Ellis", "Mccall Carter", "Pate Collier" ,
  //  "Debra Beard", "Nettie Hancock",  "Hatfield Hodge"]

  const outputNames = scores.map(score => score.name);
  console.log(outputNames)
  
  // Task 2
  // >=40 pass.. find those student that passed (Use array method)
  // Expected Output
  // [{
  //     marks: 57,
  //     name: "Lillian Ellis"
  //   },
  //     {
  //     marks: 91,
  //     name: "Debra Beard"
  //   },
  //   {
  //     marks: 75,
  //     name: "Nettie Hancock"
  //   }]

  const studentsPassed = scores.filter(stu => stu.marks>=40)
  console.log(studentsPassed)
  
  // Task 3
  //  Find all the names who failed the exams (Array methods)
  // Expected Output
  //   ["Yvette Merritt",
  //   "Mccall Carter",
  //   "Pate Collier",
  //   "Hatfield Hodge"
  // ];
   
    //Method 1
    const output1 = scores.filter(stu => stu.marks<40).map(stu => stu.name);
    console.log(output1)
    
    //Method2
    const output2 = scores.reduce((acc,curr) =>{
      if(curr.marks<40)
      {
        acc.push(curr.name)
      }
      return acc
    },[])
    console.log(output2)

  // Task 4
  // Find the Average marks
  const averageMarks = (scores.map(stu=>stu.marks).reduce((acc,curr)=>acc+curr,0))/scores.length;
  console.log(averageMarks)
  // Task 5
  // Find the topper's name
  // Expected Output
  // "Debra Beard"
  
  // Only use
  // map, reduce, filter & destructuring
  
