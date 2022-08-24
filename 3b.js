class Student1{
   constructor(rollno,firstname,lastname){
    this.rollno = rollno;
    this.firstname=firstname;
    this.lastname=lastname;
   }

   getter(){
    console.log("This is Student1 getter")
    console.log(this.rollno+" "+this.firstname+ " "+ " "+this.lastname);
   }

}

s1 = new Student1(90,"Tarang","Sutaiya")
s1.getter()

class Student2{
    constructor(rollno,firstname,lastname){
     this.rollno = rollno;
     this.firstname=firstname;
     this.lastname=lastname;
    }
 
    getter(){
     console.log("This is Student2 getter")
     console.log(this.rollno+" "+this.firstname+ " "+ " "+this.lastname);
    }
    setter(firstname,lastname){
        this.firstname=firstname;
        this.lastname=lastname;

    }
 
 }

s2 = new Student1(90,"Tarang","Sutaiya")
s2.getter()
console.log("calling setter")

s2.set("Tarang R","Sutariya")
s2.getter()
