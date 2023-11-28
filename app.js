const searchContainer = document.querySelector("#search_container");
const searchInput = document.querySelector("#searchInput");
const notificationBtn = document.querySelector("#notification_btn");
const notificationDropdown = document.querySelector("#notification_dropdown");
const mystoreMenuBtn = document.querySelector("#mystore_btn");
const mystoreMenuDropdown = document.querySelector("#mystore_dropdown");
const alertModal = document.querySelector("#alert_modal");
const alertModalClose = document.querySelector("#dismiss_modal");
const arrowDown = document.querySelector(".accordion__down_btn");
const arrowUp = document.querySelector(".accordion__up_btn");
const onboardingSteps = document.querySelector(".steps");
const progressNum = document.querySelector("#completed_indicator");
const progressBar = document.querySelector("#progress-bar-fill");
const btns = document.querySelectorAll(".steps label");
const summarys = document.querySelectorAll(".steps__content summary");


// Search bar focus and pressed logic
searchInput.addEventListener("focus", () => {
  searchContainer.classList.add("focus");
});

searchInput.addEventListener('blur', () => {
  searchContainer.classList.remove('focus');
});


// Notification Dropdown logic
notificationBtn.addEventListener('click', () => {
  notificationBtn.classList.toggle("active");
  notificationDropdown.classList.toggle("active");
});


// User account "my store"
mystoreMenuBtn.addEventListener('click', () => {
  mystoreMenuBtn.classList.toggle("active");
  mystoreMenuDropdown.classList.toggle("active");
});


// User account "my store"
alertModalClose.addEventListener('click', () => {
  alertModal.style.display = "none";
});


// Arrow toggle and onBoarding display logic
arrowDown.addEventListener("click", () => {
  arrowDown.style.display = "none";
  arrowUp.style.display = "flex";
  onboardingSteps.style.display = "grid";
});

arrowUp.addEventListener("click", () => {
  arrowDown.style.display = "flex";
  arrowUp.style.display = "none";
  onboardingSteps.style.display = "none";
});


// Make accordion to expand one at a time and checked accordion opens the next unchecked accordion
summarys.forEach((summary) => (
  summary.addEventListener("click", () => {
    let details = document.body.querySelectorAll("details");
    details.forEach((e) => {
      e.hasAttribute('open') ? e.removeAttribute("open") : "";
    });

    // if (details[0].hasAttribute('open')) {
    //   details[0].removeAttribute('open');
    // }

    //   Opens next stage to be completed
    let nextStage = Array.from(btns).find((e) => e.dataset.completed === "");
    if (nextStage) {
      nextStage.parentElement.parentElement.open = true;
      nextStage.parentElement.parentElement.ariaExpanded = "true";
      details[0].removeAttribute('open');
    } 
    // else {
    //   summary.parentElement.open = true;
    //   summary.parentElement.ariaExpanded = "true";
    // }
    })
))

// stage completion feature
btns.forEach((btn) => {
  btn.addEventListener("click", function () {
    btn.dataset.completed = btn.dataset.completed ? "" : "true";
    let completedStages = getCompletedStages();
    progressNum.textContent = completedStages;

    // register progress on progress bar
    progressBar.value = completedStages;

    
  });
});

// Get number of completed stages
function getCompletedStages() {
  return document.querySelectorAll("[data-completed=true]").length;
}