function compareArrays(arr1, arr2) {
	 return (arr1.length === arr2.length) && arr1.every((elem, index) => elem == arr2[index]);
  
}

function getUsersNamesInAgeRange(users, gender) {
 return users.filter((users) => gender === users.gender).map(users => users.age).reduce((acc, item, index, arr) => acc + item / arr.length, 0);	
  
}