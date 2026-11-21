// SkillBridge - Main JavaScript File

const internshipsData = [
    {
        id: "frontend",
        title: "Frontend Development Intern",
        organization: "WebCraft Solutions",
        category: "Web Development",
        categoryLabel: "Web Development & User Interfaces",
        location: "Remote",
        locationLabel: "Remote (India)",
        duration: "3 Months",
        durationDetail: "3 Months (Part-time / 15 hrs per week)",
        stipend: "Academic Credit / Certificate",
        shortDescription: "Assist in building accessible, semantic web layouts and learning modern responsive user interfaces alongside senior mentors.",
        fullDescription: "WebCraft Solutions is a modern web design agency. As a Frontend Development Intern, the candidate will focus on foundational web engineering, transforming wireframes into structured, standards-compliant HTML documents, and mastering responsive layout fundamentals under engineering mentorship.",
        requiredSkills: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
        preferredSkills: ["Git & GitHub", "Web Accessibility (WCAG)", "Chrome DevTools", "CSS Flexbox & Grid"],
        responsibilities: [
            "Write standards-compliant, semantic HTML5 markup for internal mockups and landing pages.",
            "Structure accessible web components with proper heading levels, labels, and descriptive alternate text.",
            "Participate in peer code reviews to understand clean code formatting, indentation, and documentation.",
            "Assist in debugging markup inconsistencies across standard modern desktop and mobile browsers.",
            "Document coursework learnings and summarize weekly progress reports for faculty evaluation."
        ],
        eligibility: [
            "Currently enrolled undergraduate student in B.Tech (CSE / IT / AI & ML), BCA, B.Sc. Computer Science, or allied computing degree.",
            "Satisfactory academic standing in basic computer science and web development coursework.",
            "Access to a computer with a modern web browser and a code editor (such as VS Code)."
        ],
        learningOutcomes: [
            "Practical Markup Mastery: Confidence in crafting robust, semantic, and accessible HTML architecture.",
            "Code Hygiene Habits: Experience in disciplined code organization, consistent indentation, and meaningful commenting.",
            "Portfolio Artifacts: Practical web templates suitable for showcasing during future job interviews and campus placements.",
            "Academic Preparedness: Practical foundations enabling an easy transition to CSS styling and JavaScript interactivity."
        ]
    },
    {
        id: "python",
        title: "Python Development Intern",
        organization: "DataSphere Labs",
        category: "Software Engineering",
        categoryLabel: "Software Engineering & Backend",
        location: "Hybrid",
        locationLabel: "Bengaluru / Hybrid",
        duration: "6 Months",
        durationDetail: "6 Months (20 hrs per week)",
        stipend: "Monthly Stipend + Mentorship",
        shortDescription: "Develop foundational backend scripts, practice object-oriented programming, and assist in automating data workflows.",
        fullDescription: "DataSphere Labs builds computational data pipelines. As a Python Development Intern, you will work on backend modules, write clean object-oriented Python code, develop automated testing routines, and integrate simple REST APIs.",
        requiredSkills: ["Python", "Object-Oriented Programming", "Git", "Data Structures"],
        preferredSkills: ["REST APIs", "Unit Testing", "SQL Basics", "Linux Command Line"],
        responsibilities: [
            "Write clean, modular Python scripts following PEP 8 conventions.",
            "Implement core data structures and object-oriented patterns for internal utility tools.",
            "Create automated unit tests with Python's unittest or pytest framework.",
            "Collaborate with senior developers on Git feature branches and pull requests.",
            "Document codebase functions and contribute to internal developer wikis."
        ],
        eligibility: [
            "Undergraduate engineering or computing student with coursework in Python or C++.",
            "Familiarity with foundational algorithms, time complexity, and data structures.",
            "Basic understanding of Git command-line operations."
        ],
        learningOutcomes: [
            "Production Python Experience: Writing maintainable, testable code for real-world software modules.",
            "Version Control Fluency: Confident branching, merging, and PR workflows in GitHub.",
            "Backend Fundamentals: Understanding how server scripts handle data processing and API integration."
        ]
    },
    {
        id: "data-analysis",
        title: "Data Analysis Intern",
        organization: "InsightMetrics",
        category: "Data & BI",
        categoryLabel: "Data & Business Intelligence",
        location: "Hybrid",
        locationLabel: "Mumbai / Hybrid",
        duration: "3 Months",
        durationDetail: "3 Months (Flexible schedule)",
        stipend: "Academic Certificate + Project Bonus",
        shortDescription: "Clean datasets, write introductory SQL queries, and present basic statistical insights using spreadsheets and charts.",
        fullDescription: "InsightMetrics provides analytics advisory for education and commerce. In this internship, students learn structured data querying, exploratory analysis in Python and SQL, and clear chart visualization.",
        requiredSkills: ["SQL", "Excel", "Python", "Statistics"],
        preferredSkills: ["Pandas", "Data Visualization", "Power BI / Tableau Basics", "Report Writing"],
        responsibilities: [
            "Extract, inspect, and clean structured records from relational databases using SQL queries.",
            "Perform exploratory data analysis on CSV and Excel datasets using Python libraries.",
            "Build summary pivot tables and visual charts communicating trends to academic mentors.",
            "Identify outliers and data quality discrepancies in sample customer and student logs.",
            "Draft concise data summary briefs and presentation slides."
        ],
        eligibility: [
            "Enrolled in engineering, mathematics, statistics, or data science undergraduate programs.",
            "Basic knowledge of relational tables, SQL SELECT statements, and JOIN operations.",
            "Comfortable with descriptive statistics (mean, median, variance, correlations)."
        ],
        learningOutcomes: [
            "Data Wrangling Skills: Real-world practice transforming messy data into structured formats.",
            "Analytical Querying: Writing multi-table SQL queries with aggregations and filters.",
            "Data Storytelling: Presenting quantitative insights clearly to non-technical stakeholders."
        ]
    },
    {
        id: "machine-learning",
        title: "Machine Learning Intern",
        organization: "NeuroTech AI",
        category: "AI & ML",
        categoryLabel: "Artificial Intelligence & Machine Learning",
        location: "Remote",
        locationLabel: "Remote (All India)",
        duration: "6 Months",
        durationDetail: "6 Months (Research & Prototyping)",
        stipend: "Research Fellowship Stipend",
        shortDescription: "Explore supervised and unsupervised baseline models, preprocess tabular datasets, and evaluate predictive accuracy metrics alongside research advisors.",
        fullDescription: "NeuroTech AI explores machine learning solutions for academic and industrial automation. Interns collaborate with research engineers to train baseline classification and regression models, experiment with feature engineering, and document empirical results.",
        requiredSkills: ["Python", "Machine Learning", "NumPy", "Scikit-Learn"],
        preferredSkills: ["Pandas", "Linear Algebra", "Jupyter Notebooks", "Data Preprocessing"],
        responsibilities: [
            "Clean, normalize, and split tabular datasets for training and validation.",
            "Implement baseline classification and regression models using Scikit-Learn.",
            "Evaluate models using metrics including Accuracy, Precision, Recall, and F1-Score.",
            "Document hyperparameter tuning experiments in reproducible Jupyter Notebooks.",
            "Participate in weekly research seminar discussions and paper reviews."
        ],
        eligibility: [
            "Enrolled in B.Tech (AI & ML, CSE, Data Science) with foundational coursework in linear algebra and probability.",
            "Proficiency in Python programming and numerical array operations with NumPy.",
            "Prior completion of at least one machine learning academic mini-project."
        ],
        learningOutcomes: [
            "Applied ML Pipeline: Hands-on mastery of end-to-end ML workflows from data preparation to evaluation.",
            "Empirical Rigor: Understanding model validation, cross-validation, and avoiding overfitting.",
            "Research Documentation: Creating clear scientific project reports and presentations."
        ]
    },
    {
        id: "ui-ux",
        title: "UI/UX Design Intern",
        organization: "PixelCraft Studio",
        category: "Design",
        categoryLabel: "Product Design & User Experience",
        location: "Hybrid",
        locationLabel: "New Delhi / Hybrid",
        duration: "2 Months",
        durationDetail: "2 Months (Project-based)",
        stipend: "Design Stipend + Certificate",
        shortDescription: "Conduct basic student user research interviews, sketch wireframe user flows, and construct interactive Figma component prototypes for web applications.",
        fullDescription: "PixelCraft Studio is a boutique product design consultancy. As a UI/UX Design Intern, you will participate in student persona research, low-fidelity paper wireframing, component-based Figma prototyping, and usability testing sessions.",
        requiredSkills: ["Figma", "UI Design", "Wireframing", "User Research"],
        preferredSkills: ["Prototyping", "Design Systems", "HTML & CSS Awareness", "Usability Testing"],
        responsibilities: [
            "Draft wireframes and user flow diagrams for responsive student web applications.",
            "Construct interactive components and auto-layout frames using Figma.",
            "Conduct 5-10 informal usability walkthroughs and record user pain points.",
            "Maintain design system consistency regarding typography, color palettes, and spacing scales.",
            "Present design rationale to developer teammates during design-to-code handoffs."
        ],
        eligibility: [
            "Undergraduate student with demonstrable interest in interaction design, UI/UX, or frontend web design.",
            "Familiarity with Figma interface, frame structures, and component basics.",
            "A portfolio or case study showing at least 1 web or mobile wireframe project."
        ],
        learningOutcomes: [
            "Design Tool Mastery: High proficiency with Figma auto-layout, design tokens, and components.",
            "Human-Centered Thinking: Translating user needs into intuitive visual interfaces.",
            "Developer Collaboration: Understanding how UI designs translate into real CSS and HTML."
        ]
    },
    {
        id: "database",
        title: "Database Development Intern",
        organization: "CloudCore Systems",
        category: "Database & Cloud",
        categoryLabel: "Database Administration & Cloud",
        location: "Remote",
        locationLabel: "Pune / Remote",
        duration: "4 Months",
        durationDetail: "4 Months (Part-time)",
        stipend: "Academic Sponsorship + Cloud Credits",
        shortDescription: "Learn relational schema normalization, construct indexes for query optimization, and assist in maintaining database backups and data migration scripts.",
        fullDescription: "CloudCore Systems develops cloud infrastructure solutions. In this role, students deepen their understanding of relational database management systems (RDBMS), database schema normalization (1NF-3NF), ER diagram modeling, and query execution planning.",
        requiredSkills: ["SQL", "MySQL", "Database Normalization", "Relational Databases"],
        preferredSkills: ["PostgreSQL", "Database Indexing", "Git", "Basic Python Scripting"],
        responsibilities: [
            "Design and document Entity-Relationship (ER) models for sample business modules.",
            "Normalize relational schemas to Third Normal Form (3NF) to eliminate data redundancy.",
            "Write and optimize SQL queries with proper indexing and JOIN strategies.",
            "Assist mentors in testing database migration scripts and automated backup jobs.",
            "Document data dictionaries, schema constraints, and primary/foreign key relationships."
        ],
        eligibility: [
            "Undergraduate engineering student having completed or currently taking Database Management Systems (DBMS).",
            "Familiarity with SQL DDL (CREATE, ALTER) and DML (SELECT, INSERT, UPDATE, DELETE).",
            "Understanding of table relationships: one-to-one, one-to-many, and many-to-many."
        ],
        learningOutcomes: [
            "Robust Schema Design: Crafting normalized, resilient database structures.",
            "Performance Optimization: Understanding how query planners and indexes affect retrieval speed.",
            "Enterprise Data Practices: Working with real transactional databases and data integrity rules."
        ]
    }
];

