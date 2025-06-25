document.getElementById('generateBtn').addEventListener('click', function() {
    const idea = document.getElementById('ideaInput').value.trim();
    const outputDiv = document.getElementById('output');

    if (idea === "") {
        outputDiv.innerHTML = "<p>Please enter a startup idea.</p>";
        return;
    }

    const suggestions = generateSuggestions(idea);
    outputDiv.innerHTML = `<h3>Implementation Steps for "${idea}":</h3><ul>${suggestions}</ul>`;
});

// Function to generate suggestions based on the input idea
function generateSuggestions(idea) {
    let steps = [];

    if (idea.toLowerCase().includes("food")) {
        steps = [
            "1. *Market Research*: Analyze food trends and local demand.",
            "2. *Create a Unique Selling Proposition (USP)*: What makes your food startup different?",
            "3. *Obtain Necessary Licenses*: Food safety and health permits.",
            "4. *Develop a Menu or Product List*: Highlighting signature dishes or items.",
            "5. *Set Up Online Ordering or Delivery*: Partner with food delivery platforms.",
            "6. *Promote on Social Media*: Engage with customers using food blogs or videos."
        ];
    } else if (idea.toLowerCase().includes("e-commerce")) {
        steps = [
            "1. *Market Research*: Identify trending products and target audience.",
            "2. *Choose a Platform*: Shopify, WooCommerce, or custom website.",
            "3. *Source Products*: Manufacture or partner with wholesalers.",
            "4. *Build an Online Store*: Focus on user-friendly design.",
            "5. *Implement Secure Payment Gateway*: Offer multiple payment options.",
            "6. *Marketing Strategy*: Leverage SEO, email marketing, and ads."
        ];
    } else if (idea.toLowerCase().includes("education")) {
        steps = [
            "1. *Identify the Learning Gap*: Find out what learners struggle with.",
            "2. *Develop Course Content*: Videos, PDFs, or interactive modules.",
            "3. *Choose a Platform*: YouTube, Udemy, or a personal website.",
            "4. *Create Interactive Sessions*: Quizzes and live webinars.",
            "5. *Engage Community*: Encourage feedback and peer interaction.",
            "6. *Monetization Strategy*: Subscriptions, ads, or one-time payments."
        ];
    } else {
        steps = [
            "1. *Define the Problem*: Clarify what issue your idea solves.",
            "2. *Market Research*: Validate the demand for this solution.",
            "3. *Create a Minimum Viable Product (MVP)*: Test the basic version.",
            "4. *Collect Feedback*: Improve based on early user input.",
            "5. *Build a Team*: Find experts in development, marketing, and sales.",
            "6. *Promote and Iterate*: Use feedback loops for continuous improvement."
        ];
    }

    // Convert steps to list items
    let listItems = steps.map(step => `<li>${step}</li>`).join('');
    return listItems;
}
