document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const category = document.getElementById("category").value.trim();
    const portfolio = document.getElementById("portfolio").value.trim();
  
    if (!name || !email || !category || !portfolio) {
      alert("Please fill in all fields.");
      return;
    }
  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const urlPattern = /^(http|https):\/\/[^ "]+$/;
  
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email.");
      return;
    }
  
    if (!urlPattern.test(portfolio)) {
      alert("Please enter a valid portfolio URL.");
      return;
    }
  
    if (portfolio.length < 10) {
      alert("Portfolio link should be at least 10 characters long.");
      return;
    }
  
    // Redirect to the thank-you page
    window.location.href = "thank-you.html";
  });
  