/*
There are two problems - medium and advanced. 

Pick ONE problem to solve. If you have time, solve the other problem.

Toy problem 1 (MEDIUM):
Write a function scramble(str1,str2) that returns true if part of str1 characters
can be rearranged to match str2, otherwise returns false.

For example:
str1 is 'rkqodlw' and str2 is 'world' the output should return true.
str1 is 'satak' and str2 is 'steak' should return false.
str1 is 'steak' and str2 is 'steakk' should return false, because there is only one k in str1

Try to optimize your solution for time complexity.
*/


function scramble(str1,str2){
var arrSTr=str2.split('');//["w", "o", "r", "l", "d"]
var resStr='';//''

for (var i = 0; i < arrSTr.length; i++) {////n
	var index=str1.indexOf(arrSTr[i])//'w'==>6 in str1////n
	resStr=index;
	if(index<0){
		return false;
	}
	str1=str1.substring(0,index)+str1.substring(index+1)
	}
return true

};

//What is the time complexity of your solution?
var timeComplexity = 'O(n^2)';


/*
Toy problem 2 (Advanced):
Rewrite your favorite splice method on array prototype.
The method you write should produce the same results as the original. 
The method should take 2 or more arguments:

The 'from' argument provides an integer number, 0 or greater, to be used as 
the first index to start changing the array from.

The 'count' argument provides an integer number, 0 or greater, that counts how many 
items should be removed from the 'from' index forward.

Any further arguments passed in will be new items to be inserted into the array, 
starting from the 'from' index. These extra arguments are optional.

The method should return an array containing all items removed by the splice, 
or an empty array if no items were removed (you can check how it works with built-in splice)

The original array should be modified after running splice.

Example:
var arr = [1,2,3,4,5,6];
//Remove 2 elements starting at index 2 and insert 7:
arr.splice(2,2,7);//should return [3,4] - the elements that were removed
console.log(arr); //should [1,2,7,5,6] - the original array was modified
*/

Array.prototype.splice = function(from,count){
	// var arr=[];
	// var resArr=[];

	// for (var i = 0; i < this.length; i++) {
	// 	(if(indexOf()))
	// }


}


