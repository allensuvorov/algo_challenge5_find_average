var arr = [1,3,5,7,20]; // answer: average is 7.2
average = (arr) => {

    var sum = 0;
    for (let i=0;i<arr.length;i++) sum +=arr[i];
    console.log(sum, sum/arr.length);
};
average(arr);
