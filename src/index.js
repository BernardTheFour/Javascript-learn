let {User} = require('./user');

module.exports ={
    run: (elementID) => {
        let element = document.getElementById(elementID);
        let user = new User();

        // get user with ID = 1
        user.loadUser(1)
        .then(result =>{
            var print = `ID: ${user.id}`
            print += `<br>Name: ${user.name}`
            print += `<br>Email: ${user.email}`
            
            element.innerHTML = print
            console.log("Print A")
        })
    },

    run2: (elementID) => {
        let element = document.getElementById(elementID);

        element.innerHTML = "<p>Ini text</p>"        
        console.log("Print B")
    }
}