        // const myAlertValue = alert('This is internal');
        // const myPromptValue = prompt('enter something');
        // const myConfirmValue = confirm('Yes or No');

        // console.log(myAlertValue, myPromptValue, myPromptValue);
         // console.log(Math.ceil(Math.random() * 50));

         function randomNumberGenerator(start, range) {
            if(!start || !range){
                console.log('please enter a valid range');
                return null;
            }
           return Math.ceil(Math.random() * range) + start;
        }
       console.log(randomNumberGenerator());
       //  console.log(randomNumberGenerator(4, 3));

       //  function randomNumberGenerator(start, range) {
       //     return Math.ceil(Math.random() * range) + start;
       //  }
       //  const myDate = new Date();
       // myDate.setHours(8);
       // myDate.getUTCDate();
       // myDate.getMonth() + 11;
       //  console.log(myDate);
       //  console.log(new Date(`${randomNumberGenerator(0,12)}
       //  /${randomNumberGenerator(0, 28)}
       //  /${randomNumberGenerator(0, 2000)}`));
       //control flow
       // const user = {};
       // if (randomNumberGenerator(0, 5) > 2 && user.age >= 18) {
       //     console.log("It was greater than 2 and they are of age");
       // } else if (user.age > 35){
       //     console.log('This is free to you');
       // } else{
       //     console.log('this doesn\'t work for you')
       // }
       // user.age > 17 ? console.log('yes they have access') : console.log('no access')
       // switch (user.age) {
       //     case 18:
       //         console.log('you are exactly 18');
       //         break;
       //     case 19:
       //         console.log('you are exactly 19');
       //         break;
       //     default: 
       //         console.log('you are some other age');
       //         break;
       // }