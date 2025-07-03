document.addEventListener("DOMContentLoaded", () => {
  // Mobile Navigation Toggle
  const hamburger = document.querySelector(".hamburger")
  const navLinks = document.querySelector(".nav-links")
  const navLinksItems = document.querySelectorAll(".nav-link")

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navLinks.classList.toggle("active")
  })

  // Close mobile menu when clicking on a nav link
  navLinksItems.forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active")
      navLinks.classList.remove("active")
    })
  })

  // Active Navigation Link on Scroll
  const sections = document.querySelectorAll("section")
  const navItems = document.querySelectorAll(".nav-link")

  window.addEventListener("scroll", () => {
    let current = ""

    sections.forEach((section) => {
      const sectionTop = section.offsetTop
      const sectionHeight = section.clientHeight

      if (pageYOffset >= sectionTop - 200) {
        current = section.getAttribute("id")
      }
    })

    navItems.forEach((item) => {
      item.classList.remove("active")
      if (item.getAttribute("href").substring(1) === current) {
        item.classList.add("active")
      }
    })

    // Navbar background change on scroll
    const navbar = document.querySelector(".navbar")
    if (window.scrollY > 50) {
      navbar.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
      navbar.style.height = "60px"
    } else {
      navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)"
      navbar.style.height = "70px"
    }
  })

  // Scroll Animations
  const animateOnScroll = () => {
    const elements = document.querySelectorAll(
      ".about-text, .skills, .project-card, .service-card, .contact-item, .contact-form-container",
    )

    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top
      const screenPosition = window.innerHeight / 1.3

      if (elementPosition < screenPosition) {
        if (element.classList.contains("about-text")) {
          element.style.animation = "fadeInLeft 1s forwards"
        } else if (element.classList.contains("skills")) {
          element.style.animation = "fadeInRight 1s forwards"
        } else {
          element.style.animation = "fadeInUp 1s forwards"
        }
      }
    })
  }

  window.addEventListener("scroll", animateOnScroll)
  animateOnScroll() // Run once on page load

  // Form Submission
  const contactForm = document.getElementById("contact-form")

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Get form values
      const name = document.getElementById("name").value
      const email = document.getElementById("email").value
      const subject = document.getElementById("subject").value
      const message = document.getElementById("message").value

      // Here you would typically send the form data to a server
      // For this example, we'll just log it and show an alert
      console.log("Form submitted:", { name, email, subject, message })

      // Show success message
      alert("Thank you for your message! I will get back to you soon.")

      // Reset form
      contactForm.reset()
    })
  }

  // Project hover effects
  const projectCards = document.querySelectorAll(".project-card")

  projectCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      const overlay = card.querySelector(".project-overlay")
      overlay.style.opacity = "1"
    })

    card.addEventListener("mouseleave", () => {
      const overlay = card.querySelector(".project-overlay")
      overlay.style.opacity = "0"
    })
  })

  // Typing animation for hero section
  const typingEffect = () => {
    const text = "Developer"
    const gradientText = document.querySelector(".gradient-text")
    let i = 0

    if (gradientText) {
      gradientText.textContent = ""

      const typing = setInterval(() => {
        if (i < text.length) {
          gradientText.textContent += text.charAt(i)
          i++
        } else {
          clearInterval(typing)
        }
      }, 150)
    }
  }

  // Uncomment to enable typing effect
  // setTimeout(typingEffect, 1500);
})
