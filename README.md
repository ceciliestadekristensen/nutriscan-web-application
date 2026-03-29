# NutriScan Web Application

## Overview

NutriScan is a frontend web application developed to improve **consumer understanding of nutritional information** on food products.

The project is based on research showing that many consumers struggle to interpret nutrition labels due to complex terminology, lack of time, and low health literacy. NutriScan addresses this by presenting nutritional data in a simplified, visual, and user-friendly format.

The application is designed especially for young adults (15–30 years old) and focuses on making healthier choices easier and more accessible.

---

## Problem Statement

> How can a web solution assist consumers in understanding and navigating nutritional labels, while supporting personal preferences and dietary needs?

This project aims to bridge the gap between available nutritional data and actual user understanding.

---

## Key Features

* Product browsing by category (e.g. beverages, dairy, frozen food)
* Detailed product pages with structured nutritional tables
* Search functionality
* Product filtering based on preferences (e.g. dietary needs)
* User authentication (login/signup using localStorage)
* Personalized profile page

---

## Design Principles

The application is built around the following UX principles:

* **Simplicity** – complex data is reduced to clear, readable formats
* **Accessibility** – easy to understand for users with different levels of knowledge
* **Efficiency** – users can quickly scan and understand a product
* **Consistency** – uniform layout across all pages

These principles are based on insights from user research (questionnaires and interviews), where users expressed a need for clear visualisation and faster decision making.

---

## Methodology (Project Background)

This project is grounded in both quantitative and qualitative research:

* **Questionnaire (63 participants)** to identify user habits and needs
* **Interviews** to gain deeper insight into user behaviour
* **Computational Thinking**:

  * Decomposition of the problem
  * Pattern recognition in user behaviour
  * Abstraction of key challenges
  * Algorithmic structuring of the solution

The findings showed that users prefer:

* simple visual indicators (e.g. colors)
* quick access to key information
* less technical language

---

## Technologies Used

* **HTML5** – structure and semantic layout
* **CSS3** – styling, layout, and responsive design
* **JavaScript** – interactivity and dynamic behaviour
* **LocalStorage** – simulated authentication and user data

---

## How to Run the Project

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/nutriscan.git
   ```

2. Open the project in VS Code

3. Run using Live Server:

   * Right click `index.html`
   * Select "Open with Live Server"

---

## Project Structure

```
nutriscan/
│
├── index.html
├── README.md
│
├── css/
│   └── styles.css
│
├── js/
│   └── script.js
│
├── images/
│
└── pages/
    ├── beverages.html
    ├── dairy.html
    ├── frozenfoods.html
    ├── products_all.html
    ├── product_redbull.html
    ├── product_monster.html
    ├── product_booster.html
    ├── information.html
    ├── contactus.html
    ├── login.html
    ├── signup.html
    ├── myprofile.html
```

---

## Limitations

* Frontend-only application (no backend or database)
* Static product data
* Authentication handled via localStorage
* No real-time API integration

---

## Screenshots


---

## What I Learned

Through this project I developed skills in:

* Structuring a multi-page web application
* Translating user research into design decisions
* Creating user-friendly interfaces for complex data
* Working with JavaScript for dynamic functionality
* Designing with a UX-focused mindset

---

## Project Context

This project was developed as part of a university project:

**"NutriScan: Enhancing Consumer Nutrition Literacy Through Technology"**
