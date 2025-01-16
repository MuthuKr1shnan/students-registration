var a = document.getElementById("tbody");
function showCustomAlert(title, message) {
    document.getElementById('customAlertTitle').innerText = title;
    document.getElementById('customAlertMessage').innerText = message;
    document.getElementById('customAlert').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
  }

  
  function closeCustomAlert() {
    document.getElementById('customAlert').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
  }

  
  


function deleteMe(event) {
    event.target.parentElement.parentElement.remove();
}

function addData() {
    if (document.getElementById("name").value && document.getElementById("age").value &&  document.getElementById("course").value && document.getElementById("email").value !== "") {
        let nam = document.getElementById("name").value;
        let age = document.getElementById("age").value;
        let male = document.querySelector('input[name="option"]:checked');
        let female = male.value;

        let course = document.getElementById("course").value;
        let email = document.getElementById("email").value;
        a.innerHTML += `<tr><td>${nam}</td><td>${age}</td><td>${course}</td><td>${female}</td><td>${email}</td><td><button  class="dlt" onclick="deleteMe(event)" >delete</button></td></tr>`;

      
    } else {
        showCustomAlert('Warning !', 'Fill the Form before Add!!!');
    }
    
}

 document.getElementById("name").value = "";
        document.getElementById("age").value = "";
        male.value="";
        document.getElementById("course").value = "";
        document.getElementById("email").value = "";

