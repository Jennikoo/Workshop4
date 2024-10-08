// Button 1 - Change "Workshop 4" heading text
document.getElementById("btn1").onclick = function() {
    document.getElementById("workshop4").innerText = "Modified Heading!";
};

// Button 2 - Change style of "Exercise 2" heading
document.getElementById("btn2").onclick = function() {
    const heading = document.getElementById("exercise2");
    heading.style.fontSize = "30px";
    heading.style.fontStyle = "italic";
    heading.style.color = "red";
    heading.style.backgroundColor = "yellow";
};

// Button 3 - Append a paragraph and change the background
document.getElementById("btn3").onclick = function() {
    const newParagraph = document.createElement("p");
    newParagraph.innerHTML = "<i>Lorem ipsum dolor sit amet...</i>";
    document.body.appendChild(newParagraph);

    // Change the background of the entire page
    document.body.style.backgroundColor = "lightblue";

    // Add an image after the paragraph
    const image = document.createElement("img");
    image.src = "images/logo.png"; // Add your logo image here
    document.body.appendChild(image);
};

// Hide "me" element
document.getElementById("hideMe").onchange = function() {
    if (this.checked) {
        document.getElementById("me").style.display = "none";
    }
};

// Show "me" element
document.getElementById("showMe").onchange = function() {
    if (this.checked) {
        document.getElementById("me").style.display = "block";
    }
};

// Change font size of elements with class "surprise"
document.getElementById("surpriseCheckbox").onchange = function() {
    const surpriseElements = document.getElementsByClassName("surprise");
    for (let i = 0; i < surpriseElements.length; i++) {
        surpriseElements[i].style.fontSize = "20px";
    }
};

// Change image based on the selected option
document.getElementById("carSelection").onchange = function() {
    const selectedValue = this.value;
    alert("You selected: " + selectedValue);

    // Update the image source based on the selected car
    const carImage = document.getElementById("carimage");

    // Assign appropriate image URLs based on the selected option
    if (selectedValue === "car1") {
        carImage.src = "https://images.unsplash.com/photo-1718637169593-766ec5a4f776?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fHBvcmNoZXxlbnwwfHwwfHx8MA%3D%3D";
    } else if (selectedValue === "car2") {
        carImage.src = "https://images.unsplash.com/photo-1531850959096-cfbb6f26c5a8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    } else if (selectedValue === "car3") {
        carImage.src = "https://images.unsplash.com/photo-1536922645426-5d658ab49b81?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    }
};


// Add a red border when hovering over the image
document.getElementById("carimage").onmouseover = function() {
    this.style.border = "5px solid red";
};

// Remove the border when the mouse leaves the image
document.getElementById("carimage").onmouseout = function() {
    this.style.border = "none";
};

// Move the image
function moveImage() {
    const img = document.getElementById("carimage");
    img.style.position = "relative";
    img.style.left = "200px"; // Adjust as necessary
    img.style.top = "0px"; // Adjust as necessary to keep it visible
}

// Animate the image back and forth
function doMove() {
    const img = document.getElementById("carimage");
    let position = 0;
    let direction = 1; // 1 for moving right, -1 for moving left

// Set initial position and style
    img.style.position = "relative"; // Ensure relative positioning for animation
    img.style.left = "0px"; // Start from the original position

    const interval = setInterval(function() {
        if (position >= 300) {
            direction = -1; // Change direction to left
        } else if (position <= 0) {
            direction = 1; // Change direction to right
        }
        position += direction; // Update position based on direction
        img.style.left = position + "px"; // Apply the new position
    }, 10);
}

// Fade out the image
function fadeOut() {
    const img = document.getElementById("carimage");
    let opacity = 1;
    const interval = setInterval(function() {
        if (opacity <= 0) {
            clearInterval(interval);
            img.style.display = "none"; // Hide the image after fading out
        } else {
            opacity -= 0.01;
            img.style.opacity = opacity;
        }
    }, 50);
}

// Remove the image
function removeImage() {
    const img = document.getElementById("carimage");
    img.remove();
}

// Add row to the table
function addRow() {
    const table = document.getElementById("employeeTable").getElementsByTagName('tbody')[0];
    const row = table.insertRow();

    const nameCell = row.insertCell(0);
    const positionCell = row.insertCell(1);
    const salaryCell = row.insertCell(2);

    nameCell.innerText = document.getElementById("name").value;
    positionCell.innerText = document.getElementById("position").value;
    salaryCell.innerText = document.getElementById("salary").value;

    // Clear the input fields after adding a row
    document.getElementById("name").value = '';
    document.getElementById("position").value = '';
    document.getElementById("salary").value = '';
}
