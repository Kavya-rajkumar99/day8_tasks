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
    const failedStuNames = scores.filter(stu => stu.marks<40).map(stu => stu.name);
    console.log(failedStuNames)
    
    //Method2
    const failedStuNames = scores.reduce((acc,curr) =>{
      if(curr.marks<40)
      {
        acc.push(curr.name)
      }
      return acc
    },[])
    console.log(failedStuNames)

  // Task 4
  // Find the Average marks
  // Method 1   
  const averageMarks = (scores.map(stu=>stu.marks).reduce((acc,curr)=>acc+curr,0))/scores.length;
  console.log(averageMarks)
  // Method2
  const totalMarks = scores.reduce((acc,curr) => acc + curr.marks,0)
  console.log(Number(totalMarks/scores.length).toFixed(2))
  // Task 5
  // Find the topper's name
  // Expected Output
  // "Debra Beard"
  const topper = scores.reduce((winner,stu)=>winner.marks>stu.marks?winner:stu)
  console.log(topper.name)
  // Only use
  // map, reduce, filter & destructuring
  
