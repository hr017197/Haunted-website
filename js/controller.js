//I impolmented all of the parts for the controller. Some of them don't work because of the model and view parts that are unfinished.
$(document).ready(function(){
   
    initValidation();   //in validation.js, should set up submit event handler
 
    //initialize any of your button or other event handlers 
 });
 
 function loadVisitors() {
    //called when 'visitors' menu item is clicked 
    //calls view 'showVisitors' 
    //calls view 'renderTable' 
    //calls view 'showTable'
    showVisitors();
    renderTable($("#visitorList"), visitors);
    showTable();
 }
 
 function submitForm() {
     //called on form submit. Gets contents of form, creates visitor object, 
     //calls model 'modelAddVisitor' function
     //calls view 'renderTable' 
     //calls view 'showTable'
     var formdata = {};
     formdata["firstName"] = document.getElementById("first-name").value;
     formdata["lastName"] = document.getElementById("last-name").value;
     formdata["street"] = document.getElementById("address").value;
     formdata["city"] = document.getElementById("city").value;
     formdata["state"] = document.getElementById("state").value;
     formdata["zip"] = document.getElementById("zip").value;
     formdata["phone"] = document.getElementById("phone").value;
     formdata["email"] = document.getElementById("email").value;
     modelAddVisitor(formdata);
     renderTable($("#visitorList"), visitors);
     showList();
 }
 
 function addVisitor(visitor) {
   //called on 'click' of 'New Visitor' button 
   //calls view 'clearForm' to clear form contents
   //calls view 'showForm'
   clearForm();
   showForm();
 }
 
 function deleteVisitor(id) {
    //called on 'click' of 'delete' icon in visitor list 
    //calls model.js modelDeleteVisitor
    //calls view 'renderTable' 
    //calls view 'showTable'
    modelDeleteVisitor(id);
    renderTable($("#visitorList"), visitors);
    showTable();
 }
