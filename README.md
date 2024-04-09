# My Resume Builder

Create a file `info.json`, with the following structure.

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

With nix, initialise the development environment in the flake with `nix develop`, and run `generate`.

Otherwise, install chrome or chromium and run `node app.js && chromium --headless --no-pdf-header-footer --print-to-pdf="resume.pdf" http://localhost:3000`. Kill the server with Ctrl-C.

A PDF resume will be generated in the folder.