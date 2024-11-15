const person1 = {
    age: 33,
    sayAge: () => {
        console.log(`Age: ${this.age}`);
    },
    sayAgeWithContext: function () {
        console.log(`Age: ${this.age}`);
    }
};

const say = person1.sayAgeWithContext;
say(); // Выведет "Age: undefined" 

const boundSay = person1.sayAgeWithContext.bind(person1);
boundSay(); // Выведет "Age: 33"