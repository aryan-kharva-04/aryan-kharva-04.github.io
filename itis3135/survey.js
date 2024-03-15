function submit_form(){
    const name = document.getElementById("name").value;
    const mascot = document.getElementById("mascot").value;
    const imageFile = document.getElementById("image").files[0];
    const image_caption = document.getElementById("image_caption").value;
    const personal_background = document.getElementById("personal_background").value;
    const professional_background = document.getElementById("professional_background").value;
    const academic_background = document.getElementById("academic_background").value;
    const webdev_background = document.getElementById("webdev_background").value;
    const computer_platform = document.getElementById("computer_platform").value;
    const current_courses = Array.from(document.getElementsByClassName("courses"))
                     .map(courses => courses.value);
    const funny_thing = document.getElementById("funny_thing").value;
    const anything_else = document.getElementById("anything_else").value;

    const imageUrl = URL.createObjectURL(imageFile);
    const final_form= document.getElementById("byo_form");
    
    final_form.innerHTML= `
    <h2>Introduction</h2>
    <h3>${name} || ${mascot}</h3>
    <figure>
        <img src="${imageUrl}" class="pfp" alt="${image_caption}">
        <figcaption>${image_caption}</figcaption>
    </figure>
    <ul>
            <li><b>Personal Background: </b>${personal_background}</li>
            <li><b>Professional Background: </b>${professional_background}</li>
            <li><b>Academic Background: </b>${academic_background}</li>
            <li><b>Background in Subject: </b>${webdev_background}</li>
            <li><b>Primary Computer Platform: </b>${computer_platform}</li>
            <li><b>Interest: </b>${anything_else}</li>
            <li><b>Courses I'm Taking: </b>
                <ul>
                    ${current_courses.map(courses => `<li>${courses}</li>`).join("")}
                </ul>
            </li>
            <li><b>Funny/Interesting Item about Yourself: </b>${funny_thing}</li>
        </ul>
    `;
}

function addCourse() {
    const course_var = document.getElementById("current_courses");
    const new_course = document.createElement("div");
    new_course.innerHTML = `
        <label for="courses">Course: </label>
        <input type="text" class="courses" required>`;
    const delete_button = document.createElement("button");
    delete_button.type = "button";
    delete_button.textContent = "Delete";
    delete_button.onclick = function() {
        course_var.removeChild(new_course);
        course_var.removeChild(delete_button);
    };
    course_var.appendChild(new_course);
    course_var.appendChild(delete_button);
}

function loadImage() {
    var image = document.getElementById('image').files[0];
    const imageUrl = URL.createObjectURL(image);
    var text = "<img src=\"" + imageUrl + "\" >";
    document.getElementById('loadImage').innerHTML = text;
  }

