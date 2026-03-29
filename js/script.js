function goToHomepage() {
  const isInsidePages = window.location.pathname.includes("/pages/");
  window.location.href = isInsidePages ? "../index.html" : "index.html";
}

function searchProduct() {
  const input = document.getElementById("search-bar");
  if (!input) return;

  const searchInput = input.value.toLowerCase().trim();

  const productMap = {
    redbull: "product_redbull.html",
    booster: "product_booster.html",
    monster: "product_monster.html"
  };

  if (productMap[searchInput]) {
    const isInsidePages = window.location.pathname.includes("/pages/");
    window.location.href = isInsidePages
      ? productMap[searchInput]
      : `pages/${productMap[searchInput]}`;
  } else {
    alert("Product not found!");
  }
}

function myFunction(id) {
  const dots = document.getElementById(`dots${id}`);
  const moreText = document.getElementById(`more${id}`);
  const btnText = document.getElementById(`myBtn${id}`);

  if (!dots || !moreText || !btnText) return;

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    moreText.style.display = "none";
    btnText.innerHTML = "Read more";
  } else {
    dots.style.display = "none";
    moreText.style.display = "inline";
    btnText.innerHTML = "Read less";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  /* CAROUSEL */
  const imagesContainer = document.querySelector(".carousel-images");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");

  if (imagesContainer && prevButton && nextButton) {
    let currentIndex = 0;
    const slides = document.querySelectorAll(".carousel-images a");
    const totalSlides = slides.length;

    function getSlidesPerView() {
      return window.innerWidth <= 900 ? 1 : 3;
    }

    function updateCarousel() {
      const slidesPerView = getSlidesPerView();
      const offset = (100 / slidesPerView) * currentIndex;
      imagesContainer.style.transform = `translateX(-${offset}%)`;
    }

    function nextSlide() {
      const slidesPerView = getSlidesPerView();
      if (currentIndex < totalSlides - slidesPerView) {
        currentIndex++;
      } else {
        currentIndex = 0;
      }
      updateCarousel();
    }

    function prevSlide() {
      const slidesPerView = getSlidesPerView();
      if (currentIndex > 0) {
        currentIndex--;
      } else {
        currentIndex = Math.max(0, totalSlides - slidesPerView);
      }
      updateCarousel();
    }

    nextButton.addEventListener("click", nextSlide);
    prevButton.addEventListener("click", prevSlide);
    window.addEventListener("resize", updateCarousel);

    setInterval(nextSlide, 5000);
  }

  /* FILTERS */
  const applyButton = document.getElementById("apply-filters");
  const clearButton = document.getElementById("clear-filters");
  const noNeededCheckbox = document.getElementById("general-noneeded");
  const activeFiltersList = document.getElementById("active-filters-list");
  const resultsContainer = document.getElementById("filtered-results");

  if (applyButton) {
    applyButton.addEventListener("click", function () {
      const checkboxes = document.querySelectorAll('#filter-form input[type="checkbox"]');
      const selectedFilters = [];

      checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
          selectedFilters.push(checkbox.id);
        }
      });

      localStorage.setItem("selectedFilters", JSON.stringify(selectedFilters));

      if (resultsContainer) {
        if (selectedFilters.length > 0) {
          resultsContainer.innerHTML = `<p>Selected filters: ${selectedFilters.join(", ")}</p>`;
        } else {
          resultsContainer.innerHTML = `<p>No filters selected.</p>`;
        }
      }

      updateStoredFiltersUI(selectedFilters);
      applyFiltersToProducts(selectedFilters);
    });
  }

  if (clearButton) {
    clearButton.addEventListener("click", function () {
      localStorage.removeItem("selectedFilters");

      const checkboxes = document.querySelectorAll('#filter-form input[type="checkbox"]');
      checkboxes.forEach((checkbox) => {
        checkbox.checked = false;
        checkbox.disabled = false;
      });

      if (resultsContainer) {
        resultsContainer.innerHTML = `<p>No filters selected.</p>`;
      }

      updateStoredFiltersUI([]);
      applyFiltersToProducts([]);
    });
  }

  if (noNeededCheckbox) {
    noNeededCheckbox.addEventListener("change", function () {
      const otherCheckboxes = document.querySelectorAll(
        '#filter-form input[type="checkbox"]:not(#general-noneeded)'
      );

      otherCheckboxes.forEach((checkbox) => {
        checkbox.disabled = noNeededCheckbox.checked;
        if (noNeededCheckbox.checked) {
          checkbox.checked = false;
        }
      });
    });
  }

  const storedFilters = JSON.parse(localStorage.getItem("selectedFilters")) || [];
  updateStoredFiltersUI(storedFilters);
  applyFiltersToProducts(storedFilters);

  function updateStoredFiltersUI(filters) {
    if (!activeFiltersList) return;

    activeFiltersList.innerHTML = "";

    if (filters.length === 0) {
      const li = document.createElement("li");
      li.textContent = "No filters applied.";
      activeFiltersList.appendChild(li);
      return;
    }

    filters.forEach((filter) => {
      const li = document.createElement("li");
      li.textContent = filter.replace(/-/g, " ");
      activeFiltersList.appendChild(li);
    });
  }

  function applyFiltersToProducts(filters) {
    const products = document.querySelectorAll(".product-item");

    products.forEach((product) => {
      const productTags = product.dataset.tags
        ? product.dataset.tags.split(",").map(tag => tag.trim())
        : [];

      const isVisible =
        filters.length === 0 ||
        filters.every((filter) => productTags.includes(filter));

      product.style.display = isVisible ? "block" : "none";

      if (filters.some((filter) => productTags.includes(filter))) {
        product.classList.add("filtered");
      } else {
        product.classList.remove("filtered");
      }
    });
  }
});
