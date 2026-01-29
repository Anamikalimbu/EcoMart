// Hamburger menu script
const hamburger = document.querySelector(".hamburger");
const hamburgerIcon = document.querySelector(".hamburger i");
const mobileMenu = document.querySelector(".mobile-menu");
hamburger.addEventListener("click", (e) => {
  e.preventDefault();
  mobileMenu.classList.toggle("mobile-menu-active");
  if (mobileMenu.classList.contains("mobile-menu-active")) {
    hamburgerIcon.classList.remove("fa-bars");
    hamburgerIcon.classList.add("fa-xmark");
  } else {
    hamburgerIcon.classList.remove("fa-xmark");
    hamburgerIcon.classList.add("fa-bars");
  }
});
// Cart counter
const cartValue = document.querySelector(".cart-value");
// Load cart count on page load
cartValue.textContent = localStorage.getItem("cartCount") || 0;
// Modal and Login Functionality
const modal = document.getElementById("loginModal");
const loginBtn = document.getElementById("loginBtn");
const mobileLoginBtn = document.getElementById("mobileLoginBtn");
const closeBtn = document.querySelector(".close");

// Function to update login button based on login state
function updateLoginButton() {
  const loggedInUser = localStorage.getItem("ecomartLoggedIn");
  if (loggedInUser) {
    loginBtn.innerHTML = '<i class="fa-solid fa-circle-user"></i>&nbsp;Logout';
    mobileLoginBtn.innerHTML =
      '<i class="fa-solid fa-circle-user"></i>&nbsp;Logout';
  } else {
    loginBtn.innerHTML = '<i class="fa-solid fa-circle-user"></i>&nbsp;Login';
    mobileLoginBtn.innerHTML =
      '<i class="fa-solid fa-circle-user"></i>&nbsp;Login';
  }
}

// Show modal on login button click (if not logged in)
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const loggedInUser = localStorage.getItem("ecomartLoggedIn");
  if (loggedInUser) {
    // If logged in, logout
    localStorage.removeItem("ecomartLoggedIn");
    updateLoginButton();
    // Optionally, refresh the page to reset state
    location.reload();
  } else {
    modal.style.display = "block";
  }
});

// Show modal on mobile login button click
mobileLoginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const loggedInUser = localStorage.getItem("ecomartLoggedIn");
  if (loggedInUser) {
    // If logged in, logout
    localStorage.removeItem("ecomartLoggedIn");
    updateLoginButton();
    location.reload();
  } else {
    modal.style.display = "block";
  }
});

// Close modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal when clicking outside
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// Tab switching
const registerTab = document.getElementById("registerTab");
const loginTab = document.getElementById("loginTab");
const registerForm = document.getElementById("registerForm");
const loginForm = document.getElementById("loginForm");

registerTab.addEventListener("click", () => {
  registerTab.classList.add("active");
  loginTab.classList.remove("active");
  registerForm.classList.remove("hidden");
  loginForm.classList.add("hidden");
});

loginTab.addEventListener("click", () => {
  loginTab.classList.add("active");
  registerTab.classList.remove("active");
  loginForm.classList.remove("hidden");
  registerForm.classList.add("hidden");
});

// Registration logic
registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const identifier = document.getElementById("regIdentifier").value.trim();
  const password = document.getElementById("regPassword").value.trim();
  const confirmPassword = document
    .getElementById("regConfirmPassword")
    .value.trim();
  const message = document.getElementById("registerMessage");

  // Clear previous message
  message.textContent = "";
  message.style.color = "";

  // Validation: Check if fields are empty
  if (!identifier || !password || !confirmPassword) {
    message.textContent = "Please fill in all fields.";
    message.style.color = "red";
    return false;
  }

  if (password !== confirmPassword) {
    message.textContent = "Passwords do not match.";
    message.style.color = "red";
    return false;
  }

  // Check if identifier already exists
  const users = JSON.parse(localStorage.getItem("ecomartUsers")) || {};
  if (users[identifier]) {
    message.textContent = "User already exists. Please login.";
    message.style.color = "red";
    return false;
  }

  // Store user
  users[identifier] = password;
  localStorage.setItem("ecomartUsers", JSON.stringify(users));
  // Set logged in status
  localStorage.setItem("ecomartLoggedIn", identifier);
  // Success message
  message.textContent = "Registered successfully!";
  message.style.color = "green";
  // Close modal after 2 seconds and update button
  setTimeout(() => {
    modal.style.display = "none";
    updateLoginButton();
  }, 2000);
});

