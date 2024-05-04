import os
import datetime
import subprocess

styles = os.listdir("./styles")

while 1:
        print("==============================================")
        if len(styles) > 1:
                print(f"These are the available styles:")
                for i in range(len(styles)):
                        print(f"{i+1}: {styles[i]}")

        user_selected_style = input("Please select a style: ")

        try:
                user_selected_style = int(user_selected_style)
        except:
                print("Please enter a number.")
                continue

        if user_selected_style < 1 or user_selected_style > len(styles):
                print(f"Please enter a number between 1 and {len(styles)}.")
                continue
        else:
                break

# Create symlink to style.css at folder root
subprocess.run([
        "ln",
        "-s",
        f"./styles/{styles[user_selected_style - 1]}",
        "style.css"
])

if "output" not in os.listdir("."):
        os.mkdir("./output")

date = datetime.datetime.now()
datestring = f"{date.year}-{date.month}-{date.day}"

filename = f"resume_{datestring}.pdf"
i = 0
while filename in os.listdir("./output"):
        i += 1
        filename = f"resume_{datestring}({i}).pdf"

try:
        node_server = subprocess.Popen(["node", "app.js"], stdout=subprocess.PIPE)

        line = node_server.stdout.readline().decode("utf-8")

        subprocess.run([
                "chromium", 
                "--headless",
                "--no-margins",
                "--no-pdf-header-footer",
                f"--print-to-pdf=./output/{filename}",
                line
        ], stderr=subprocess.DEVNULL)

        node_server.terminate()
        print("New pdf file generated. Check the output folder.")
except:
        print("\nError. Please ensure dependencies are installed. If using Nix, run `nix develop`\n.")

# Remove symlink
subprocess.run(["rm","style.css"])
# Open generated file as preview
subprocess.run(["xdg-open",f"output/{filename}"])