const personalInformation={
    firstName:"Shubham",
    lastName:"Choudhary",
    city:"New Delhi",
    state:"Delhi",
    zipCode:"110026"

}
//if you want to access personalInformation.firstname and personalInformation.lastname then without "." operator you can do it by doing so:
const {firstName:fn /*fn is alias that can be used later*/ ,lastName:ln /* ln is alias that can be used later*/ }=personalInformation 
document.getElementById('demo').innerText=`${fn} ${ln}`
