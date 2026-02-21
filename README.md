<img width="1280" height="640" alt="image" src="https://github.com/user-attachments/assets/a7089668-a7db-408d-a7b6-78d733448162" />


# KAALAN.AI 🎯

## Basic Details

### Team Name: TechKaalam

### Team Members
- Prarthana P – Viswajyothi College Of Engineering And Technology

### Hosted Project Link
https://prarthanaprakas810-collab.github.io/tink2/

### Project Description
Kaalam.AI is a web application that analyzes user health data and lifestyle inputs to predict potential health risks and life expectancy trends using AI models.

### The Problem statement
Many people ignore early warning signs in their health due to lack of awareness and personalized analysis.  
There is no simple platform that combines health data and predictive analytics to give users an understandable risk overview.

### The Solution
Kaalam.AI allows users to upload health reports, enter lifestyle & diet data, and get AI‑based risk predictions with actionable suggestions.  
Instead of predicting exact death dates, it provides risk probability analysis and health improvement recommendations.

---

## Technical Details

### Technologies/Components Used

**For Software:**
- Languages used: JavaScript, Python
- Frameworks used: Next.js, FastAPI
- Libraries used: Axios, Pandas, Scikit-learn, Chart.js
- Tools used: VS Code, Git & GitHub, Docker, Vercel

**For Hardware:**
- *[Not applicable]*

---

## Features

List the key features of your project:
- 🔐 Secure user authentication
- 📤 Upload medical reports (PDF/CSV)
- 📊 AI-powered health risk prediction
- 📈 Interactive health analytics dashboard
- 🧠 Lifestyle-based risk suggestions
- 📑 Downloadable health summary report

---

## Implementation

### For Software:

#### Installation
```bash
git clone https://github.com/yourusername/kaalam-ai.git
cd kaalam-ai
npm install
```

#### Run
```bash
# Frontend
npm run dev

# Backend
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

### For Hardware:

#### Components Required
*[None]*

#### Circuit Setup
*[None]*

---

## Project Documentation

### For Software:

#### Screenshots (Add at least 3)

![Screenshot1](/scrnsht1.png)  
*Caption: Displays introduction to Kaalam.AI and user login/signup options.*

![Screenshot2](/scrnsht2.png)  
*Caption: User uploading medical report and entering lifestyle details.*

![Screenshot3](/scrnsht3.png)  
*Caption: Shows AI-generated health risk analysis with charts and suggestions.*

#### Diagrams

**System Architecture:**

![Architecture Diagram](docs/architecture.png)  
*Explain your system architecture - components, data flow, tech stack interaction*

**Application Workflow:**

![Workflow](docs/workflow.png)  
*Add caption explaining your workflow*

---

### For Hardware:

#### Schematic & Circuit

![Circuit](Add your circuit diagram here)  
*Add caption explaining connections*

![Schematic](Add your schematic diagram here)  
*Add caption explaining the schematic*

#### Build Photos

![Team](Add photo of your team here)

![Components](Add photo of your components here)  
*List out all components shown*

![Build](Add photos of build process here)  
*Explain the build steps*

![Final](Add photo of final product here)  
*Explain the final build*

---

## Additional Documentation

### For Web Projects with Backend:

#### API Documentation

**Base URL:** `https://api.kaalam-ai.com`

##### Endpoints

**GET /api/health-report**
- **Description:** Fetch user health report
- **Parameters:**
  - `param1` (string): [Description]
  - `param2` (integer): [Description]
- **Response:**
```json
{
  "status": "success",
  "data": {}
}
```

**POST /api/predict**
- **Description:** Generate health risk prediction
- **Request Body:**
```json
{
  "age": 45,
  "bmi": 27.5,
  "smoker": true,
  "exercise_frequency": 2
}
```
- **Response:**
```json
{
  "status": "success",
  "message": "Prediction generated",
  "risk_score": 78
}
```

[Add more endpoints as needed...]

---

### For Mobile Apps:

#### App Flow Diagram

![App Flow](docs/app-flow.png)  
*Explain the user flow through your application*

#### Installation Guide

**For Android (APK):**
1. Download the APK from [Release Link]
2. Enable "Install from Unknown Sources" in your device settings:
   - Go to Settings > Security
   - Enable "Unknown Sources"
3. Open the downloaded APK file
4. Follow the installation prompts
5. Open the app and enjoy!

**For iOS (IPA) - TestFlight:**
1. Download TestFlight from the App Store
2. Open this TestFlight link: [Your TestFlight Link]
3. Click "Install" or "Accept"
4. Wait for the app to install
5. Open the app from your home screen

**Building from Source:**
```bash
# For Android
flutter build apk
# or
./gradlew assembleDebug

# For iOS
flutter build ios
# or
xcodebuild -workspace App.xcworkspace -scheme App -configuration Debug
```

