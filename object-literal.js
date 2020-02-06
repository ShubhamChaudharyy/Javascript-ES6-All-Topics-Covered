 //object literals
 //passing Object literal to function

 
function addressMaker(address)
 {  const {city,State}=address
    const newAddress=
        {
            city,
            State
        }
    const {city:A,State:B}=newAddress //destructuring
    document.getElementById('demo').innerText=`${A} ${B}`
}
addressMaker({city:"New Delhi",State:"Delhi"})//here the objectified information will be passed to argument and address will be having object literals.
