//your JS code here. If required.
// Add event listener for form submission
document.getElementById('userForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission

    // Get input values
    const age = document.getElementById('age').value;
    const name = document.getElementById('name').value;

    // Check for empty inputs
    if (!age || !name) {
        alert("Please fill in both fields.");
        return;
    }

    // Create a promise that resolves or rejects based on age
    const agePromise = new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (age >= 18) {
                resolve(name);
            } else {
                reject(name);
            }
        }, 4000); // 4 second delay
    });

    // Handle the promise resolution or rejection
    agePromise
        .then((name) => {
            alert(`Welcome, ${name}. You can vote.`);
        })
        .catch((name) => {
            alert(`Oh sorry ${name}. You aren't old enough.`);
        });
});

