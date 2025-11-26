// custom version of maps not the built in one

// my attempt:
// function myMap(arr,callback){
//     let newArr = [];
//     for(i=0;i<arr.length;i++){
//         newArr = callback(newArr.push(arr[i]),i,arr);
//     };
//     return newArr;
// }; // does not work

const todos = [
    {
        id: 1,
        text: 'walk the cat',
        priority:'high'
    },
      {
        id: 2,
        text: 'walk the chicken',
        priority:'medium'
    },
      {
        id: 3,
        text: 'walk the cow',
        priority:'low'
    },
      {
        id: 4,
        text: 'put out fire',
        priority:'very high'
    },
];

function myMap(arr,callback){
    const newArr = [];
    for(i=0;i<arr.length;i++){
        const val = callback(arr[i],i,arr);
       newArr.push(val);
    };
      return newArr;
};

let mappedArray = myMap(todos,function(todo){
       return todo.priority;
});

let repStr = myMap(['a','b','c','d','e'],function(str,index){
       return str.repeat(index);
});

// map returns a new array that is a copy based off the riginal array, it does not change the original array.