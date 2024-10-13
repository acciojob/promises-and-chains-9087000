document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const ageInput = document.getElementById('age').value;
    const nameInput = document.getElementById('name').value;

    // Validate inputs are not empty
    if (ageInput === '' || nameInput === '') {
        alert('Please enter valid details');
        return;
    }

    const age = parseInt(ageInput);
    const name = nameInput;

    // Create a promise that resolves or rejects based on age
    const ageCheckPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (age > 18) {
                resolve();
            } else {
                reject();
            }
        }, 4000);
    });

    ageCheckPromise
        .then(() => {
            alert(`Welcome, ${name}. You can vote.`);
        })
        .catch(() => {
            alert(`Oh sorry ${name}. You aren't old enough.`);
        });
});