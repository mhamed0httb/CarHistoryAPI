module.exports = class User {
    constructor(firstName, lastName, username, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.email = email;
    }

    static checkAttributes = (object) => {
        return object !== null
            && typeof object.hasOwnProperty('firstName')
            && typeof object.firstName === "string"
            && typeof object.hasOwnProperty('lastName')
            && typeof object.lastName === "string"
            && typeof object.hasOwnProperty('email')
            && typeof object.email === "string"
            && typeof object.hasOwnProperty('username')
            && typeof object.username === "string"
    }
}