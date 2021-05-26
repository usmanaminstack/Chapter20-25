//  question # 1
var firstName = prompt("Enter your first name");
var lastName = prompt("Enter your last name");
var fullName =  firstName + lastName;
document.write("Hi Mr " + fullName + "<br>")


//  question # 2
var phone = prompt("Enter your favourite phone");
var charsInPhone = phone.length;
document.write("Your favourite phone is: " +  phone + "<br>" + " length of string is:" + charsInPhone);

 //  question # 3
var pak = "Pakistani"
var pakLen = pak[7];
pakLen = 7 
document.write("string: " + pak + "<br>" + "index of 'n': " + pakLen);

 //  question # 5
 var pak = "Pakistani"
var pakLen = pak[3];
document.write("String: " + pak + "<br>" + "Character at index '3' : " + pakLen+ "<br>");

//  question # 6
var firstName = prompt("Enter your first name");
var lastName = prompt("Enter your last name");
var fullName =  firstName.concat(lastName);
document.write("Hi Mr " + fullName + "<br>")

//  question # 7
var ct = "Hyderabad";
var rep = ct.replace("Hyder", "Islam")
document.write("City:" + ct + "<br>" + "After Replacement:" + rep + "<br>")

//  question # 8
var msg = "Ali and Sami are best friends. They play cricket and football together.";
var msgrep = msg.replace(/and/g, "&");
document.write( msgrep + "<br>");

//  question # 9
var val = "427";
 var valrep = val.replace("427", 427);
 document.write( "Value: " + val + "<br>" + "Type:String" + "<br>" + "Value: " + valrep + "<br>" + "Type:Number" + "<br>");

//  question # 10
var name = prompt ("Enter your name");
document.write("User Input:" + name + "<br>"  + "Upper Case:"+ name.toUpperCase())


//  question # 11
var name1 = prompt ("Enter your name");
document.write("User Input:" + name1 + "<br>"  + "Upper Case:"+ name1.toLocaleUpperCase())

//  question # 12
var numb = 35.36;
 var valrep =  val.replace(35.36, 427);
 document.write( "Value: " + val + "<br>" + "Type:String" + "<br>" + "Value: " + valrep + "<br>" + "Type:Number" + "<br>");
