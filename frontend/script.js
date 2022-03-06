let inputSection = document.getElementById("input-field");
let inputSection2 = document.getElementById("input-field-2");
let inputSection3 = document.getElementById("input-field-3");
let inputSection4 = document.getElementById("input-field-4");

function cancelExec() {
  inputSection.value = "";
  inputSection2.value = "";
  inputSection3.value = "";
  inputSection4.value = "";
}

function sendExec() {
  let newMessage = inputSection4.value;
  var output = Number(inputSection3.value);

  //console.log(typeof(output)=== Number)
  if (
    inputSection.value === "" ||
    inputSection2.value === "" ||
    inputSection3.value === "" ||
    inputSection4.value === ""
  ) {
    window.alert("All input boxes must be filled!");
  } else if (typeof output !== Number) {
    window.alert("Phone number field must only contain numbers");
  } else if (newMessage.length > 100) {
    window.alert("Message field cannot have more than 100 characters");
  } else {
    window.alert(`Welcome ${inputSection.value}`);
  }
}
