const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
    mood: 'happy',
    newUser(){
        console.log(this)
        this.hobby = 'skydiving';
        this.premium = false;
        const keys = Object.keys(user);
        // console.log(keys)
        for (const key of keys){
            console.log(key);
            // console.log(this);  
        }
    }
};


user.newUser();

















