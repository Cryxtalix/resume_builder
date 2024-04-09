const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname);
app.use(express.static(__dirname + '/'));

let json = require('./info.json');

let get_info = () => {
        let text = "|";
        json.info.forEach(
                data => {
                        text += ` ${data} |`;
                }
        );
        return text;
};

app.get('/', (req, res) => {
        res.render('index', {
                name: json.Name,
                info: json.Info,
                education: json.Education,
                work_experience: json.Work_Experience,
                skill: json.Skill
        });
});

app.listen(3000, () => {
        console.log('Server is running on http://localhost:3000');
});