// --- Local Storage Keys ---
// Using unique key names so they don't clash with anything else in the browser

const STORAGE_KEYS = {
    PROFILE: "skillbridgeProfile",
    APPLICATIONS: "skillbridgeApplications"
};

// Get the saved profile from localStorage
function getSavedProfile() {
    try {
        const stored = localStorage.getItem(STORAGE_KEYS.PROFILE);
        return stored ? JSON.parse(stored) : null;
    } catch (error) {
        console.error("Could not read profile from localStorage:", error);
        return null;
    }
}

// Save profile data to localStorage
function saveProfile(profileData) {
    try {
        localStorage.setItem(STORAGE_KEYS.PROFILE, JSON.stringify(profileData));
        return true;
    } catch (error) {
        console.error("Could not save profile to localStorage:", error);
        return false;
    }
}

// Delete the profile from localStorage
function deleteProfile() {
    try {
        localStorage.removeItem(STORAGE_KEYS.PROFILE);
        return true;
    } catch (error) {
        console.error("Could not delete profile from localStorage:", error);
        return false;
    }
}

// Get all saved applications from localStorage
function getSavedApplications() {
    try {
        const stored = localStorage.getItem(STORAGE_KEYS.APPLICATIONS);
        return stored ? JSON.parse(stored) : [];
    } catch (error) {
        console.error("Could not read applications from localStorage:", error);
        return [];
    }
}

