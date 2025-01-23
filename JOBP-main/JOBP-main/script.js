let navbar=document.querySelector('.header .flex .navbar');
document.querySelector('#menu-btn').onclick=()=>{
    navbar.classList.toggle('active');
}

window.onscroll=() => {
    navbar.classList.remove('active');
}
document.querySelectorAll('input[type="number"]').forEach(inputNumber=>{
    inputNumber.oninput=()=>{
        if(inputNumber.value.length> inputNumber.maxLength) inputNumber.value = inputNumber.value.slice(0,inputNumber.maxLength);
    };
});

const jobData = [
    {
      company: "Uber",
      jobTitle: "Product Manager",
      salary: "$150,000",
      applyLink: "apply-uber-product-manager.html",
    },
    {
      company: "Amazon",
      jobTitle: "Senior Product Manager",
      salary: "$160,000",
      applyLink: "apply-amazon-product-manager.html",
    },
    {
      company: "Airbnb",
      jobTitle: "Product Development Manager",
      salary: "$145,000",
      applyLink: "apply-airbnb-product-manager.html",
    },
    {
      company: "Microsoft",
      jobTitle: "Technical Product Manager",
      salary: "$155,000",
      applyLink: "apply-microsoft-product-manager.html",
    },
    {
      company: "Facebook",
      jobTitle: "Product Marketing Manager",
      salary: "$165,000",
      applyLink: "apply-facebook-product-manager.html",
    },
    {
      company: "Google",
      jobTitle: "Product Strategy Manager",
      salary: "$170,000",
      applyLink: "apply-google-product-manager.html",
    },
    {
      company: "Paypal",
      jobTitle: "Product Analytics Manager",
      salary: "$140,000",
      applyLink: "apply-paypal-product-manager.html",
    },
    {
      company: "Ola",
      jobTitle: "Product Design Manager",
      salary: "$130,000",
      applyLink: "apply-ola-product-manager.html",
    },
    {
      company: "Flipkart",
      jobTitle: "Product Operations Manager",
      salary: "$135,000",
      applyLink: "apply-flipkart-product-manager.html",
    },
  ];
  
  function generateJobListings() {
    const jobListingsContainer = document.getElementById("jobListingsContainer");
    const searchInput = document
      .getElementById("searchInput")
      .value.toLowerCase(); // Get the value from the search input and convert to lowercase
    const searchCriteria = document.getElementById("searchCriteria").value; // Get the selected search criteria
  
    // Clear previous listings
    jobListingsContainer.innerHTML = "";
  
    jobData.forEach((job) => {
      // If search input is empty or matches the search criteria, display the job listing
      if (
        !searchInput ||
        job[searchCriteria].toLowerCase().includes(searchInput)
      ) {
        const jobListing = document.createElement("div");
        jobListing.classList.add("job");
  
        const companyHeading = document.createElement("h3");
        companyHeading.textContent = job.company;
        companyHeading.classList.add("company"); // Add class for filtering
  
        const jobTitle = document.createElement("p");
        jobTitle.textContent = job.jobTitle;
  
        const salaryInfo = document.createElement("p");
        salaryInfo.textContent = `Salary: ${job.salary}`; // <-- Added backticks
  
        const applyButton = document.createElement("button");
        applyButton.textContent = "Apply";
        applyButton.addEventListener("click", () => {
          // Display the modal
          const modal = document.getElementById("myModal");
          modal.style.display = "block";
        });
  
        jobListing.appendChild(companyHeading);
        jobListing.appendChild(jobTitle);
        jobListing.appendChild(salaryInfo);
        jobListing.appendChild(applyButton);
  
        jobListingsContainer.appendChild(jobListing);
      }
    });
  }
  
  // Event listener for the clear button
  const clearButton = document.getElementById("clearButton");
  clearButton.addEventListener("click", () => {
    // Clear the search input value
    const searchInput = document.getElementById("searchInput");
    searchInput.value = "";
  
    // Call the function to generate job listings
    generateJobListings();
  });
  
  // Call the function to generate job listings when the page loads
  window.onload = generateJobListings;
  
  // Attach event listener to the search input to trigger filtering when typing
  const searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("input", () => {
    generateJobListings();
  });
  
  const modal = document.getElementById("myModal");
  
  // Get the <span> element that closes the modal
  const span = document.getElementsByClassName("close")[0];
  
  // Close the modal when the user clicks on <span> (x)
  span.onclick = function () {
    modal.style.display = "none";
  };
  
  // Close the modal when the user clicks anywhere outside of the modal
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
  