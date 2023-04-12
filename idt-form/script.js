function generateJSON() {
    // Create the HTML form elements
    const form = document.createElement("form");
  
    const nameLabel = document.createElement("label");
    nameLabel.textContent = "Name:";
    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.id = "name";
    nameInput.name = "name";
  
    const ageLabel = document.createElement("label");
    ageLabel.textContent = "Age:";
    const ageInput = document.createElement("input");
    ageInput.type = "number";
    ageInput.id = "age";
    ageInput.name = "age";
  
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = "Generate JSON";
    button.addEventListener("click", function() {
      // Get the values from the form
      const name = document.getElementById("name").value;
      const age = document.getElementById("age").value;
  
      // Create a JavaScript object with the form values
      const person = {
        "name": name,
        "age": age
      };
  
      // Convert the object to a JSON string
      const json = JSON.stringify(person);
  
      // Download the JSON file
      const downloadLink = document.createElement("a");
      downloadLink.download = "person.json";
      downloadLink.href = "data:text/json;charset=utf-8," + encodeURIComponent(json);
      downloadLink.click();
    });
  
    // Add the form elements to the form
    form.appendChild(nameLabel);
    form.appendChild(nameInput);
    form.appendChild(document.createElement("br"));
    form.appendChild(ageLabel);
    form.appendChild(ageInput);
    form.appendChild(document.createElement("br"));
    form.appendChild(button);
  
    // Add the form to the page
    document.body.appendChild(form);
  }
  