// Add a new application to localStorage
function saveApplication(newApplication) {
    try {
        const applications = getSavedApplications();
        applications.push(newApplication);
        localStorage.setItem(STORAGE_KEYS.APPLICATIONS, JSON.stringify(applications));
        return true;
    } catch (error) {
        console.error("Could not save application to localStorage:", error);
        return false;
    }
}

// Remove a specific application by its ID
function deleteApplication(applicationId) {
    try {
        const applications = getSavedApplications();
        const updated = applications.filter(app => app.id !== applicationId);
        localStorage.setItem(STORAGE_KEYS.APPLICATIONS, JSON.stringify(updated));
        return true;
    } catch (error) {
        console.error("Could not delete application from localStorage:", error);
        return false;
    }
}

// --- Skill Matching Algorithm ---
// This is the main feature of SkillBridge
// Formula: (matched skills / total required skills) * 100

// Check if two skill strings are the same, handling abbreviations like JS = JavaScript
function areSkillsMatching(userSkill, requiredSkill) {
    const u = userSkill.toLowerCase().trim();
    const r = requiredSkill.toLowerCase().trim();
    if (!u || !r) return false;
    if (u === r) return true;

    // handles cases like "HTML5" matching "HTML"
    if (u.includes(r) || r.includes(u)) return true;

    // common short forms students might type
    if ((u === "js" && r.includes("javascript")) || (r === "js" && u.includes("javascript"))) return true;
    if ((u === "html" && r.includes("html5")) || (r === "html" && u.includes("html5"))) return true;
    if ((u === "css" && r.includes("css3")) || (r === "css" && u.includes("css3"))) return true;
    if ((u === "ml" && r.includes("machine learning")) || (r === "ml" && u.includes("machine learning"))) return true;
    if ((u === "ai" && r.includes("artificial intelligence")) || (r === "ai" && u.includes("artificial intelligence"))) return true;

    return false;
}

// Calculate how well a student's skills match a given internship
function calculateMatch(userSkillsList, requiredSkills) {
    if (!requiredSkills || requiredSkills.length === 0) {
        return { score: 100, matchedSkills: [], missingSkills: [], matchLevel: "Open to All", badgeClass: "badge-success" };
    }

    if (!userSkillsList || userSkillsList.length === 0) {
        return { score: 0, matchedSkills: [], missingSkills: [...requiredSkills], matchLevel: "No Skills Added", badgeClass: "badge-subtle" };
    }

    const matchedSkills = [];
    const missingSkills = [];

    requiredSkills.forEach(req => {
        const isMatched = userSkillsList.some(userSkill => areSkillsMatching(userSkill, req));
        if (isMatched) {
            matchedSkills.push(req);
        } else {
            missingSkills.push(req);
        }
    });

    const score = Math.round((matchedSkills.length / requiredSkills.length) * 100);

    // Assign a label based on the score
    let matchLevel = "Explore This Opportunity";
    let badgeClass = "badge-subtle";

    if (score >= 75) {
        matchLevel = "Strong Match";
        badgeClass = "badge-success";
    } else if (score >= 50) {
        matchLevel = "Good Match";
        badgeClass = "badge-lavender";
    } else if (score >= 25) {
        matchLevel = "Moderate Match";
        badgeClass = "badge-subtle";
    }

    return { score, matchedSkills, missingSkills, matchLevel, badgeClass };
}

// Split a comma-separated skills string into an array
function parseSkillsString(skillsString) {
    if (!skillsString) return [];
    return skillsString
        .split(",")
        .map(s => s.trim())
        .filter(s => s.length > 0);
}

// --- Show Status Messages ---
// Used to display success, error, or info banners on forms

