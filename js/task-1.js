const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,

};

const users = () => {
user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;
console.log(user);

const keys = Object.keys(user);
// console.log(keys);

for (const key of keys) {
    console.log(key);
    console.log(user[key]);
}



}

users();











