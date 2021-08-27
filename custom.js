// Task-4
let  multiplcation = (a,b) => {
    var sum=0;
for(var x=1; x<=b; x++){
sum +=a;
}
return sum;
}

console.log(multiplcation(4,3));

// Task-5
const getHelloWorld = (name)=> {
    let regex = /^JS$/;
    const x = regex.test(name) &&  'Hello World' || null;
    return x ;
   }
   console.log(getHelloWorld('JS'));
   console.log(getHelloWorld('js'));
   console.log(getHelloWorld('sdjsdssd'));

// Task-6
const isPalindrome = (data)=> {
	let reach = data.toLowerCase().replace(/\s/g, ''),
    half = reach.length,
    center = Math.floor(half/2);

    for ( var i = 0; i < center; i++ ) {
        if (reach[i] !== reach[half - 1 - i]) {
            return false;
        }
    }

    return true;
}
console.log(isPalindrome('Never Odd Or Even'));
console.log(isPalindrome('abcba'));
console.log(isPalindrome('abcda'));

// Task-7
const user = {
    id: 1,
    name: "Tom L",
    age: 15
}
  
const isValidateUser = (user) => {

// check if the js object has values
for (var item in user) {
if(!user[item]) return false
}
// if the name has more than one name partials
return user.name.split(' ').length > 1 ? true:false
return true
}

console.log(isValidateUser(user));


// Task-8
const nameCheck = (name) => {
    const returnFunc = (reason,val) => {
        if (!val) console.log(reason);
        return false;
    }
    const returnFuncT = (val) => {
        if (val) console.log('correct');
        return false;
    }
    let nameArr = name.split(' ');
    const status1 = nameArr.length > 1 && nameArr.length < 4 ? true : false;
    returnFunc('name is too long or too short',status1);


    //const statu4 = nameArr.length == 2 && nameArr[0] == 2 && nameArr[0];

    const status6 = nameArr[nameArr.length - 1].length > 1;
    returnFunc('last name is not acceptable',status6);
    const status7 = nameArr[nameArr.length - 1].length == 2 && nameArr[nameArr.length - 1][1] !== '.';
    returnFuncT(status7);
    for (var i in nameArr) {
        let word = nameArr[i];
        let c;
        let n = 0;
        let l = word.length;
        const status2 = (word[0] == word[0].toUpperCase());
        returnFuncT('not a uppercase',status2);
        const status3 = l == 2 && word[l - 1] == '.';
        returnFuncT(status3);

        if (i == 2) {
            let status4 = nameArr[0].length > 2 && nameArr[1].length > 2;
            returnFunc('first name and middle name is incorrect',status4);
            if (status4) {
                let status5 = nameArr[0][1] !== '.' && nameArr[1][1] !== '.';
                returnFunc('first name and middle name initial method is wrong',status5);
            }
            //console.log(nameArr[0][1]);
        }

        // did not require
        while (n < word.length) {
            //const status = 
            n++;
        }
    }
}

nameCheck('Jwew Swww rww');