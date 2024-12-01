fetch("club.json")
  .then((response) => response.json())
  .then((data) => {
    const clubGrid = document.getElementById("clubList");

    data.clubs.forEach((club) => {
      const clubItem = document.createElement("div");
      clubItem.classList.add("club-item");
      clubItem.innerHTML = `
                <a href="${club.link}">
                    <img src="${club.image}" alt="${club.name}">
                </a>
                <a href="${club.link}"><p>${club.description}</p></a>
            `;
      clubGrid.appendChild(clubItem);
    });
  })
  .catch((error) => console.error("Error fetching club data:", error));

document.addEventListener("DOMContentLoaded", function () {
  const clubSearchInput = document.getElementById("clubSearchInput");
  const clubList = document.getElementById("clubList");
  const clubItems = clubList.getElementsByClassName("club-item");
  const navbar = document.querySelector(".navbar");

  // Club Search with Highlight
  clubSearchInput.addEventListener("input", function () {
    const searchQuery = clubSearchInput.value.toLowerCase();

    Array.from(clubItems).forEach(function (clubItem) {
      const clubNameElem = clubItem.querySelector("p");
      const clubName = clubNameElem.textContent.toLowerCase();

      // Reset previous highlights
      clubNameElem.innerHTML = clubNameElem.textContent;

      if (clubName.includes(searchQuery)) {
        clubItem.style.display = "block"; // Show matching clubs

        // Highlight the match
        const startIdx = clubName.indexOf(searchQuery);
        if (startIdx !== -1 && searchQuery) {
          const endIdx = startIdx + searchQuery.length;
          const highlightedText = `<span class="highlight">${clubNameElem.textContent.substring(
            startIdx,
            endIdx
          )}</span>`;
          clubNameElem.innerHTML =
            clubNameElem.textContent.slice(0, startIdx) +
            highlightedText +
            clubNameElem.textContent.slice(endIdx);
        }
      } else {
        clubItem.style.display = "none"; // Hide non-matching clubs
      }
    });
  });

  // Search Placeholder Text Animation
  let placeholderTexts = ["palak", "sahil", "krishna"];
  let currentTextIndex = 0;
  function animatePlaceholder() {
    clubSearchInput.setAttribute(
      "placeholder",
      placeholderTexts[currentTextIndex]
    );
    currentTextIndex = (currentTextIndex + 1) % placeholderTexts.length;
  }
  setInterval(animatePlaceholder, 3000);

  // Sticky Navbar on Scroll
  window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  });

  // Scroll to Top Button
  const scrollToTopButton = document.createElement("button");
  scrollToTopButton.innerHTML = "&#x2B06;"; // Unicode arrow up symbol
  scrollToTopButton.className = "scroll-to-top";
  document.body.appendChild(scrollToTopButton);

  window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
      scrollToTopButton.style.display = "block";
    } else {
      scrollToTopButton.style.display = "none";
    }
  });

  scrollToTopButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

// Sample club suggestions list
const clubs = [
  "Social Media Club",
  "Photography & Cinematography",
  "Sci-Mat",
  "Enactus BMU",
  "Adventure BMU",
  "Sierra BMU",
  "Performing Arts",
  "ACM BMU",
  "SATA BMU",
  "Savera NGO",
  "NSS BMU",
  "TSEC BMU",
  "Insights BMU",
  "Agraga BMU",
  "Finonomics BMU",
  "Automobile BMU",
  "Culinary BMU",
  "Environment Club",
  "Liquid BMU",
  "Robotics BMU",
  "Strokes BMU",
  "Wellness & Fight BMU",
  "Youth Red Cross",
];

const searchInput = document.getElementById("clubSearchInput");
const suggestionsContainer = document.createElement("div");
suggestionsContainer.classList.add("suggestions-container");
searchInput.parentNode.appendChild(suggestionsContainer);

// Event listener for input changes
searchInput.addEventListener("input", function () {
  const query = searchInput.value.toLowerCase();
  suggestionsContainer.innerHTML = ""; // Clear previous suggestions

  if (query) {
    const matchedClubs = clubs.filter((club) =>
      club.toLowerCase().includes(query)
    );

    matchedClubs.forEach((club) => {
      const suggestionItem = document.createElement("div");
      suggestionItem.classList.add("suggestion-item");
      suggestionItem.textContent = club;
      suggestionsContainer.appendChild(suggestionItem);

      // Event listener to fill input on suggestion click
      suggestionItem.addEventListener("click", function () {
        searchInput.value = club;
        suggestionsContainer.innerHTML = ""; // Clear suggestions
      });
    });
  }
});

// Hide suggestions when clicking outside the input
document.addEventListener("click", function (event) {
  if (
    !suggestionsContainer.contains(event.target) &&
    event.target !== searchInput
  ) {
    suggestionsContainer.innerHTML = "";
  }
});

document.getElementById("addClubButton").addEventListener("click", () => {
  document.getElementById("addClubForm").style.display = "block";
});