function showStatusMessage(container, message, type = "success") {
    if (!container) return;
    container.innerHTML = "";
    const notice = document.createElement("div");
    notice.className = `status-banner status-banner-${type}`;
    notice.setAttribute("role", type === "error" ? "alert" : "status");
    notice.textContent = message;
    container.appendChild(notice);

    // scroll to the message so the user can see it
    notice.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

// --- Homepage (index.html) ---

function initHomePage() {
    const heroSection = document.querySelector(".hero-section");
    if (!heroSection) return;

    // show a personalized greeting if the student has saved a profile
    const profile = getSavedProfile();
    const heroBadge = document.getElementById("hero-badge") || heroSection.querySelector(".hero-badge");
    const heroTitle = document.getElementById("hero-title") || heroSection.querySelector("h1");
    const heroDesc = document.getElementById("hero-desc") || heroSection.querySelector(".hero-desc");
    const heroActions = document.getElementById("hero-actions") || heroSection.querySelector(".hero-actions");

    if (profile && profile.name) {
        const firstName = profile.name.trim().split(" ")[0];
        if (heroBadge) {
            heroBadge.textContent = `Welcome back, ${firstName}!`;
        }
        if (heroTitle) {
            heroTitle.textContent = "Explore Internships Matched to Your Profile";
        }
        if (heroDesc) {
            const skillCount = parseSkillsString(profile.skills).length;
            heroDesc.textContent = `Hello ${firstName}! You have ${skillCount} skill${skillCount === 1 ? "" : "s"} listed in your profile. Review your personalized match scores and apply for roles that fit your strengths.`;
        }
        if (heroActions) {
            heroActions.innerHTML = `
                <a href="internships.html" class="btn btn-primary">View Matched Internships</a>
                <a href="profile.html" class="btn btn-secondary">Manage Student Profile</a>
            `;
        }
    }

    // make sure each featured card links to the right internship
    const featuredArticles = document.querySelectorAll(".cards-grid article");
    const defaultIds = ["frontend", "python", "data-analysis"];

    featuredArticles.forEach((article, index) => {
        const link = article.querySelector("a.btn");
        if (link && defaultIds[index]) {
            link.href = `internship-details.html?id=${defaultIds[index]}`;
        }
    });
}

// --- Profile Page (profile.html) ---

function initProfilePage() {
    const profileForm = document.querySelector("main form");
    const profileRecordCard = document.querySelector(".profile-record-card");
    if (!profileForm && !profileRecordCard) return;

    // create a container for status messages above the form
    let messageContainer = document.getElementById("profile-status-message");
    if (!messageContainer && profileForm) {
        messageContainer = document.createElement("div");
        messageContainer.id = "profile-status-message";
        messageContainer.style.marginBottom = "1.5rem";
        profileForm.parentNode.insertBefore(messageContainer, profileForm);
    }

    // grab all form fields
    const nameInput = document.getElementById("student-name");
    const emailInput = document.getElementById("student-email");
    const degreeInput = document.getElementById("degree-course");
    const yearSelect = document.getElementById("study-year");
    const skillsInput = document.getElementById("profile-skills");
    const interestsInput = document.getElementById("profile-interests");
    const introInput = document.getElementById("profile-intro");

    // update the profile display card with saved data
    function renderProfileCard(data) {
        if (!profileRecordCard) return;

        const nameHeading = profileRecordCard.querySelector("h3");
        if (nameHeading) nameHeading.textContent = data.name || "Student Name";

        const studyField = profileRecordCard.querySelector("p");
        if (studyField) {
            studyField.innerHTML = `<strong>Field of Study:</strong> ${escapeHtml(data.degree || "Not specified")}`;
        }

        // fill in the academic details list
        const detailsList = profileRecordCard.querySelector(".profile-details-list");
        if (detailsList) {
            const yearLabels = {
                "1": "1st Year (Freshman)",
                "2": "2nd Year (Sophomore)",
                "3": "3rd Year (Junior)",
                "4": "4th Year (Senior)"
            };
            const yearText = yearLabels[data.year] || (data.year ? `${data.year} Year` : "3rd Year (Junior)");
            detailsList.innerHTML = `
                <li><strong>Email:</strong> ${escapeHtml(data.email || "Not provided")}</li>
                <li><strong>Current Standing:</strong> ${escapeHtml(yearText)}</li>
                <li><strong>Degree Program:</strong> ${escapeHtml(data.degree || "B.Tech Computer Science")}</li>
            `;
        }

        // show skills as tags
        const skillUl = profileRecordCard.querySelector(".skill-tags");
        if (skillUl) {
            const skills = parseSkillsString(data.skills);
            if (skills.length > 0) {
                skillUl.innerHTML = skills.map(s => `<li>${escapeHtml(s)}</li>`).join("");
            } else {
                skillUl.innerHTML = `<li>No skills listed yet</li>`;
            }
        }

        // update the bio/intro section
        const goalsSection = profileRecordCard.querySelector(".profile-sub-section:last-of-type p");
        if (goalsSection && data.intro) {
            goalsSection.textContent = data.intro;
        }
    }

    // fill the form with previously saved data
    function populateForm(data) {
        if (!data) return;
        if (nameInput) nameInput.value = data.name || "";
        if (emailInput) emailInput.value = data.email || "";
        if (degreeInput) degreeInput.value = data.degree || "";
        if (yearSelect) yearSelect.value = data.year || "";
        if (skillsInput) skillsInput.value = data.skills || "";
        if (interestsInput) interestsInput.value = data.interests || "";
        if (introInput) introInput.value = data.intro || "";
    }

    // load saved profile on page open
    const savedProfile = getSavedProfile();
    if (savedProfile) {
        populateForm(savedProfile);
        renderProfileCard(savedProfile);
    }

    // handle form submission
    if (profileForm) {
        profileForm.addEventListener("submit", function (e) {
            e.preventDefault();

            // read all field values
            const nameVal = nameInput ? nameInput.value.trim() : "";
            const emailVal = emailInput ? emailInput.value.trim() : "";
            const degreeVal = degreeInput ? degreeInput.value.trim() : "";
            const yearVal = yearSelect ? yearSelect.value.trim() : "";
            const skillsVal = skillsInput ? skillsInput.value.trim() : "";
            const interestsVal = interestsInput ? interestsInput.value.trim() : "";
            const introVal = introInput ? introInput.value.trim() : "";

            // basic validation
            if (!nameVal || !emailVal || !degreeVal || !yearVal || !skillsVal) {
                showStatusMessage(messageContainer, "Please fill in all required fields (Name, Email, Degree, Year, and Skills).", "error");
                return;
            }

            const profileObject = {
                name: nameVal,
                email: emailVal,
                degree: degreeVal,
                year: yearVal,
                skills: skillsVal,
                interests: interestsVal,
                intro: introVal,
                updatedAt: new Date().toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })
            };

            const success = saveProfile(profileObject);
            if (success) {
                renderProfileCard(profileObject);
                showStatusMessage(
                    messageContainer,
                    "Student profile saved successfully! Your skills will now be used to compute match scores for all internship listings.",
                    "success"
                );
            } else {
                showStatusMessage(messageContainer, "Unable to save profile to Local Storage. Please ensure cookies and storage are enabled.", "error");
            }
        });

        // edit profile button scrolls to and focuses the form
        const editProfileBtn = document.getElementById("btn-edit-profile");
        if (editProfileBtn) {
            editProfileBtn.addEventListener("click", function () {
                const nameInput = document.getElementById("student-name");
                if (nameInput) {
                    setTimeout(() => nameInput.focus(), 150);
                }
            });
        }

        // delete profile button clears everything
        const deleteProfileBtn = document.getElementById("btn-delete-profile");
        if (deleteProfileBtn) {
            deleteProfileBtn.addEventListener("click", function () {
                const confirmed = window.confirm(
                    "Are you sure you want to delete your profile? This will reset your profile information and match scores."
                );
                if (confirmed) {
                    deleteProfile();
                    profileForm.reset();
                    showStatusMessage(messageContainer, "Your profile has been deleted.", "info");

                    // reset the display card back to default
                    const defaultProfile = {
                        name: "Student Profile Cleared",
                        degree: "No degree specified",
                        year: "",
                        email: "Not provided",
                        skills: "",
                        intro: "Fill in the form below and click Save Profile to create your profile."
                    };
                    renderProfileCard(defaultProfile);
                }
            });
        }
    }

    // show application history at the bottom of the profile page
    renderApplicationHistory();
}

