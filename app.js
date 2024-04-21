const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname);
app.use(express.static(__dirname + '/'));

let json;
try {
        json = require('./input/info.json');
} catch(error) {
        console.error(error.message);
        console.error("\nPlease refer to readme for more details.");
        process.exit(1);
}

app.get('/', (req, res) => {
        res.render('index', {
                name: json.Name,
                info: json.Info,
                intro: json.Introduction,
                education: json.Education,
                work_experience: json.Work_Experience,
                skill: json.Skill
        });
});

const server = app.listen(0, () => {
        //console.log('http://localhost:3000');
        console.log(`http://localhost:${server.address().port}`)
});
