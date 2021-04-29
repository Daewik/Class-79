snames=[];
function submit()
{
    var n1=document.getElementById("s1").value;
    var n2=document.getElementById("s2").value;
    var n3=document.getElementById("s3").value;
    var n4=document.getElementById("s4").value;
    snames.push(n1);
    snames.push(n2);
    snames.push(n3);
    snames.push(n4);
    console.log(snames);
    document.getElementById('display1').innerHTML=snames;
    document.getElementById('sub').style.display='none';
    document.getElementById('sor').style.display='inline';
}
function sort()
{
    snames.sort();
    console.log(snames);
    document.getElementById('display1').innerHTML=snames;
}