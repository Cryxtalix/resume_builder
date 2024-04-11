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
* Ensure Chromium, NodeJS and python 3 are installed. 
* Open the current folder in the terminal and run `npm install`.
* Generate resume with `python generate.py`.