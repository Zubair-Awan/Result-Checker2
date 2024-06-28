const adminPassword = "admin123";
let results = JSON.parse(localStorage.getItem('results')) || {};

function adminLogin() {
    const password = document.getElementById("admin-password").value;
    if (password === adminPassword) {
        document.getElementById("admin-login").style.display = "none";
        document.getElementById("admin-panel").style.display = "block";
        displayResults();
    } else {
        alert("Incorrect password");
    }
}

function addResult() {
    const rollNo = document.getElementById("student-roll-no").value;
    const totalMarks = document.getElementById("student-total-marks").value;
    const obtainedMarks = document.getElementById("student-obtained-marks").value;
    const percentage = ((obtainedMarks / totalMarks) * 100).toFixed(2);

    if (rollNo && totalMarks && obtainedMarks) {
        results[rollNo] = { totalMarks, obtainedMarks, percentage };
        localStorage.setItem('results', JSON.stringify(results));
        alert("Result added successfully");
        displayResults();
    } else {
        alert("Please fill in all fields");
    }
}

function removeResult(rollNo) {
    if (results[rollNo]) {
        delete results[rollNo];
        localStorage.setItem('results', JSON.stringify(results));
        alert("Result removed successfully");
        displayResults();
    } else {
        alert("No result found for the given Roll No");
    }
}

function displayResults() {
    const resultList = document.getElementById("result-list");
    resultList.innerHTML = `<h3>Submitted Results</h3>`;
    for (const rollNo in results) {
        resultList.innerHTML += `
            <div class="result-entry">
                <p>Roll No: ${rollNo}</p>
                <p>Total Marks: ${results[rollNo].totalMarks}</p>
                <p>Obtained Marks: ${results[rollNo].obtainedMarks}</p>
                <p>Percentage: ${results[rollNo].percentage}%</p>
                <button onclick="removeResult('${rollNo}')">Remove Result</button>
            </div>
        `;
    }
}