// Login logic
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const identifier = document.getElementById("loginIdentifier").value.trim();
  const password = document.getElementById("loginPassword").value.trim();
  const message = document.getElementById("loginMessage");

  // Clear previous message
  message.textContent = "";
  message.style.color = "";

  // Validation: Check if fields are empty
  if (!identifier || !password) {
    message.textContent = "Please fill in all fields.";
    message.style.color = "red";
    return false;
  }

  const users = JSON.parse(localStorage.getItem("ecomartUsers")) || {};
  if (users[identifier] && users[identifier] === password) {
    // Success message
    message.textContent = "Logged in successfully!";
    message.style.color = "green";
    // Set logged in status
    localStorage.setItem("ecomartLoggedIn", identifier);
    // Close modal after 3 seconds and update button
    setTimeout(() => {
      modal.style.display = "none";
      updateLoginButton();
    }, 3000);
  } else {
    message.textContent = "Invalid credentials. Please try again.";
    message.style.color = "red";
  }
});

// On page load, update login button
document.addEventListener("DOMContentLoaded", updateLoginButton);
// Product data
const products = [
  {
    id: 1,
    name: "Bamboo ToothBrush set",
    image: "../Assets/images/products/product1.jpg",
    originalPrice: "NPR 200",
    price: "NPR 140", // Discounted price
    discount: "30%",
    description:
      "Reusable stainless steel water bottle that's BPA-free and helps reduce plastic waste. Keeps drinks cold for 24 hours or hot for 12 hours.",
    category: "personal-care",
  },
  {
    id: 2,
    name: "Bamboo Comb",
    image: "../Assets/images/products/product6.jpg",
    originalPrice: "NPR 100",
    price: "NPR 70", // Discounted price
    discount: "30%",
    description:
      "Biodegradable bamboo comb with natural bristles. A sustainable alternative to plastic toothbrushes, packaged in recyclable materials.",
    category: "personal-care",
  },
  {
    id: 3,
    name: "Organic Cotton Tote Bag",
    image: "../Assets/images/products/product3.jpg",
    originalPrice: "NPR 300",
    price: "NPR 255", // Discounted price
    discount: "15%",
    description:
      "Durable organic cotton tote bag perfect for shopping or daily use. Reduces the need for plastic bags and supports fair trade practices.",
    category: "bags",
  },
  {
    id: 4,
    name: "Steels Bottel",
    image: "../Assets/images/products/product8.jpg",
    originalPrice: "NPR 1000",
    price: "NPR 900", // Discounted price
    discount: "10%",
    description:
      "This stainless steel bottle is durable, lightweight, and designed for everyday use. Made from high-quality, food-grade stainless steel, it is rust-resistant, odor-free, and safe for storing both hot and cold beverages. The leak-proof cap ensures spill-free carrying, while the sleek design makes it easy to use at home, in the office, gym, school, or while traveling. Eco-friendly and reusable, this bottle helps reduce plastic waste while keeping drinks fresh for longer.",
    category: "personal-care",
  },
  {
    id: 5,
    name: "Bamboo Cup",
    image: "../Assets/images/products/product5.jpg",
    originalPrice: "NPR 300",
    price: "NPR 250", // Discounted price
    discount: "10%",
    description:
      "A bamboo cup is a sustainable and eco-friendly drinking vessel made from natural bamboo fiber. It is lightweight, durable, and ideal for everyday use. The cup is designed to be both functional and aesthetically pleasing, offering a natural look that complements any kitchen or dining setting. Its eco-friendly nature makes it a responsible choice for environmentally conscious consumers",
    category: "kitchen",
  },
  {
    id: 6,
    name: "Bamboo Mobile Stand",
    image: "../Assets/images/products/product32.webp",
    originalPrice: "NPR 300",
    price: "NPR 250", // Discounted price
    discount: "10%",
    description:
      "A bamboo mobile stand is a phone holder made from natural bamboo wood, designed to hold your smartphone upright or at a comfortable angle. It is a simple accessory that lets you use your phone hands-free whether you are watching videos, reading, video calling, cooking with a recipe on screen, or charging your device. Bamboo is a sustainable and eco-friendly material, making this stand an environmentally conscious choice compared to plastic alternatives. The stand is lightweight, durable, and often features a minimalist design that complements any workspace or home decor.",
    category: "Accessories",
  },
  {
    id: 7,
    name: "Bamboo lunch box",
    image: "../Assets/images/products/product29.webp",
    originalPrice: "NPR 500",
    price: "NPR 440", // Discounted price
    discount: "10%",
    description:
      "Our Bamboo Lunch Box is a sustainable and stylish alternative to plastic containers. Made from natural, eco-friendly bamboo, it is lightweight, durable, and safe for storing all types of meals. Its sleek design keeps your food fresh while being easy to carry for school, work, or travel. By choosing this lunch box, you reduce single-use plastics and support a greener, healthier planet making every meal a small step toward sustainability.",
    category: "lunch box",
  },
  {
    id: 8,
    name: "Bamboo book shelf",
    image: "../Assets/images/products/product26.jpg",
    originalPrice: "NPR 2000",
    price: "NPR 1799", // Discounted price
    discount: "15%",
    description:
      "Our Bamboo Book Stand is beautifully crafted from premium, sustainably sourced bamboo, combining strength, elegance, and practicality. Designed for comfortable reading, it features adjustable angles that support everything from textbooks and notebooks to tablets and cookbooks. The smooth natural finish and warm bamboo texture bring a calm, stylish touch to any study table, kitchen, or workspace. Lightweight yet durable, it helps improve posture, keeps your hands free, and makes studying or cooking more enjoyable. Choose a stand that is not only functional but also kind to the planet simple, natural, and sustainably made.",
    category: "Furniture",
  },
];
// Function to render products based on category and optional search query
function renderProducts(category = "all", query = "") {
  const productsGrid = document.getElementById("productsGrid");
  productsGrid.innerHTML = ""; // Clear existing products
  let filteredProducts =
    category === "all"
      ? products
      : products.filter((product) => product.category === category);
  if (query) {
    filteredProducts = filteredProducts.filter((product) =>
      product.name.toLowerCase().includes(query),
    );
  }
  filteredProducts.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.className = "product-card";
    productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <h3>${product.name}</h3>
                <div class="price-section">
                    <span class="original-price">${product.originalPrice}</span>
                    <span class="discounted-price">${product.price}</span>
                    <span class="discount-amount">(${product.discount} off)</span>
                </div>
            </div>
        `;
    productDiv.addEventListener("click", () => openProductDetails(product));
    productsGrid.appendChild(productDiv);
  });
}
// Function to open product details in a new page
function openProductDetails(product) {
  // Store product data in localStorage
  localStorage.setItem("selectedProduct", JSON.stringify(product));
  // Open details page 
  window.location.href = "product-details.html";
}
// Category filter event listeners (redirect to product page)
const categoryButtons = document.querySelectorAll(".category-btn");
categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.dataset.category;
    window.location.href = `./product.html?category=${category}`;
  });
});
// Duplicate the category cards for seamless looping
const grid = document.querySelector(".categories-grid");
const originalCards = Array.from(grid.children);
originalCards.forEach((card) => {
  const clone = card.cloneNode(true);
  grid.appendChild(clone);
});

// Attach event listeners to all category cards
const categoryCards = document.querySelectorAll(".category-card");
categoryCards.forEach((card) => {
  card.addEventListener("click", () => {
    let category = card.dataset.category;
    // Map category to match product categories
    if (category === "water-bottel") {
      category = "bottel";
    } else if (category === "lunch-box") {
      category = "lunch box";
    } else if (category === "mobile-accessories") {
      category = "Accessories";
    } else if (category === "laptop-accessories") {
      category = "Accessories";
    } else if (category === "book-shelf") {
      category = "Furniture";
    } else if (category === "bamboo-cup") {
      category = "cup";
    } else if (category === "Toothbrush") {
      category = "Toothbrush";
    } else if (category === "Comb") {
      category = "Comb";
    } else if (category === "Study Table") {
      category = "Study Table";
    }
    window.location.href = `./product.html?category=${category}`;
  });
});

// Auto-scroll functionality
let scrollAmount = 0;
const scrollSpeed = 0.5; 

function autoScroll() {
  scrollAmount += scrollSpeed;
  grid.scrollLeft = scrollAmount;

  // Reset when scrolled past the original content (to loop seamlessly)
  if (scrollAmount >= grid.scrollWidth / 2) {
    scrollAmount = 0;
  }

  requestAnimationFrame(autoScroll);
}

// Start auto-scrolling
autoScroll();
// Initialize
renderProducts();
