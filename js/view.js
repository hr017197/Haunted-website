/*The only portion I didn;t get around to finishing in this portion was showvisitors. I implemented my table a different
way because I couldn't figure out how to get the data in so that I could combine certain parts. This made it so that 
the table would get repeated every time it was called. To compensate for that I added a delete rows function that would delete
the rows so that it can be rerendered everytime it is called without any repeats.*/

function renderTable(container, data) {//renders table from global 'visitors' object array

  deleteRows();
  var table = document.getElementById("visitorList").getElementsByTagName('tbody')[0];
  data.forEach(function(visitor){
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
      cell1.innerHTML = visitor.firstName + " " + visitor.lastName;
    var cell2 = newRow.insertCell(1);
      cell2.innerHTML = visitor.street + " " + visitor.city + " " + visitor.state + " " + visitor.zip;
    var cell3 = newRow.insertCell(2);
      cell3.innerHTML = visitor.phone;
    var cell4 = newRow.insertCell(3);
      cell4.innerHTML = visitor.email
    var cell5 = newRow.insertCell(4);
      cell5.innerHTML = visitor.id;
      cell5.style.display = "none";
    var cell6 = newRow.insertCell(5);
      cell6.innerHTML = '<a href="#"onClick="editVisitor(5)">Edit</a> <a href="#" onClick="deleteVisitor(this)">Delete</a>';
  });

  function deleteRows(){
    var rowcount = visitorList.rows.length;
    for (var i = rowcount -1; i>0; i--){
      visitorList.deleteRow(i)
    }
  }

}

    function showVisitors()  {//shows visitor container and hides all other site content containers 
    
    }
    function showList() {//shows visitor list and hides form 
        var x = document.getElementById("form");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
    }
    function showTable() {//shows visitor form and hides list 
        var x = document.getElementById("maintable");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
    }
    
    function clearForm() {//clears values on inputs so next time form is loaded they don't have old contents
      document.getElementsById("first-name").value = "";
      document.getElementsById("last-name").value = "";
      document.getElementsById("address").value = "";
      document.getElementsById("city").value = "";
      document.getElementsById("state").value = "";
      document.getElementsById("zip").value = "";
      document.getElementsById("email").value = "";
      document.getElementsById("phone").value = "";
      document.getElementsById("comment").value = "";
      //check to see if checkbox needs to be cleared as well
    }
