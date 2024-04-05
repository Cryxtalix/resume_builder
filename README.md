# My Resume Builder

Create a file `info.js`, with the following info object.

    const info = {
        name: "",
        info: [
            "...",
            ...
        ],
        education: [
            {
                "Title": "...",
                "Institution": "...",
                "Years": "...",
                "Grades": "..."
            },
            ...
        ]
        work_experience: [
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
        skill: [
            "...",
            ...
        ]
    }

With nix, initialise the development environment in the flake with `nix develop`, and run `generate`.

Otherwise, install chrome or chromium and run `chromium --headless --no-pdf-header-footer --print-to-pdf="resume.pdf" main.html`.

A PDF resume will be generated in the folder.