---

### For Hardware Projects:

#### Bill of Materials (BOM)

| Component | Quantity | Specifications | Price | Link/Source |
|-----------|----------|----------------|-------|-------------|
| Arduino Uno | 1 | ATmega328P, 16MHz | ₹450 | [Link] |
| LED | 5 | Red, 5mm, 20mA | ₹5 each | [Link] |
| Resistor | 5 | 220Ω, 1/4W | ₹1 each | [Link] |
| Breadboard | 1 | 830 points | ₹100 | [Link] |
| Jumper Wires | 20 | Male-to-Male | ₹50 | [Link] |
| [Add more...] | | | | |

**Total Estimated Cost:** ₹[Amount]

#### Assembly Instructions

**Step 1: Prepare Components**
1. Gather all components listed in the BOM
2. Check component specifications
3. Prepare your workspace  
![Step 1](images/assembly-step1.jpg)  
*Caption: All components laid out*

**Step 2: Build the Power Supply**
1. Connect the power rails on the breadboard
2. Connect Arduino 5V to breadboard positive rail
3. Connect Arduino GND to breadboard negative rail  
![Step 2](images/assembly-step2.jpg)  
*Caption: Power connections completed*

**Step 3: Add Components**
1. Place LEDs on breadboard
2. Connect resistors in series with LEDs
3. Connect LED cathodes to GND
4. Connect LED anodes to Arduino digital pins (2-6)  
![Step 3](images/assembly-step3.jpg)  
*Caption: LED circuit assembled*

**Step 4: [Continue for all steps...]**

**Final Assembly:**  
![Final Build](images/final-build.jpg)  
*Caption: Completed project ready for testing*

---

### For Scripts/CLI Tools:

#### Command Reference

**Basic Usage:**
```bash
python script.py [options] [arguments]
```

**Available Commands:**
- `command1 [args]` - Description of what command1 does
- `command2 [args]` - Description of what command2 does
- `command3 [args]` - Description of what command3 does

**Options:**
- `-h, --help` - Show help message and exit
- `-v, --verbose` - Enable verbose output
- `-o, --output FILE` - Specify output file path
- `-c, --config FILE` - Specify configuration file
- `--version` - Show version information

**Examples:**
```bash
# Example 1: Basic usage
python script.py input.txt

# Example 2: With verbose output
python script.py -v input.txt

# Example 3: Specify output file
python script.py -o output.txt input.txt

# Example 4: Using configuration
python script.py -c config.json --verbose input.txt
```

#### Demo Output

**Example 1: Basic Processing**

**Input:**
```
This is a sample input file
with multiple lines of text
for demonstration purposes
```

**Command:**
```bash
python script.py sample.txt
```

**Output:**
```
Processing: sample.txt
Lines processed: 3
Characters counted: 86
Status: Success
Output saved to: output.txt
```

**Example 2: Advanced Usage**

**Input:**
```json
{
  "name": "test",
  "value": 123
}
```

**Command:**
```bash
python script.py -v --format json data.json
```

**Output:**
```
[VERBOSE] Loading configuration...
[VERBOSE] Parsing JSON input...
[VERBOSE] Processing data...
{
  "status": "success",
  "processed": true,
  "result": {
    "name": "test",
    "value": 123,
    "timestamp": "2024-02-07T10:30:00"
  }
}
[VERBOSE] Operation completed in 0.23s
```

---

## Project Demo: https://drive.google.com/file/d/1_gIu8GY7V9NfI7jerNPeBJaDSBr0_eOI/view?usp=drive_link

### Video
[Add your demo video link here - YouTube, Google Drive, etc.]

*Explain what the video demonstrates – key features, user flow, technical highlights*

### Additional Demos
[Add any extra demo materials/links – Live site, APK download, online demo, etc.]

---

## AI Tools Used (Optional - For Transparency Bonus)

If you used AI tools during development, document them here for transparency:

**Tool Used:** ChatGPT  
**Purpose:** Debugging backend APIs, generating boilerplate code, improving README documentation  

**Tool Used:** GitHub Copilot  
**Purpose:** Autocomplete for React components, API integration support  

**Percentage of AI-generated code:** ~30%

**Human Contributions:**
- Architecture design and planning
- ML model training
- UI/UX design decisions
- Integration and testing

---

## Team Contributions

- Prarthana P: Frontend development, UI/UX design, API integration  
- Member 2: Backend development, ML model training  
- Member 3: Database design, Testing & Deployment  

---

## License

This project is licensed under the **MIT License** – see the [LICENSE](LICENSE) file for details.

**Common License Options:**
- MIT License (Permissive, widely used)
- Apache 2.0 (Permissive with patent grant)
- GPL v3 (Copyleft, requires derivative works to be open source)

---

Made with ❤️ at TinkerHub[]




