let temp;/* Third party temporary  */
const arr=[1,32,12,40,25,52,41,20,30,64,68,70,39,100]
function BubbleShort (arr){
for(let i=0; i<arr.length;i++){
    for(let j=i; j<arr.length;j++){
        if(arr[i]>arr[j]){
            // swap
            temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp
        }
    }
}
}
BubbleShort(arr);
arr