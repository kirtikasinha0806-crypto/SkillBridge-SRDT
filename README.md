# SkillBridge — Student Skill & Internship Matching System

SkillBridge is a frontend web application designed to help college students bridge the gap between classroom learning and practical industry experience. The platform allows students to build their academic and technical profiles, discover relevant internship opportunities, evaluate how closely their current skills align with industry requirements through an automated matching algorithm, and submit applications.

---

## 🌟 Key Features

- **Personalized Student Profile:**
  - Create and manage student academic details, degree, year of study, technical skills, and career interests.
  - Data is saved directly in browser `localStorage` for privacy and persistence without requiring an external backend database.
  - Edit or delete profile records with one-click actions.

- **Automated Skill Matching Algorithm:**
  - Rule-based matching engine that compares a student's listed skills against the required competencies for each role.
  - Calculates a precise match percentage:
    $$\text{Match Score} = \left(\frac{\text{Number of Matched Skills}}{\text{Total Required Skills}}\right) \times 100$$
  - Handles case-insensitivity, whitespace trimming, and common technical abbreviations (e.g., JS/JavaScript, HTML/HTML5).
  - Displays match status badges (*Strong Match*, *Good Match*, *Moderate Match*, *Explore*) directly on internship cards.

- **Dynamic Search & Filtering:**
  - Real-time search across role titles, organizations, and specific skill tags.
  - Dual-filter system supporting filtering by domain category (Web Development, Software Engineering, AI & ML, Data & BI, Design, Cloud) and work mode (Remote, Hybrid).
  - Instant result counter and empty-state messaging with a quick filter reset option.

- **Detailed Opportunity Breakdown:**
  - In-depth role pages detailing organization info, responsibilities, required and preferred qualifications, eligibility, and expected learning outcomes.
  - Personalized **Why This Internship Matches You** section highlighting matched skills vs. skills to improve.

- **Application & Tracking System:**
  - Application form pre-populates with student profile data to save time.
  - Duplicate application prevention to avoid repeated submissions for the same role.
  - Complete application history stored in `localStorage` and viewable directly on the profile page, including the option to withdraw submissions.

- **Responsive & Accessible Design:**
  - Built mobile-first with clean, modern CSS.
  - Fully responsive across mobile, tablet, and desktop viewports.
  - Accessible forms with clear labeling, focus states, and aria attributes.

---

## 🛠️ Tech Stack

- **HTML5:** Semantic elements (`<header>`, `<main>`, `<section>`, `<article>`, `<nav>`, `<footer>`) for structure and accessibility.
- **CSS3:** Custom styles utilizing CSS Grid, Flexbox, CSS Variables, and media queries for responsive layouts (no external UI frameworks).
- **Vanilla JavaScript (ES6+):** Clean, modular scripts utilizing DOM manipulation, event listeners, URL query parameters, and browser `localStorage` (no external libraries or dependencies).

---

## 📁 Project Structure

```text
SkillBridge/
├── index.html              # Homepage with hero section & featured roles
├── profile.html            # Student profile setup & application history
├── internships.html        # Searchable and filterable internship listings
├── internship-details.html # Detailed view with personalized skill gap analysis
├── apply.html              # Internship application form with pre-filled inputs
├── contact.html            # Contact & inquiry form with instant validation
├── README.md               # Project documentation
├── css/
│   └── style.css           # Global stylesheet and responsive styles
└── js/
    └── script.js           # Core JavaScript logic and data store
```

---

## 🚀 Getting Started

No complicated build steps, node packages, or server installations are required.

### Option 1: Direct Browser Launch
1. Clone or download this repository:
   ```bash
   git clone https://github.com/kirtikasinha0806-crypto/SkillBridge-SRDT.git
   ```
2. Navigate into the project folder:
   ```bash
   cd SkillBridge-SRDT
   ```
3. Double-click `index.html` (or right-click and open with your preferred browser like Chrome, Edge, or Firefox).

### Option 2: Local HTTP Server (Recommended)
Running through a lightweight local server ensures smooth URL parameter navigation:

```bash
# Using Python 3
python -m http.server 8000
```
Then visit **`http://localhost:8000/`** in your browser.

---

## 💡 How to Test the Project

1. Open the website and navigate to **Student Profile**.
2. Fill out your details (e.g., Name: `Alex`, Skills: `HTML, CSS, JavaScript, Python`) and click **Save Profile**.
3. Go to the **Internships** page to observe your personalized match scores and badges on each card.
4. Use the search bar to search for a skill (e.g., `Python` or `SQL`) or filter by category and location.
5. Click **View Role Details** on any internship to see your specific matched skills and skill gaps.
6. Click **Apply Now** — notice your details are automatically pre-filled into the form. Submit the application and visit your **Student Profile** page to view it in your application history!

---

## 📄 License

This project is created for educational and academic demonstration purposes.
