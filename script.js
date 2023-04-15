var firstName=labelcreate("label", "for", "fisrtName", "Firstname");
var br=linebreaker("br");
var firstnameInput=inputcreate("input", "type", "text", "id", "firstName");
var br1=linebreaker("br");

var lastName=labelcreate("label", "for", "lastName", "Lastname");
var br2=linebreaker("br");
var lastnameInput=inputcreate("input", "type", "text", "id", "lastName");
var br3=linebreaker("br");

var middlename=labelcreate("label", "for", "middleName", "Middlename");
var br4=linebreaker("br");
var middlenameInput=inputcreate("input", "type", "text", "id", "middleName");
var br5=linebreaker("br");

var email=labelcreate("label", "for", "email", "Email");
var br6=linebreaker("br");
var emailInput=inputcreate("input", "type", "email", "id", "email");
var br7=linebreaker("br");

var password=labelcreate("label", "for", "password", "Password");
var br8=linebreaker("br");
var passwordInput=inputcreate("input", "type", "password", "id", "password");
var br9=linebreaker("br");

document.body.append(firstName,br,firstnameInput,br1,middlename,br4,middlenameInput,br5,lastName,br2,lastnameInput,br3,email,br6,emailInput,br7,password,br8,passwordInput,br9);

function labelcreate(tagname, attrname, attrvalue, content)
{
    var element= document.createElement(tagname);
    element.setAttribute(attrname, attrvalue);
    element.innerHTML= content;
    return element;
}

function linebreaker(tagname)
{
    var element=document.createElement(tagname);
    return element;
}

function inputcreate(tagname, attrname, attrvalue, attrname1,attrvalue1){
 var element=document.createElement(tagname);
    element.setAttribute(attrname,attrvalue);
    element.setAttribute(attrname1,attrvalue1);
    
    return element;
}