// Show submitted applications on the profile page
function renderApplicationHistory() {
    const mainElement = document.querySelector("main");
    if (!mainElement) return;

    let historySection = document.getElementById("application-history-section");
    if (!historySection) {
        historySection = document.createElement("section");
        historySection.id = "application-history-section";
        historySection.innerHTML = `
            <hr>
            <h2>Your Application History</h2>
            <p>Review and track your submitted internship applications.</p>
            <div id="applications-container"></div>
        `;
        mainElement.appendChild(historySection);
    }

    const container = document.getElementById("applications-container");
    if (!container) return;

    const applications = getSavedApplications();

    if (applications.length === 0) {
        container.innerHTML = `
            <div class="empty-state-box">
                <p><strong>No applications submitted yet.</strong></p>
                <p>When you apply for an internship, your submitted applications will appear here.</p>
                <p><a href="internships.html" class="btn btn-secondary">Browse Available Internships</a></p>
            </div>
        `;
        return;
    }

    // build the application cards
    let cardsHtml = `<div class="cards-grid">`;
    applications.forEach(app => {
        cardsHtml += `
            <article class="card">
                <div>
                    <span class="badge badge-success" style="margin-bottom: 0.5rem;">${escapeHtml(app.status || "Submitted")}</span>
                    <h3>${escapeHtml(app.internshipTitle || "Internship Role")}</h3>
                    <p><strong>Organization:</strong> ${escapeHtml(app.organization || "Sample Org")}</p>
                    <p><strong>Submitted On:</strong> ${escapeHtml(app.submissionDate || "Recent")}</p>
                    <p><strong>Applicant:</strong> ${escapeHtml(app.applicantName || "Student")}</p>
                </div>
                <p>
                    <a href="internship-details.html?id=${encodeURIComponent(app.internshipId || "frontend")}" class="btn btn-secondary">View Role</a>
                    <button type="button" class="btn btn-secondary btn-delete-app" data-app-id="${escapeHtml(app.id)}" style="color: #C53030; border-color: #FEB2B2;">Withdraw</button>
                </p>
            </article>
        `;
    });
    cardsHtml += `</div>`;
    container.innerHTML = cardsHtml;

    // attach withdraw button handlers
    const deleteButtons = container.querySelectorAll(".btn-delete-app");
    deleteButtons.forEach(btn => {
        btn.addEventListener("click", function () {
            const appId = this.getAttribute("data-app-id");
            const confirmed = window.confirm("Are you sure you want to withdraw this application?");
            if (confirmed) {
                deleteApplication(appId);
                renderApplicationHistory();
            }
        });
    });
}

// --- Internships Page (internships.html) ---

