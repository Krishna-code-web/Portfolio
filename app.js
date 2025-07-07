// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Navbar scroll effect
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

document.querySelectorAll(".fade-in").forEach((el) => {
  observer.observe(el);
});

// Form submission
document
  .querySelector(".contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(this);
    const name = this.querySelector('input[placeholder="Your Name"]').value;
    const email = this.querySelector('input[placeholder="Your Email"]').value;
    const subject = this.querySelector('input[placeholder="Subject"]').value;
    const message = this.querySelector("textarea").value;

    // Simple validation
    if (!name || !email || !subject || !message) {
      alert("Please fill in all fields");
      return;
    }

    // Simulate form submission
    const submitBtn = this.querySelector(".submit-btn");
    const originalText = submitBtn.textContent;
    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    setTimeout(() => {
      alert("Thank you for your message! I'll get back to you soon.");
      this.reset();
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }, 2000);
  });

// Skills Section
let skills = ""

const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 40 },
        { name: 'JavaScript', level: 75 },
        { name: 'Css', level: 90 },
        { name: 'Html', level: 92 },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 45 },
        { name: 'Python', level: 85 },
        { name: 'Express', level: 50 },
        { name: 'GraphQL', level: 80 },
      ]
    },
    {
      title: 'Database',
      skills: [
        { name: 'PostgreSQL', level: 78 },
        { name: 'MongoDB', level: 80 },
        { name: 'SQL', level: 78 },
        { name: 'MySQL', level: 70}
      ]
    }
];

const skillGrid = document.querySelector('.skills-grid');

skillCategories.forEach((category) => {
    skills += `<div class="skill-card">
    <div class="card-header">
      
      <h2>${category.title}</h2>
    </div>

    <div class="skill">
      <div class="skill-label">
        <span>${category.skills[0].name}</span>
        <span>${category.skills[0].level}%</span>
      </div>
      <div class="progress-bar">
        <div class="progress" style="width: ${category.skills[0].level}%;"></div>
      </div>
    </div>

    <div class="skill">
      <div class="skill-label">
        <span>${category.skills[1].name}</span>
        <span>${category.skills[1].level}%</span>
      </div>
      <div class="progress-bar">
        <div class="progress" style="width: ${category.skills[1].level}%;"></div>
      </div>
    </div>

    <div class="skill">
      <div class="skill-label">
        <span>${category.skills[2].name}</span>
        <span>${category.skills[2].level}%</span>
      </div>
      <div class="progress-bar">
        <div class="progress" style="width: ${category.skills[2].level}%;"></div>
      </div>
    </div>

    <div class="skill">
      <div class="skill-label">
        <span>${category.skills[3].name}</span>
        <span>${category.skills[3].level}%</span>
      </div>
      <div class="progress-bar">
        <div class="progress" style="width: ${category.skills[3].level}%;"></div>
      </div>
    </div>
  </div>`
});

skillGrid.innerHTML = skills;

// Projects 
let projects = "";

const projectCategories = [
  {
    image: "assests/google.png",
    title: "Google Home Page",
    description: "I created this web page to strengthen my HTML and CSS skills.",
    tags: [
      {name: "HTML"},
      {name: "CSS"},
      {name: "D3.js"}
    ],
    link: "https://krishna-code-web.github.io/Google-clone/"
  },
  {
    image: "assests/tic-tac-toe.png",
    title: "Tic Tac Toe Game",
    description: "I created this basic tic tac toe game to strengthen my JavaScript skills.",
    tags: [
      {name: "HTML"},
      {name: "CSS"},
      {name: "JavaScript"}
    ],
    link: "https://krishna-code-web.github.io/Tic-Tac-Toe/"
  },
  {
    image: "assests/rock-paper-scissors.png",
    title: "Rock Paper Scissors",
    description: "I created this basic rock paper scissors game to practicing my JavaScript skills.",
    tags: [
      {name: "HTML"},
      {name: "CSS"},
      {name: "JavaScript"}
    ],
    link: "https://krishna-code-web.github.io/Rock-Paper-Scissors/"
  }
];

projectCategories.forEach((project) => {
  projects += `<a class="project-link" href="${project.link}">
                <div class="portfolio-item">
                    <div class="portfolio-image"><img class='project-image' src="${project.image}" alt=""/></div>
                    <div class="portfolio-content">
                        <h3 class="portfolio-title">${project.title}</h3>
                        <p class="portfolio-description">${project.description}</p>
                        <div class="portfolio-tags">
                            <span class="tag">${project.tags[0].name}</span>
                            <span class="tag">${project.tags[1].name}</span>
                            <span class="tag">${project.tags[2].name}</span>
                        </div>
                    </div>
                </div></a>`
});

document.querySelector('.portfolio-grid').innerHTML = projects;

   
