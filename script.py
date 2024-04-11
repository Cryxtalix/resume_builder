import os
import datetime
import subprocess
import time

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
                "--no-pdf-header-footer",
                f"--print-to-pdf=./output/{filename}",
                line
        ], stderr=subprocess.DEVNULL)

        node_server.terminate()
        print("New pdf file generated. Check the output folder.")
except:
        print("\nError. Please ensure dependencies are installed. If using Nix, run `nix develop`\n.")