function initInternshipsPage() {
    const mainElement = document.querySelector("main");
    if (!mainElement) return;

    // only run this function on the internships listing page
    const pageHeading = mainElement.querySelector("h1");
    if (!pageHeading || !pageHeading.textContent.includes("Internship Opportunities")) return;

    const listingsSection = mainElement.querySelector("section:nth-of-type(2)");
    if (!listingsSection) return;

    const profile = getSavedProfile();
    const userSkills = profile ? parseSkillsString(profile.skills) : [];

    // inject the search and filter panel if it's not already there
    let filterContainer = document.getElementById("internships-filter-panel");
    if (!filterContainer) {
        filterContainer = document.createElement("div");
        filterContainer.id = "internships-filter-panel";
        filterContainer.className = "filter-panel";

        filterContainer.innerHTML = `
            <div class="filter-row">
                <div class="filter-field filter-search">
                    <label for="internship-search">Search Opportunities:</label>
                    <input type="text" id="internship-search" placeholder="Search by role title, organization, or skill...">
                </div>
                <div class="filter-field">
                    <label for="category-filter">Category:</label>
                    <select id="category-filter">
                        <option value="all">All Categories</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Software Engineering">Software Engineering</option>
                        <option value="Data & BI">Data &amp; Business Intelligence</option>
                        <option value="AI & ML">AI &amp; Machine Learning</option>
                        <option value="Design">UI/UX Design</option>
                        <option value="Database & Cloud">Database &amp; Cloud</option>
                    </select>
                </div>
                <div class="filter-field">
                    <label for="location-filter">Location / Mode:</label>
                    <select id="location-filter">
                        <option value="all">All Modes</option>
                        <option value="Remote">Remote</option>
                        <option value="Hybrid">Hybrid</option>
                    </select>
                </div>
                <div class="filter-field filter-btn-field">
                    <label>&nbsp;</label>
                    <button type="button" id="clear-filters-btn" class="btn btn-secondary">Clear Filters</button>
                </div>
            </div>
            <div id="filter-status-info" class="filter-status-info" aria-live="polite"></div>
        `;

        // show match banner depending on whether profile exists
        const matchBanner = document.createElement("div");
        matchBanner.id = "profile-match-banner";
        if (profile) {
            matchBanner.className = "notice-box";
            matchBanner.innerHTML = `
                <strong>Personalized Matching Active:</strong> Calculating match scores using skills from your profile (<strong>${escapeHtml(profile.name)}</strong>: ${escapeHtml(profile.skills)}).
            `;
        } else {
            matchBanner.className = "notice-box";
            matchBanner.innerHTML = `
                <strong>Tip:</strong> Create your student profile to view personalized skill match percentages for every role.
                <a href="profile.html" style="font-weight: 600; text-decoration: underline; margin-left: 0.5rem;">Create Profile &rarr;</a>
            `;
        }

        listingsSection.insertBefore(matchBanner, listingsSection.querySelector(".cards-grid") || listingsSection.querySelector("h2").nextSibling);
        listingsSection.insertBefore(filterContainer, listingsSection.querySelector(".cards-grid"));
    }

    // get or create the cards grid
    let cardsGrid = listingsSection.querySelector(".cards-grid");
    if (!cardsGrid) {
        cardsGrid = document.createElement("div");
        cardsGrid.className = "cards-grid";
        listingsSection.appendChild(cardsGrid);
    }
    cardsGrid.id = "internships-grid";

    // render cards based on current filter/search values
    function renderFilteredInternships() {
        const searchInput = document.getElementById("internship-search");
        const categorySelect = document.getElementById("category-filter");
        const locationSelect = document.getElementById("location-filter");
        const statusInfo = document.getElementById("filter-status-info");

        const searchQuery = searchInput ? searchInput.value.toLowerCase().trim() : "";
        const selectedCategory = categorySelect ? categorySelect.value : "all";
        const selectedLocation = locationSelect ? locationSelect.value : "all";

        // filter the data array
        const filtered = internshipsData.filter(item => {
            if (selectedCategory !== "all" && item.category !== selectedCategory) {
                return false;
            }
            if (selectedLocation !== "all" && item.location !== selectedLocation) {
                return false;
            }
            if (searchQuery) {
                const titleMatch = item.title.toLowerCase().includes(searchQuery);
                const orgMatch = item.organization.toLowerCase().includes(searchQuery);
                const catMatch = item.categoryLabel.toLowerCase().includes(searchQuery);
                const skillMatch = item.requiredSkills.some(s => s.toLowerCase().includes(searchQuery)) ||
                    item.preferredSkills.some(s => s.toLowerCase().includes(searchQuery));

                if (!titleMatch && !orgMatch && !catMatch && !skillMatch) {
                    return false;
                }
            }
            return true;
        });

        // update the result count text
        if (statusInfo) {
            statusInfo.textContent = `Showing ${filtered.length} of ${internshipsData.length} available opportunities`;
        }

        // show a message if nothing matches
        if (filtered.length === 0) {
            cardsGrid.innerHTML = `
                <div class="empty-state-box" style="grid-column: 1 / -1;">
                    <h3>No Internships Found</h3>
                    <p>No opportunities match your current search and filter combination.</p>
                    <p><button type="button" id="reset-filter-link" class="btn btn-secondary">Reset All Filters</button></p>
                </div>
            `;
            const resetLink = document.getElementById("reset-filter-link");
            if (resetLink) {
                resetLink.addEventListener("click", resetFilters);
            }
            return;
        }

        // build and display the cards
        cardsGrid.innerHTML = filtered.map((item, index) => {
            // show match score badge if profile exists
            let matchBadgeHtml = "";
            if (profile && userSkills.length > 0) {
                const matchResult = calculateMatch(userSkills, item.requiredSkills);
                matchBadgeHtml = `
                    <div class="match-score-pill ${matchResult.badgeClass}">
                        <strong>${matchResult.score}% Match</strong> &bull; ${escapeHtml(matchResult.matchLevel)}
                    </div>
                `;
            }

            const skillTags = item.requiredSkills.map(s => `<li>${escapeHtml(s)}</li>`).join("");

            return `
                <article class="card">
                    <div>
                        ${matchBadgeHtml}
                        <h3>${index + 1}. ${escapeHtml(item.title)}</h3>
                        <p><strong>Organization:</strong> ${escapeHtml(item.organization)}</p>
                        <p><strong>Category:</strong> ${escapeHtml(item.categoryLabel)}</p>
                        <p><strong>Location / Mode:</strong> ${escapeHtml(item.locationLabel)}</p>
                        <p><strong>Estimated Duration:</strong> ${escapeHtml(item.durationDetail)}</p>
                        <p><strong>Role Summary:</strong> ${escapeHtml(item.shortDescription)}</p>
                        <h4>Required Skills:</h4>
                        <ul class="skill-tags">${skillTags}</ul>
                    </div>
                    <p>
                        <a href="internship-details.html?id=${encodeURIComponent(item.id)}" class="btn btn-secondary">View Role Details</a>
                        <a href="apply.html?id=${encodeURIComponent(item.id)}" class="btn btn-primary">Apply Now</a>
                    </p>
                </article>
            `;
        }).join("");
    }

    // reset all filters to default
    function resetFilters() {
        const searchInput = document.getElementById("internship-search");
        const categorySelect = document.getElementById("category-filter");
        const locationSelect = document.getElementById("location-filter");

        if (searchInput) searchInput.value = "";
        if (categorySelect) categorySelect.value = "all";
        if (locationSelect) locationSelect.value = "all";

        renderFilteredInternships();
    }

    // attach event listeners to search and filter inputs
    const searchInput = document.getElementById("internship-search");
    const categorySelect = document.getElementById("category-filter");
    const locationSelect = document.getElementById("location-filter");
    const clearBtn = document.getElementById("clear-filters-btn");

    if (searchInput) searchInput.addEventListener("input", renderFilteredInternships);
    if (categorySelect) categorySelect.addEventListener("change", renderFilteredInternships);
    if (locationSelect) locationSelect.addEventListener("change", renderFilteredInternships);
    if (clearBtn) clearBtn.addEventListener("click", resetFilters);

    // first render on page load
    renderFilteredInternships();
}

// --- Internship Details Page (internship-details.html) ---

