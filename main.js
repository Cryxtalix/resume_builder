const div_name = document.getElementById("Name")
const div_info = document.getElementById("Info")
const div_contact = document.getElementById("Contact")
const div_education = document.getElementById("Education")
const div_experience = document.getElementById("Work/Professional Experience")
const div_skill = document.getElementById("Skills/Certifications")

let print_name = () => {
        div_name.innerHTML = `<h1>${info.name}</h1>`;
};

let print_info = () => {
        let text = "|";
        info.info.forEach(
                data => {
                        text += ` ${data} |`;
                }
        );
        div_info.innerHTML = `<p>${text}</p>`;
};

let print_contact = () => {
        let text = "|";
        info.contact.forEach(
                data => {
                        text += ` ${data} |`;
                }
        );
        div_contact.innerHTML = `<p>${text}</p>`;
};

let print_education = () => {
        div_education.innerHTML = `<h2>Education</h2>`;
        info.education.forEach(
                data => {
                        div_education.innerHTML += `<p><b>${data.Title}</b>, ${data.Institution}`;
                        div_education.innerHTML += `<p>${data.Years}</p>`;
                }
        )
};

info.skill.forEach(
        data => {
                let output = document.createElement('p');
                output.textContent = data;
                div_skill.appendChild(output);

        }
);

print_name()
print_info()
print_contact()
print_education()