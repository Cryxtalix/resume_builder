const div_name = document.getElementById("Name")
const div_info = document.getElementById("Info")
const div_education = document.getElementById("Education")
const div_work_experience = document.getElementById("Work_Experience")
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
                        if (data.Grades == "") {
                                div_education.innerHTML += `<p><b>${data.Title}</b>, ${data.Institution}</p>`;
                        } else {
                                div_education.innerHTML += `<p><b>${data.Title}</b>, ${data.Institution}, ${data.Grades}</p>`;
                        };
                        div_education.innerHTML += `<p><small><i>${data.Years}</i></small></p>`;
                }
        )
};

let print_work_experience = () => {
        div_work_experience.innerHTML = `<hr><b>Work/Professional Experience</b><hr>`;
        info.work_experience.forEach(
                data => {
                        div_work_experience.innerHTML += `<p><b>${data.Institution}</b>, ${data.Title}</p>`;
                        div_work_experience.innerHTML += `<p><small><i>${data.Years}</i></small></p>`;
                        list = "";
                        data.Description.forEach(
                                des => {
                                        list += `<li>${des}</li>`;
                                }
                        )
                        div_work_experience.innerHTML += `<ul>${list}</ul>`;
                }
        )
};

let print_skill = () => {
        div_skill.innerHTML = `<hr><b>Skills/Certifications</b><hr>`;
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
print_work_experience()
print_skill()