function initInternshipDetailsPage() {
    const mainElement = document.querySelector("main");
    if (!mainElement) return;

    // only run on the details page
    const backLink = mainElement.querySelector(".back-link");
    if (!backLink || !backLink.textContent.includes("Internships")) return;

    // get the internship ID from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const selectedId = urlParams.get("id") || "frontend";

    // find the matching internship object
    const internship = internshipsData.find(item => item.id.toLowerCase() === selectedId.toLowerCase());

    // show an error if the ID doesn't match anything
    if (!internship) {
        mainElement.innerHTML = `
            <div class="empty-state-box" style="margin: 3rem auto; max-width: 600px;">
                <h1>Internship Not Found</h1>
                <p>We could not find an internship opportunity matching the identifier "<strong>${escapeHtml(selectedId)}</strong>".</p>
                <p>Please browse our directory of available opportunities to select an active role.</p>
                <p><a href="internships.html" class="btn btn-primary">&larr; Return to All Internship Listings</a></p>
            </div>
        `;
        return;
    }

    document.title = `${internship.title} Details — SkillBridge`;

    // update the role header section
    const roleHeader = mainElement.querySelector("section:first-of-type");
    if (roleHeader) {
        roleHeader.innerHTML = `
            <p><a href="internships.html" class="back-link">&larr; Back to All Internships</a></p>
            <h1>${escapeHtml(internship.title)}</h1>
            <p><strong>Organization:</strong> ${escapeHtml(internship.organization)}</p>
        `;
    }

    // insert the skill match analysis box
    const profile = getSavedProfile();
    let matchSection = document.getElementById("internship-match-analysis");

    if (!matchSection) {
        matchSection = document.createElement("section");
        matchSection.id = "internship-match-analysis";
        matchSection.className = "details-content-box";

        const firstHr = mainElement.querySelector("hr");
        if (firstHr && firstHr.nextElementSibling) {
            mainElement.insertBefore(matchSection, firstHr.nextElementSibling);
        } else {
            mainElement.appendChild(matchSection);
        }
    }

    if (profile) {
        const userSkills = parseSkillsString(profile.skills);
        const match = calculateMatch(userSkills, internship.requiredSkills);

        const matchedTags = match.matchedSkills.length > 0
            ? match.matchedSkills.map(s => `<li class="skill-tag-matched">&#10003; ${escapeHtml(s)}</li>`).join("")
            : `<li>No direct matches found yet</li>`;

        const missingTags = match.missingSkills.length > 0
            ? match.missingSkills.map(s => `<li class="skill-tag-missing">&#9675; ${escapeHtml(s)}</li>`).join("")
            : `<li>None! You meet all required skills!</li>`;

        matchSection.innerHTML = `
            <h2>Why This Internship Matches You</h2>
            <div class="match-summary-card">
                <div class="match-score-large">
                    <span class="match-percentage">${match.score}%</span>
                    <span class="badge ${match.badgeClass}">${escapeHtml(match.matchLevel)}</span>
                </div>
                <div class="match-breakdown">
                    <p>Based on the skills saved in your student profile (<strong>${escapeHtml(profile.name)}</strong>), here is how your profile compares against this role's requirements:</p>
                    <div class="match-skills-columns">
                        <div>
                            <h4>Matched Required Skills (${match.matchedSkills.length}/${internship.requiredSkills.length}):</h4>
                            <ul class="skill-tags">${matchedTags}</ul>
                        </div>
                        <div>
                            <h4>Skills to Learn or Improve (${match.missingSkills.length}):</h4>
                            <ul class="skill-tags">${missingTags}</ul>
                        </div>
                    </div>
                    <small><em>Skill match percentage is calculated based on your profile skills compared against this role's required qualifications.</em></small>
                </div>
            </div>
        `;
    } else {
        matchSection.innerHTML = `
            <h2>Personalized Skill Match Score</h2>
            <p>You have not created a student profile yet. Create a profile to view your personalized match percentage and skill gap analysis for this role.</p>
            <p><a href="profile.html" class="btn btn-secondary">Create Student Profile &rarr;</a></p>
        `;
    }

    // fill in each content box with the right internship data
    const overviewBoxes = mainElement.querySelectorAll(".details-content-box");
    overviewBoxes.forEach(box => {
        const h2 = box.querySelector("h2");
        if (!h2) return;

        if (h2.textContent.includes("Role Overview")) {
            box.innerHTML = `
                <h2>Role Overview</h2>
                <p>${escapeHtml(internship.fullDescription)}</p>
                <h3>Quick Internship Facts:</h3>
                <ul class="facts-grid">
                    <li><strong>Role Category</strong>${escapeHtml(internship.categoryLabel)}</li>
                    <li><strong>Work Arrangement</strong>${escapeHtml(internship.locationLabel)}</li>
                    <li><strong>Proposed Duration</strong>${escapeHtml(internship.durationDetail)}</li>
                    <li><strong>Stipend / Support</strong>${escapeHtml(internship.stipend)}</li>
                </ul>
            `;
        } else if (h2.textContent.includes("Responsibilities")) {
            const respItems = internship.responsibilities.map(r => `<li>${escapeHtml(r)}</li>`).join("");
            box.innerHTML = `
                <h2>Key Responsibilities</h2>
                <p>During this internship program, a student intern will engage in the following practical tasks:</p>
                <ul class="styled-list">${respItems}</ul>
            `;
        } else if (h2.textContent.includes("Qualifications")) {
            const reqItems = internship.requiredSkills.map(r => `<li>${escapeHtml(r)}</li>`).join("");
            const prefItems = internship.preferredSkills.map(p => `<li>${escapeHtml(p)}</li>`).join("");
            const eligItems = internship.eligibility.map(e => `<li>${escapeHtml(e)}</li>`).join("");

            box.innerHTML = `
                <h2>Required &amp; Preferred Qualifications</h2>
                <h3>Required Skills:</h3>
                <ul class="styled-list">${reqItems}</ul>
                <h3>Preferred / Bonus Competencies:</h3>
                <ul class="styled-list">${prefItems}</ul>
                <h3>Eligibility Criteria:</h3>
                <ul class="styled-list">${eligItems}</ul>
            `;
        } else if (h2.textContent.includes("Learning Outcomes")) {
            const outcomeItems = internship.learningOutcomes.map(o => `<li>${escapeHtml(o)}</li>`).join("");
            box.innerHTML = `
                <h2>Learning Outcomes &amp; Mentorship Benefits</h2>
                <p>By engaging with this learning track, students are expected to gain:</p>
                <ol class="styled-list">${outcomeItems}</ol>
            `;
        } else if (h2.textContent.includes("Application Process")) {
            box.innerHTML = `
                <h2>Application Process</h2>
                <p>Students interested in applying for this internship can follow these steps:</p>
                <ol class="process-steps-list">
                    <li>Ensure your academic details and skill competencies are gathered.</li>
                    <li>Navigate to the application form using the button below.</li>
                    <li>Complete the required contact, educational, and interest fields.</li>
                    <li>Submit the form to record your application.</li>
                </ol>
                <p class="btn-group">
                    <a href="apply.html?id=${encodeURIComponent(internship.id)}" class="btn btn-primary">Proceed to Application Form &rarr;</a>
                    <a href="internships.html" class="btn btn-secondary">&larr; Return to All Internship Listings</a>
                </p>
            `;
        }
    });
}

// --- Application Form (apply.html) ---

