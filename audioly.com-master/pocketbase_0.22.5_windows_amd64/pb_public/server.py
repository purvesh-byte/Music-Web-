from flask import Flask
import subprocess

app = Flask(__name__)

@app.route('/runcode')
def run_code():
    # Replace the path with the path to your Python script
    script_path = 'C:/Users/Pinank/Downloads/CodTubify-main/CodTubify-main/src/app.py'
    # Execute the script using subprocess
    subprocess.Popen(['python', script_path])
    return 'Python script executed successfully.'

if __name__ == '__main__':
    app.run(debug=True)
