/*I finished the graph adding portion and attempted the delete portion but couldn't get it to work how I wanted. 
The code for that portion is still all there, it just isn't actually being used.*/

class Visitor {
    constructor(id, firstName, lastName, street, city, state, zip, phone, email){
       this.id = id;
       this.firstName = firstName;
       this.lastName = lastName;
       this.street = street;
       this.city = city;
       this.state = state;
       this.zip = zip;
       this.phone = phone;
       this.email = email;
    }
    get fullName(){ //returns concatenated first and last name fields 
      return this.firstName + " " + this.lastName;

    }
    get fullAddress() {//returns concatenated address fields
      return this.street + " " + this.city + " " + this.state + " " + this.zip;
    }
   }
 
 //static data -- can create as many as wanted
 //need a counter for the id
 let visitors = [ 
  new Visitor(1,"Ken","Jenson","1234 W. Main St.","Mapleton","Utah","84664","801-444-5555","ken@gmail.com"),
  new Visitor(2,"Ben","Jenson","1234 W. Main St.","Mapleton","Utah","84664","801-444-5555","ben@gmail.com")
 ];
 let nextid = 3; //out of function so it will be changed next time

 function modelAddVisitor(visitor) {//adds new visitor object to your array
   newitem = new Visitor(nextid, visitor.firstName, visitor.lastName, visitor.street, visitor.city, visitor.state, visitor.zip, visitor.phone, visitor.email);
   visitors.push(newitem);
   nextid += 1; //for the id of the person
}


 function modelDeleteVisitor(id) {//removes visitor object with given 'id' from array
  index = findVisitorIndex(id);
  visitors.splice(index);

}

 function findVisitor(id) {//returns visitor object with given 'id' from array
    visitors.forEach(function(visitor){
      if (visitor.id == id){
        return visitor; //return the visitor object of id
      }
    });
}
 function findVisitorIndex(id) {//returns index in the array of the visitor object with given 'id'.  Handy when trying to delete an object
    object = findVisitor(id);
    return visitors.findIndex(object); 
}

//I attempted a different version of delete here
/*
function modelDeleteVisitor2(td);{
  row = td.parentElement.parentElement;
  document.getElementById("visitorList").deleteRow(row.rowIndex);
}
*/

function editVisitor(id){//edit visitor, just shows pop up right now
  prompt("Editing visitor " + toString(id))
 }