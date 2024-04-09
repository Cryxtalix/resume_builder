# My Resume Builder

Create a file `info.json`, with the following structure. Store the file in the input folder.

    {
        "Name": "",
        "Info": [
            "...",
            ...
        ],
        "Education": [
            {
                "Title": "...",
                "Institution": "...",
                "Years": "...",
                "Grades": "..."
            },
            ...
        ]
        "Work_Experience": [
            {
                "Title": "...",
                "Institution": "...",
                "Years": "...",
                "Description": [
                        "...",
                        ...
                ]
            },
            ...
        ],
        "Skill": [
            "...",
            ...
        ]
    }

You can also refer to example.json file.

## Generating resume
### On Nix

Initialise the development environment in the flake with `nix develop`, and run `generate`.

### Other platforms
* Install Chromium and NodeJS. 
* Open the current folder in the terminal and run `npm install`.
* Start node server with `node app.js & node_pid=$!`.
* Generate resume with `chromium --headless --no-pdf-header-footer --print-to-pdf="resume.pdf" http://localhost:3000`.
* Kill Node server with `kill $node_pid`.