function initApplyPage() {
    const mainElement = document.querySelector("main");
    if (!mainElement) return;

    const applyForm = mainElement.querySelector("form");
    if (!applyForm) return;

    // get the internship ID from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const selectedId = urlParams.get("id") || "frontend";

    const internship = internshipsData.find(item => item.id.toLowerCase() === selectedId.toLowerCase()) || internshipsData[0];

    document.title = `Apply for ${internship.title} — SkillBridge`;

    // update the back link to go to the right details page
    const backLink = mainElement.querySelector(".back-link");
    if (backLink) {
        backLink.href = `internship-details.html?id=${encodeURIComponent(internship.id)}`;
        backLink.textContent = `← Return to ${internship.title} Details`;
    }

    const roleHeading = mainElement.querySelector("section p strong");
    if (roleHeading && roleHeading.parentNode) {
        roleHeading.parentNode.innerHTML = `<strong>Applying for Role:</strong> ${escapeHtml(internship.title)} at ${escapeHtml(internship.organization)}`;
    }

    // message container for form feedback
    let messageContainer = document.getElementById("apply-status-message");
    if (!messageContainer) {
        messageContainer = document.createElement("div");
        messageContainer.id = "apply-status-message";
        messageContainer.style.marginBottom = "1.5rem";
        applyForm.parentNode.insertBefore(messageContainer, applyForm);
    }

    // form fields
    const nameInput = document.getElementById("applicant-name");
    const emailInput = document.getElementById("applicant-email");
    const collegeInput = document.getElementById("college-name");
    const degreeInput = document.getElementById("degree-program");
    const yearSelect = document.getElementById("year-of-study");
    const skillsTextarea = document.getElementById("relevant-skills");
    const statementTextarea = document.getElementById("statement-of-interest");
    const consentCheckbox = document.getElementById("confirmation-consent");

    // pre-fill fields from saved profile if available
    const profile = getSavedProfile();
    if (profile) {
        if (nameInput && !nameInput.value) nameInput.value = profile.name || "";
        if (emailInput && !emailInput.value) emailInput.value = profile.email || "";
        if (degreeInput && !degreeInput.value) degreeInput.value = profile.degree || "";
        if (skillsTextarea && !skillsTextarea.value) skillsTextarea.value = profile.skills || "";

        if (yearSelect && !yearSelect.value && profile.year) {
            const yearMap = { "1": "1st-year", "2": "2nd-year", "3": "3rd-year", "4": "4th-year" };
            if (yearMap[profile.year]) yearSelect.value = yearMap[profile.year];
        }
    }

    // handle form submission
    applyForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const nameVal = nameInput ? nameInput.value.trim() : "";
        const emailVal = emailInput ? emailInput.value.trim() : "";
        const collegeVal = collegeInput ? collegeInput.value.trim() : "";
        const degreeVal = degreeInput ? degreeInput.value.trim() : "";
        const yearVal = yearSelect ? yearSelect.value.trim() : "";
        const skillsVal = skillsTextarea ? skillsTextarea.value.trim() : "";
        const statementVal = statementTextarea ? statementTextarea.value.trim() : "";
        const consentVal = consentCheckbox ? consentCheckbox.checked : false;

        // check all required fields are filled
        if (!nameVal || !emailVal || !collegeVal || !degreeVal || !yearVal || !skillsVal || !statementVal) {
            showStatusMessage(messageContainer, "Please fill in all required fields marked with *.", "error");
            return;
        }

        if (!consentVal) {
            showStatusMessage(messageContainer, "Please confirm the declaration and consent checkbox before submitting.", "error");
            return;
        }

        // prevent duplicate applications for the same role
        const existingApps = getSavedApplications();
        const duplicate = existingApps.find(
            app => app.internshipId === internship.id && app.applicantEmail.toLowerCase() === emailVal.toLowerCase()
        );

        if (duplicate) {
            showStatusMessage(
                messageContainer,
                `You have already submitted an application for "${internship.title}" on ${duplicate.submissionDate}. You can view and manage your submissions on your Student Profile page.`,
                "info"
            );
            return;
        }

        // build the application record object
        const newApplication = {
            id: "app_" + Date.now(),
            internshipId: internship.id,
            internshipTitle: internship.title,
            organization: internship.organization,
            applicantName: nameVal,
            applicantEmail: emailVal,
            college: collegeVal,
            degree: degreeVal,
            submissionDate: new Date().toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" }),
            status: "Submitted"
        };

        const saved = saveApplication(newApplication);

        if (saved) {
            showStatusMessage(
                messageContainer,
                `Application submitted successfully for ${internship.title} at ${internship.organization}! Your application has been recorded and added to your Application History.`,
                "success"
            );
            applyForm.reset();
        } else {
            showStatusMessage(messageContainer, "Unable to save application to Local Storage. Please check browser settings.", "error");
        }
    });
}

// --- Contact Page (contact.html) ---

function initContactPage() {
    const contactForm = document.querySelector("main form");
    if (!contactForm) return;

    // only run on the contact page
    const pageHeading = document.querySelector("h1");
    if (!pageHeading || !pageHeading.textContent.includes("Contact")) return;

    let messageContainer = document.getElementById("contact-status-message");
    if (!messageContainer) {
        messageContainer = document.createElement("div");
        messageContainer.id = "contact-status-message";
        messageContainer.style.marginBottom = "1.5rem";
        contactForm.parentNode.insertBefore(messageContainer, contactForm);
    }

    const nameInput = document.getElementById("contact-name");
    const emailInput = document.getElementById("contact-email");
    const subjectInput = document.getElementById("contact-subject");
    const messageTextarea = document.getElementById("contact-message");

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const nameVal = nameInput ? nameInput.value.trim() : "";
        const emailVal = emailInput ? emailInput.value.trim() : "";
        const subjectVal = subjectInput ? subjectInput.value.trim() : "";
        const msgVal = messageTextarea ? messageTextarea.value.trim() : "";

        if (!nameVal || !emailVal || !subjectVal || !msgVal) {
            showStatusMessage(messageContainer, "Please complete all required fields before sending.", "error");
            return;
        }

        showStatusMessage(
            messageContainer,
            `Thank you, ${nameVal}! Your inquiry regarding "${subjectVal}" has been sent successfully. Our team will get back to you shortly.`,
            "success"
        );

        contactForm.reset();
    });
}

// --- Utility: Escape HTML ---
// Prevents any user input from being treated as HTML when displayed on the page

function escapeHtml(string) {
    if (typeof string !== "string") return string;
    return string
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// --- Run everything when the page is ready ---
// Each function checks if it's on the right page before doing anything

document.addEventListener("DOMContentLoaded", () => {
    initHomePage();
    initProfilePage();
    initInternshipsPage();
    initInternshipDetailsPage();
    initApplyPage();
    initContactPage();
});
