function validateAll(event){
    event.preventDefault(); // Prevent default form submission
    console.log('Validation function called'); // Debug statement

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const gender = document.getElementById("gender");
    const dob = document.getElementById("dob");

    const today = new Date();

    if (name.value.trim() === "" || email.value.trim() === "" || phone.value === "" || gender.value === "" || dob.value === "") {
        alert('Please fill out all fields.');
    } else if(!email.value.endsWith("@gmail.com")) {
        alert('Email must end with "@gmail.com"');
    } else if(!phone.value.startsWith("0")) {
        alert('Phone number must start with "0"');
    // }else if(input.toLowerCase() !== 'male' || input.toLowerCase() !== 'female'){
    // }else if (!(input.toLowerCase() === 'male' && input.toLowerCase() === 'female')) {
        // alert("Gender must be either Male or Female"); (open minded)
    } else if(new Date(dob.value) > today) {
        alert("DoB date cannot be in the future!");
    } else {
        alert('Form submitted successfully!');
        console.log('Redirecting to HomePageIndex.html'); // Debug statement
        window.location.href = '../Homepage/HomePageIndex.html'; // Redirect to HomePageIndex.html
    }
}
