
// class User {
//     constructor(username,password){
//         this.username = username
//         this.password = password
//     }

//     printUsername() {
//         console.log("hii");
//     }
// }


// function User(username, password) {
//     this.username = username
//     this.password = password
// }


// User.prototype.printThis = function() {
//     console.log(this);
// }

// const sumit = new User("DilKaRaja123","1234")
// const abinash = new User("Danta","1234")
// sumit.printThis()
// abinash.printThis()
// console.log(abinash);

// console.log(this);



// const name = "abinash             "

// String.prototype.realLength = function (){
//     console.log(this.trim().length);
// }
// name.realLength()


// class Profile extends User {
//     constructor(username,password,bio){
//         super(username,password)
//         this.bio = bio
//     }

//     printBio(){
//         console.log(this.bio);
//     }
// }

// const sumitProf = new Profile("sumit","1234","I am don")
// sumitProf.printBio()
// sumitProf.printUsername()

// console.log(sumitProf instanceof Profile);
// console.log(sumitProf instanceof User);


// const sumit = new User("sumit","1234")
// sumit.printUsername()

