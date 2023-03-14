function labels(tagname,attname,attvalue,content){
    var ele=document.createElement(tagname);
    ele.setAttribute(attname,attvalue);
    ele.innerHTML=content;
    return ele;
}

function linebreak(tagname){
    var br=document.createElement(tagname);
    return br;
}

function inputs(tagname,attname,attvalue,attname1,attvalue1,attname2,attvalue2){
    var ele1=document.createElement(tagname);
    ele1.setAttribute(tagname,attname);
    ele1.setAttribute(attname1,attvalue1);
    ele1.setAttribute(attname2,attvalue2);
    return ele1;
}
var firstname=labels("label","for","firstname","Firstname");
var br=linebreak("br");
var inputfirst=inputs("input","type","text","name","first","id","firstname")
var br1=linebreak("br");

var middletname=labels("label","for","middletname","Middletname");
var br2=linebreak("br");
var inputmiddle=inputs("input","type","text","name","middle","id","middletname")
var br3=linebreak("br");

var lasttname=labels("label","for","lastname","Lastname");
var br4=linebreak("br");
var inputlast=inputs("input","type","text","name","last","id","lastname")
var br5=linebreak("br");

var email=labels("label","for","email","Email")
var br6=linebreak("br");
var inputemail=inputs("input","type","emil","name","emil","id","email")
var br7=linebreak("br");

var password=labels("label","for","password","Password")
var br8=linebreak("br");
var inputpass=inputs("input","type","password","name","pass","id","password")
var br9=linebreak("br");

document.body.append(firstname,br, inputfirst, br1,middletname,br2,inputmiddle,br3, lasttname,br4,inputlast,br5,email,br6,inputemail,br7,password,br8,inputpass,br9);
