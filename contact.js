//

function showData() {
    let name = document.getElementById("input-name").value
    let phone = document.getElementById("input-phone").value
    let email = document.getElementById("input-email").value
    let subject = document.getElementById("input-subject").value
    let message = document.getElementById("input-message").value

    console.log(name)
    console.log(phone)
    console.log(email)
    console.log(subject)
    console.log(message)

    //Dom mengirim nilai

    document.getElementById("input-name").value = ""

    //validasi
    if (name == ""){
        alert("Name input must not be empty")
    }
    
    if (phone == ""){
        alert("Phone input must not be empty")
    }

    if (email == ""){
        alert("Email input must not be empty")
    }

    if (subject == ""){
        alert("This input must not be empty")
    }

//email process
//DOM membuat elemet

    let emailReceiver ='karyateguh19@outlook.com'
    let a = document.createElement('a')
    a.href = `mailto:${emailReceiver}?subject=${subject}&body=Hello my name is ${name},${subject} ${message}, this is my phone ${phone}, please contact me ASAP` 

    a.click()

}