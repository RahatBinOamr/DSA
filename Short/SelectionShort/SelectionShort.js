const arr=[1,32,12,40,25,52,41,20,30,64,68,70,39,100];
let temp;
function SelectionShort(arr){
    for (let i = 0; i < arr.length ; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
          if (arr[j] < arr[minIndex]) {
            minIndex = j;
          }     
        }
        temp=arr[i];
        arr[i]=arr[minIndex];
        arr[minIndex]=temp;
    }
}
SelectionShort(arr)
arr