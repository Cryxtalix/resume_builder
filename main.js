const div_name = document.getElementById("Name")
const div_info = document.getElementById("Info")
const div_education = document.getElementById("Education")
const div_experience = document.getElementById("Experience")
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
        div_info.innerHTML = `<p><small>${text}</small></p>`;
};

let print_education = () => {
        div_education.innerHTML = `<hr><b>Education</b><hr>`;
        info.education.forEach(
                data => {
                        div_education.innerHTML += `<p><b>${data.Title}</b>, ${data.Institution}`;
                        div_education.innerHTML += `<p><small>${data.Years}</small></p>`;
                }
        )
};

let print_experience = () => {
        div_experience.innerHTML = `<hr><b>Work/Professional Experience</b><hr>`;
        info.experience.forEach(
                data => {
                        div_experience.innerHTML += `<p><b>${data.Title}</b>, ${data.Institution}</p>`;
                        div_experience.innerHTML += `<p><small>${data.Years}</small></p>`;
                }
        )
};

let print_skill = () => {
        div_skill.innerHTML = `<b>Skills/Certifications</b>`;
        list = "";
        info.skill.forEach(
                data => {
                        list += `<li>${data}</li>`;
                }
        )
        div_skill.innerHTML += `<ul>${list}</ul>`;
};

print_name()
print_info()
print_education()
print_experience()
print_skill()