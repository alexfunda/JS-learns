"use strict";

//if (1) {
  // console.log('ok');
//} else {
  // console.log('error');
//}

//* const num = 50;
//if (num< 49) {
//   console.log('error');
//} else if (num > 100) {
//   console.log('много');
//} else {
//   console.log('ok');
//}

//(num === 50) ? console.log('ok') : console.log('error');


//const num = '50';

//switch (num) {
   //case '49':
      //console.log('none');
      //break;
   //case '100':
   //   console.log('none');
     // break;
  // case '50':
    //  console.log('done');
      //break;
   //default:
     // console.log('не в этот раз');
     // break;
//}



//let num = 50;

//while (num <= 55) {
  // console.log(num);
   //num++;
//}

//do {
//   console.log(num);
//   num++;
//}
//while (num < 55);

//for (let i = 1; i < 10; i++) {
//   if (i === 6) {
//      //break;
//      continue;
//   }
   
//   console.log(i);
//}



let numberOfFilms;

function start() {  
    numberOfFilms = +prompt ('сколько фильмов вы уже посмотрели?' );

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt ('сколько фильмов вы уже посмотрели?' );
    }
}

start();

const personalMovieOb = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   geners: [],
   privat: false
};


//function rememberMyFilms() {
    for (let i = 0; i < 2; i++){ 
        const a = prompt('Один из последних просмотренных фильмов', ""),
              b = prompt('На сколько оцените его?', "");
     
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
           personalMovieOb.movies[a] = b;
           console.log('done');
        }  else {
           console.log('error');
           i--;
        }
       
     }
//}

//rememberMyFilms();




//function detectPerconalLevel () {
//    if (personalMovieOb.count < 10) {
//        console.log('просмотрено довольно мало фильмов');
//     } else if (personalMovieOb.count >= 10 && personalMovieOb.count < 30) {
//        console.log('вы классический зритель');
//     } else if (personalMovieOb.count >= 30) {
//        console.log('вы киноман'); 
//     }  else console.log('произошла ошибка');
//}

//detectPerconalLevel ();

//function showMyDB (hidden) {
//    if (!hidden) {
//        console.log(personalMovieOb);
//    }
//}

//showMyDB(personalMovieOb.privat);

//function writeYourGeners () {
//    for (let i = 1; i <= 3; i++) {
//        personalMovieOb.geners[i - 1] = prompt(`ваш любимый жанр под номром ${i}`);
//    }
//}

//writeYourGeners ();



//console.log(personalMovieOb);





//let num = 20;

//function showFirstMassage (text) {
//    console.log(text);
//    console.log(num);
//}

//showFirstMassage ('hallo world');
//console.log(num);

//function calc(a, b) {
//    return (a + b);
//}

//console.log(calc(4, 3));
//console.log(calc(5, 6));
//console.log(calc(10, 6));

//function ret() {
//  let num = 50;

//
//
//  return num;
//}

//const anothernum = ret();
//console.log(anothernum);

//const logger = function() {
//    console.log('hallo');
//};

//logger();

//const calc = (a, b) => {
//    console.log('1');
//    return (a + b);
//};


//const str = "teSt";

//console.log(str[2] = 'd');

//console.log(str.toUpperCase());
//console.log(str.toLowerCase());
//console.log(str);

//const fruit = 'some fruit';

//console.log(fruit.indexOf('fruit'));

//const logg = 'hallo world';

//console.log(logg.slice(6, 11));

//console.log(logg.substring(6, 11));

//console.log(logg.substr(6, 5));

//const num = 12.2;
//console.log(Math.round(num));

//const test = '12.2px';
//console.log(parseInt(test));
//console.log(parseFloat(test));



//function first() {
   //do somthing
//   setTimeout(function() {
//      console.log(1);
//   }, 500);
   
//}

//function second() {
//   console.log(2);
//}

//first();
//second();

//function learnJS(lang, callback) {
//   console.log(`i learn ${lang}`);
//   callback();
//}

//function done() {
//   console.log('i learn it');
//}

//learnJS(`JavaScript`, done);


/*const options = {
   name: 'test',
   width: 1024,
   height: 1024,
   colors: {
      border: 'back',
      bg: 'red'
   },
   makeTest: function() {
      console.log('Test');
   }
};

options.makeTest();

const {border, bg} = options.colors;
console.log(border);

//console.log(Object.keys(options).length);

//console.log(options['colors'] ['border']);

//delete options.name;

//console.log(options);
/* let counter = 0;
for (let key in options) {
   if (typeof(options[key]) === 'object') {
      for (let i in options[key]) {
         console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
         counter++;
      }
   } else {
      console.log(`Свойство ${key} имеет значение ${options[key]}`);
      counter++;
   }
   
}
console.log(counter); */



/*const arr = [1, 12, 23, 6, 8];
arr.sort();
console.log(arr);

function compareNum(a, b) {
   return a - b;   
}

/* arr[99] = 0;
console.log(arr.length);
console.log(arr); */

/*arr.forEach(function(item, i, arr) {
   console.log(`${i}: ${item} внутри массива ${arr}`);
}); 

//arr.pop();
//arr.push(10);

//console.log(arr);

//for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
//}

/* for (let value of arr) {
   console.log(value);
} */

/*const str = prompt('', '');
const products = str.split('', '');
products.sort();
console.log(products.join('; ')); */



/* let a = 5,
    b = a;

b = b + 5;

console.log(b);
console.log(a);


const obj = {
   a: 5,
   b: 1
};

/* const copy = obj;

copy.a = 10;

console.log(copy);
console.log(obj); */

function copy (mainObj) {
   let objCopy = {};

   let key;
   for (key in mainObj) {
      objCopy [key] = mainObj [key];
   }

   return objCopy;
}

   const numbers = {
      a: 2,
      b: 5,
      c: {
         x: 7,
         y: 4
      }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10;

/*console.log(newNumbers);
console.log(numbers);*/

const add = {
   d: 17,
   e:20
};

const clone = Object.assign({}, add);

clone.d = 20;

/*console.log(add);
console.log(clone);*/

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'asdadadad';
console.log(newArray);
console.log(oldArray);

const video = ['yt', 'vimeo', 'rt'],
      blogs = ['wordpress', 'lj', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];

      console.log(internet);

      function log(a, b ,c) {
         console.log(a);
         console.log(b);
         console.log(c);
      }

      const num = [2, 5, 7];

      log(...num);

      const array = ['a', 'b'];

      const newAarray = [...array];

      const q = {
         one: 1,
         two: 2
      };

      const newObj = {...q};