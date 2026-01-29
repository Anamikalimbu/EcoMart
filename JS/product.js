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
    category: "Toothbrush",
  },
  {
    id: 2,
    name: "Bamboo Toothbrush Set",
    image: "../Assets/images/products/product2.jpg",
    originalPrice: "NPR 100",
    price: "NPR 70", // Discounted price
    discount: "30%",
    description:
      "Biodegradable bamboo toothbrushes with natural bristles. A sustainable alternative to plastic toothbrushes, packaged in recyclable materials.",
    category: "Toothbrush",
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
    name: "Reusable Paper Towel",
    image: "../Assets/images/products/product4.jpg",
    originalPrice: "NPR 500",
    price: " NPR 450", // Discounted price
    discount: "10%",
    description:
      "Eco-friendly and reusable paper towels designed for everyday cleaning. Highly absorbent, durable, and washable, they are perfect for wiping spills, cleaning surfaces, and reducing single-use waste in the kitchen and home.",
    category: "kitchen",
  },
  {
    id: 5,
    name: "Bamboo Comb",
    image: "../Assets/images/products/product6.jpg",
    originalPrice: "NPR 100",
    price: "NPR 70", // Discounted price
    discount: "30%",
    description:
      "Biodegradable bamboo comb with natural bristles. A sustainable alternative to plastic toothbrushes, packaged in recyclable materials.",
    category: "Comb",
  },
  {
    id: 6,
    name: "Organic Cotton Tote Bag",
    image: "../Assets/images/products/product7.jpg",
    originalPrice: "NPR 340",
    price: "NPR 295", // Discounted price
    discount: "15%",
    description:
      "Durable organic cotton tote bag perfect for shopping or daily use. Reduces the need for plastic bags and supports fair trade practices.Our Organic Cotton Tote Bag is made from 100% pure, chemical-free cotton, offering a reusable and eco-friendly alternative to plastic bags. It is lightweight, durable, and spacious enough for books, groceries, or everyday essentials. With its soft texture and strong stitching, this tote is perfect for daily use while helping you reduce waste and support a more sustainable lifestyle.",
    category: "bags",
  },
  {
    id: 7,
    name: "Steels Bottel",
    image: "../Assets/images/products/product8.jpg",
    originalPrice: "NPR 1000",
    price: "NPR 900", // Discounted price
    discount: "10%",
    description:
      "This stainless steel bottle is durable, lightweight, and designed for everyday use. Made from high-quality, food-grade stainless steel, it is rust-resistant, odor-free, and safe for storing both hot and cold beverages. The leak-proof cap ensures spill-free carrying, while the sleek design makes it easy to use at home, in the office, gym, school, or while traveling. Eco-friendly and reusable, this bottle helps reduce plastic waste while keeping drinks fresh for longer.",
    category: "bottel",
  },
  {
    id: 8,
    name: "Steels Bottel Miltton",
    image: "../Assets/images/products/product9.webp",
    originalPrice: "NPR 1000",
    price: "NPR 900", // Discounted price
    discount: "10%",
    description:
      "This stainless steel bottle is durable, lightweight, and designed for everyday use. Made from high-quality, food-grade stainless steel, it is rust-resistant, odor-free, and safe for storing both hot and cold beverages. The leak-proof cap ensures spill free carrying, while the sleek design makes it easy to use at home, in the office, gym, school, or while traveling. Eco-friendly and reusable, this bottle helps reduce plastic waste while keeping drinks fresh for longer.",
    category: "bottel",
  },
  {
    id: 9,
    name: "Bamboo Bottel",
    image: "../Assets/images/products/product12.webp",
    originalPrice: "NPR 1000",
    price: "NPR 900", // Discounted price
    discount: "10%",
    description:
      "Stay hydrated sustainably with this beautifully crafted bamboo bottle. Made from natural bamboo and food-grade materials, it keeps your drinks safe while reducing plastic waste. Lightweight and portable, it is perfect for school, work, travel, or outdoor adventures. Eco-conscious living never looked so stylish!",
    category: "bottel",
  },
  {
    id: 10,
    name: "Bamboo Bottel",
    image: "../Assets/images/products/product11.webp",
    originalPrice: "NPR 1000",
    price: "NPR 900", // Discounted price
    discount: "10%",
    description:
      "Stay hydrated sustainably with this beautifully crafted bamboo bottle. Made from natural bamboo and food-grade materials, it keeps your drinks safe while reducing plastic waste. Lightweight and portable, it is perfect for school, work, travel, or outdoor adventures. Eco-conscious living never looked so stylish!",
    category: "bottel",
  },
  {
    id: 11,
    name: "Resuable water Bottel",
    image: "../Assets/images/products/product13.webp",
    originalPrice: "NPR 1000",
    price: "NPR 900", // Discounted price
    discount: "10%",
    description:
      "This reusable water bottle is crafted for convenience, durability, and sustainability. Made from high quality, BPA free materials, it keeps your drinks fresh wherever you go. Whether you are heading to school, work, the gym, or travel, this bottle helps you stay hydrated while reducing single use plastic consumption.",
    category: "bottel",
  },
  {
    id: 12,
    name: "Bamboo Mobile Stand",
    image: "../Assets/images/products/product21.jpg",
    originalPrice: "NPR 300",
    price: "NPR 250", // Discounted price
    discount: "10%",
    description:
      "A bamboo mobile stand is a phone holder made from natural bamboo wood, designed to hold your smartphone upright or at a comfortable angle. It is a simple accessory that lets you use your phone hands-free whether you are watching videos, reading, video calling, cooking with a recipe on screen, or charging your device. Bamboo is a sustainable and eco-friendly material, making this stand an environmentally conscious choice compared to plastic alternatives. The stand is lightweight, durable, and often features a minimalist design that complements any workspace or home decor.",
    category: "Accessories",
  },
  {
    id: 13,
    name: "Bamboo book shelf",
    image: "../Assets/images/products/product23.jpg",
    originalPrice: "NPR 2000",
    price: "NPR 1900", // Discounted price
    discount: "10%",
    description:
      "Eco-friendly bamboo book shelf that holds books, tablets, or e-readers at a comfortable angle for reading or display. Made from sustainable bamboo, it is sturdy, lightweight, and perfect for home, office, or study use.Our Bamboo Book Stand is crafted from natural, eco-friendly bamboo, offering a sturdy and lightweight solution for comfortable reading. Its adjustable design supports books, notebooks, and tablets, helping you maintain good posture during study or work. With its smooth finish and clean natural look, it brings both functionality and sustainability to your desk or workspace.",
    category: "Furniture",
  },
  {
    id: 14,
    name: "Bamboo book shelf",
    image: "../Assets/images/products/product24.jpg",
    originalPrice: "NPR 1800",
    price: "NPR 1650", // Discounted price
    discount: "10%",
    description:
      "Eco-friendly bamboo book shelf that holds books, tablets, or e-readers at a comfortable angle for reading or display. Made from sustainable bamboo, it is sturdy, lightweight, and perfect for home, office, or study use.Our Bamboo Book Stand is crafted from natural, eco-friendly bamboo, offering a sturdy and lightweight solution for comfortable reading. Its adjustable design supports books, notebooks, and tablets, helping you maintain good posture during study or work. With its smooth finish and clean natural look, it brings both functionality and sustainability to your desk or workspace.",
    category: "Furniture",
  },
  {
    id: 15,
    name: "Bamboo book shelf",
    image: "../Assets/images/products/product25.webp",
    originalPrice: "NPR 2100",
    price: "NPR 2000", // Discounted price
    discount: "10%",
    description:
      "Our Bamboo Book Stand is beautifully crafted from premium, sustainably sourced bamboo, combining strength, elegance, and practicality. Designed for comfortable reading, it features adjustable angles that support everything from textbooks and notebooks to tablets and cookbooks. The smooth natural finish and warm bamboo texture bring a calm, stylish touch to any study table, kitchen, or workspace. Lightweight yet durable, it helps improve posture, keeps your hands free, and makes studying or cooking more enjoyable. Choose a stand that is not only functional but also kind to the planet simple, natural, and sustainably made.",
    category: "Furniture",
  },
  {
    id: 16,
    name: "Bamboo book shelf",
    image: "../Assets/images/products/product26.jpg",
    originalPrice: "NPR 2000",
    price: "NPR 1799", // Discounted price
    discount: "15%",
    description:
      "Our Bamboo Book Stand is beautifully crafted from premium, sustainably sourced bamboo, combining strength, elegance, and practicality. Designed for comfortable reading, it features adjustable angles that support everything from textbooks and notebooks to tablets and cookbooks. The smooth natural finish and warm bamboo texture bring a calm, stylish touch to any study table, kitchen, or workspace. Lightweight yet durable, it helps improve posture, keeps your hands free, and makes studying or cooking more enjoyable. Choose a stand that is not only functional but also kind to the planet simple, natural, and sustainably made.",
    category: "Furniture",
  },
  {
    id: 17,
    name: "Bamboo lunch box",
    image: "../Assets/images/products/product27.jpg",
    originalPrice: "NPR 1000",
    price: "NPR 899", // Discounted price
    discount: "10%",
    description:
      "Eco-friendly bamboo lunch box that is lightweight, durable, and perfect for carrying meals on the go. Made from sustainable bamboo, it features multiple compartments to keep food items separate and fresh. Ideal for school, work, or picnics, this lunch box is a stylish and practical alternative to plastic containers.",
    category: "lunch box",
  },
  {
    id: 18,
    name: "Bamboo lunch box",
    image: "../Assets/images/products/product28.jpeg",
    originalPrice: "NPR 600",
    price: "NPR 540", // Discounted price
    discount: "10%",
    description:
      "This Bamboo Lunch Box is an eco-friendly, reusable, and durable food container made from natural bamboo. It keeps your meals fresh, is lightweight to carry, and offers a plastic-free way to enjoy lunch at school, work, or travel while reducing environmental impact.",
    category: "lunch box",
  },
  {
    id: 19,
    name: "Bamboo lunch box",
    image: "../Assets/images/products/product30.jpg",
    originalPrice: "NPR 600",
    price: "NPR 540", // Discounted price
    discount: "10%",
    description:
      "Our Bamboo Lunch Box is a sustainable and stylish alternative to plastic containers. Made from natural, eco-friendly bamboo, it is lightweight, durable, and safe for storing all types of meals. Its sleek design keeps your food fresh while being easy to carry for school, work, or travel. By choosing this lunch box, you reduce single-use plastics and support a greener, healthier planet making every meal a small step toward sustainability.",
    category: "lunch box",
  },
  {
    id: 20,
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
    id: 21,
    name: "Bamboo Mobile Stand",
    image: "../Assets/images/products/product22.jpg",
    originalPrice: "NPR 350",
    price: "NPR 290", // Discounted price
    discount: "10%",
    description:
      "A bamboo mobile stand is a phone holder made from natural bamboo wood, designed to hold your smartphone upright or at a comfortable angle. It is a simple accessory that lets you use your phone hands-free whether you are watching videos, reading, video calling, cooking with a recipe on screen, or charging your device. Bamboo is a sustainable and eco-friendly material, making this stand an environmentally conscious choice compared to plastic alternatives. The stand is lightweight, durable, and often features a minimalist design that complements any workspace or home decor.",
    category: "Accessories",
  },
  {
    id: 22,
    name: "Bamboo Mobile Stand",
    image: "../Assets/images/products/product14.jpg",
    originalPrice: "NPR 300",
    price: "NPR 250", // Discounted price
    discount: "10%",
    description:
      "A bamboo mobile stand is a phone holder made from natural bamboo wood, designed to hold your smartphone upright or at a comfortable angle. It is a simple accessory that lets you use your phone hands-free whether you are watching videos, reading, video calling, cooking with a recipe on screen, or charging your device. Bamboo is a sustainable and eco-friendly material, making this stand an environmentally conscious choice compared to plastic alternatives. The stand is lightweight, durable, and often features a minimalist design that complements any workspace or home decor.",
    category: "Accessories",
  },
  {
    id: 23,
    name: "Bamboo Mobile Stand",
    image: "../Assets/images/products/product15.jpg",
    originalPrice: "NPR 320",
    price: "NPR 280", // Discounted price
    discount: "10%",
    description:
      "A bamboo mobile stand is a phone holder made from natural bamboo wood, designed to hold your smartphone upright or at a comfortable angle. It is a simple accessory that lets you use your phone hands-free whether you are watching videos, reading, video calling, cooking with a recipe on screen, or charging your device. Bamboo is a sustainable and eco-friendly material, making this stand an environmentally conscious choice compared to plastic alternatives. The stand is lightweight, durable, and often features a minimalist design that complements any workspace or home decor.",
    category: "Accessories",
  },
  {
    id: 24,
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
    id: 25,
    name: "Bamboo Laptop Stand",
    image: "../Assets/images/products/product19.jpg",
    originalPrice: "NPR 460",
    price: "NPR 400", // Discounted price
    discount: "10%",
    description:
      "A bamboo laptop stand is a portable stand made from natural bamboo wood, designed to elevate your laptop for better ergonomics and improved airflow. It is a simple accessory that lets you use your laptop hands-free whether you are working at a desk, relaxing on the couch, or traveling. Bamboo is a sustainable and eco-friendly material, making this stand an environmentally conscious choice compared to plastic alternatives. The stand is lightweight, durable, and often features a minimalist design that complements any workspace or home decor.",
    category: "Accessories",
  },
  {
    id: 26,
    name: "Bamboo Laptop Stand",
    image: "../Assets/images/products/product20.jpg",
    originalPrice: "NPR 500",
    price: "NPR 440", // Discounted price
    discount: "10%",
    description:
      "Our Bamboo Laptop Stand is a perfect blend of style, functionality, and sustainability. Made from premium, eco-friendly bamboo, it provides a sturdy and stable platform for laptops, improving airflow and preventing overheating. The ergonomic design elevates your laptop to a comfortable viewing angle, promoting better posture and reducing neck and wrist strain. Lightweight yet durable, it is ideal for home, office, or remote work. With its natural bamboo finish, this stand not only supports your devices but also adds a touch of elegance and eco-consciousness to your workspace.",
    category: "Accessories",
  },
  {
    id: 27,
    name: "Bamboo Laptop Stand",
    image: "../Assets/images/products/product17.jpg",
    originalPrice: "NPR 350",
    price: "NPR 300", // Discounted price
    discount: "10%",
    description:
      "A bamboo laptop stand is a portable stand made from natural bamboo wood, designed to elevate your laptop for better ergonomics and improved airflow. It is a simple accessory that lets you use your laptop hands-free whether you are working at a desk, relaxing on the couch, or traveling. Bamboo is a sustainable and eco-friendly material, making this stand an environmentally conscious choice compared to plastic alternatives. The stand is lightweight, durable, and often features a minimalist design that complements any workspace or home decor.",
    category: "Accessories",
  },
  {
    id: 28,
    name: "Bamboo Laptop Stand",
    image: "../Assets/images/products/product16.jpg",
    originalPrice: "NPR 420",
    price: "NPR 380", // Discounted price
    discount: "10%",
    description:
      "A bamboo laptop stand is a portable stand made from natural bamboo wood, designed to elevate your laptop for better ergonomics and improved airflow. It is a simple accessory that lets you use your laptop hands-free whether you are working at a desk, relaxing on the couch, or traveling. Bamboo is a sustainable and eco-friendly material, making this stand an environmentally conscious choice compared to plastic alternatives. The stand is lightweight, durable, and often features a minimalist design that complements any workspace or home decor.",
    category: "Accessories",
  },

  {
    id: 29,
    name: "Bamboo Cup set",
    image: "../Assets/images/products/product18.jpeg",
    originalPrice: "NPR 600",
    price: "NPR 540", // Discounted price
    discount: "10%",
    description:
      "A bamboo cup is a sustainable and eco-friendly drinking vessel made from natural bamboo fiber. It is lightweight, durable, and ideal for everyday use. The cup is designed to be both functional and aesthetically pleasing, offering a natural look that complements any kitchen or dining setting. Its eco-friendly nature makes it a responsible choice for environmentally conscious consumers.",
    category: "cup",
  },
  {
    id: 30,
    name: "Bamboo Cup",
    image: "../Assets/images/products/product5.jpg",
    originalPrice: "NPR 250",
    price: "NPR 225", // Discounted price
    discount: "10%",
    description:
      "A bamboo cup is a sustainable and eco-friendly drinking vessel made from natural bamboo fiber. It is lightweight, durable, and ideal for everyday use. The cup is designed to be both functional and aesthetically pleasing, offering a natural look that complements any kitchen or dining setting. Its eco-friendly nature makes it a responsible choice for environmentally conscious consumers.",
    category: "cup",
  },
  {
    id: 31,
    name: "Bamboo Cup",
    image: "../Assets/images/products/product31.jpg",
    originalPrice: "NPR 300",
    price: "NPR 250", // Discounted price
    discount: "10%",
    description:
      "A bamboo cup is a sustainable and eco-friendly drinking vessel made from natural bamboo fiber. It is lightweight, durable, and ideal for everyday use. The cup is designed to be both functional and aesthetically pleasing, offering a natural look that complements any kitchen or dining setting. Its eco-friendly nature makes it a responsible choice for environmentally conscious consumers.",
    category: "cup",
  },
    {
    id: 32,
    name: "Bamboo Cup",
    image: "../Assets/images/products/product33.webp",
    originalPrice: "NPR 400",
    price: "NPR 350", // Discounted price
    discount: "10%",
    description:
      "A bamboo cup is a sustainable and eco-friendly drinking vessel made from natural bamboo fiber. It is lightweight, durable, and ideal for everyday use. The cup is designed to be both functional and aesthetically pleasing, offering a natural look that complements any kitchen or dining setting. Its eco-friendly nature makes it a responsible choice for environmentally conscious consumers.",
    category: "cup",
  },
  {
    id: 33,
    name: "Bamboo Comb",
    image: "../Assets/images/products/product10.jpeg",
    originalPrice: "NPR 100",
    price: "NPR 70", // Discounted price
    discount: "30%",
    description:
      "Biodegradable bamboo comb with natural bristles. A sustainable alternative to plastic toothbrushes, packaged in recyclable materials.",
    category: "Comb",
  },
  {
    id: 34,
    name: "Bamboo Comb",
    image: "../Assets/images/products/product35.jpg",
    originalPrice: "NPR 150",
    price: "NPR 120", // Discounted price
    discount: "10%",
    description:
      "Biodegradable bamboo comb with natural bristles. A sustainable alternative to plastic toothbrushes, packaged in recyclable materials.",
    category: "Comb",
  },
  {
    id: 35,
    name: "Bamboo comb",
    image: "../Assets/images/products/product37.jpg",
    originalPrice: "NPR 200",
    price: "NPR 150", // Discounted price
    discount: "10%",
    description:
      "Biodegradable bamboo comb with natural bristles. A sustainable alternative to plastic toothbrushes, packaged in recyclable materials.",
    category: "Comb",
  },
  {
    id: 36,
    name: "kitchen Towel",
    image: "../Assets/images/products/product38.jpg",
    originalPrice: "NPR 600",
    price: "NPR 540",
    discount: "10%",
    description:
      "Soft, absorbent, and durable kitchen towel designed for everyday cleaning and drying. Made from high-quality fabric, it is ideal for wiping dishes, hands, and kitchen surfaces while remaining long-lasting and easy to wash.",
    category: "kitchen",
  },
  {
    id: 37,
    name: "Bamboo Study Table",
    image: "../Assets/images/products/product34.jpg",
    originalPrice: "NPR 5600",
    price: "NPR 5450",
    discount: "10%",
    description:
      "Study in eco-friendly bamboo study table perfect for home or office use. Made from sustainable bamboo, it offers a spacious surface for studying, working, or crafting, while adding a natural aesthetic to any room.",
    category: "Study Table",
  },
  {
    id: 38,
    name: "Bamboo Study Table",
    image: "../Assets/images/products/product36.webp",
    originalPrice: "NPR 5400",
    price: "NPR 5250",
    discount: "10%",
    description:
      "Study in eco-friendly bamboo study table perfect for home or office use. Made from sustainable bamboo, it offers a spacious surface for studying, working, or crafting, while adding a natural aesthetic to any room.",
    category: "Study Table",
  },
  {
    id: 39,
    name: "Bamboo Study Table",
    image: "../Assets/images/products/product39.jpg",
    originalPrice: "NPR 4600",
    price: "NPR 4490",
    discount: "10%",
    description:
      "Study in eco-friendly bamboo study table perfect for home or office use. Made from sustainable bamboo, it offers a spacious surface for studying, working, or crafting, while adding a natural aesthetic to any room.",
    category: "Study Table",
  },
  {
    id: 40,
    name: "Bamboo Study Table",
    image: "../Assets/images/products/product40.jpg",
    originalPrice: "NPR 5000",
    price: "NPR 4900",
    discount: "10%",
    description:
      "Study in eco-friendly bamboo study table perfect for home or office use. Made from sustainable bamboo, it offers a spacious surface for studying, working, or crafting, while adding a natural aesthetic to any room.",
    category: "Study Table",
  },

];
// Cart counter
const cartValue = document.querySelector(".cart-value");

