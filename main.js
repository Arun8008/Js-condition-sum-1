let age=prompt("Enter your age");
let test=confirm("Test Pass Or Fail");
if(age>=18){
   if(test==true){
         document.write("Eligible For License")
   }
   else if(test==false){
      document.write("Train Again")
  }
   else{
      document.write("Contact Diving Class")
   }
}
else{
   document.write("Not Eligible")
}