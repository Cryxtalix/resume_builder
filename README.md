# My Resume Builder

Create `info.json` file in the input folder. Write the file with the following structure. An example can be found in the example.json file.

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

## Generating resume
Generated pdf file can be found in the output folder.

### With Nix/NixOS

Initialise the development environment in the flake with `nix develop`, and run `generate`.

### With other platforms
* Ensure Chromium, NodeJS and Python3 are installed. 
* Open the current folder in the terminal and run `npm install`.
* Generate resume with `python generate.py`.