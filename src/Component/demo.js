const arr = 123899778;
const str = arr.toString();
const ca = str.split('');
console.log(ca);


   const acc = str.substring(0,5)
   let result = '';
   
   for (let i = 0; i<str.length; i++) {
      if(i<4) {
         result=result+"*";
      }else{
         result= result+str[i]
      }
   }
   console.log(result);

   const str2 = "my name is parakash";
   let reversearray = [];
   let sum1 = 0;

   for (let i = str2.length-1; i>0; i--) {
      reversearray[sum1++] = str2[i]
   }
   console.log(reversearray)


const arr4 = [12,78,14,10,19];
let reverse = [];
let count = 0;

for (let i = arr4.length-1; i>=0; i--) {
   reverse[count++]=arr4[i]
}
console.log(reverse)