// Current category filter
let currentCategory = "all";

// Function to render products based on category and optional search query
function renderProducts(category = "all", query = "") {
  const productsGrid = document.getElementById("productsGrid");
  productsGrid.innerHTML = ""; 
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
  // Open details page in the same tab
  window.location.href = "product-details.html";
}
// Search form event listener
const searchForm = document.querySelector(".search-form");
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const query = searchForm.querySelector("input").value.trim().toLowerCase();
  searchForm.querySelector("input").value = ""; // Clear input after search
  renderProducts(currentCategory, query);
});
// Category filter event listeners
const categoryButtons = document.querySelectorAll(".category-btn");
categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    categoryButtons.forEach((btn) => btn.classList.remove("active"));
    // Add active class to clicked button
    button.classList.add("active");
    // Update current category and re-render
    currentCategory = button.dataset.category;
    renderProducts(currentCategory);
  });
});
function viewProduct(id) {
    alert("Opening details for Product " + id);
}

// Load cart count on page load
cartValue.textContent = localStorage.getItem("cartCount") || 0;
// Initialize and handle category from URL
const urlParams = new URLSearchParams(window.location.search);
const categoryFromUrl = urlParams.get("category");
if (categoryFromUrl && categoryFromUrl !== "filter") {
  currentCategory = categoryFromUrl;
  // Activate the corresponding category button
  const activeButton = document.querySelector(`.category-btn[data-category="${currentCategory}"]`);
  if (activeButton) {
    categoryButtons.forEach((btn) => btn.classList.remove("active"));
    activeButton.classList.add("active");
  }
}
// Initialize
renderProducts(currentCategory);
