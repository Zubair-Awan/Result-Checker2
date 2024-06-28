function checkResult() {
    const rollNo = document.getElementById("roll-no").value;
    const results = JSON.parse(localStorage.getItem('results')) || {};
    const resultTable = document.getElementById("result-table");

    if (results[rollNo]) {
        resultTable.innerHTML = `
            <table>
                <tr><th>Roll No</th><td>${rollNo}</td></tr>
                <tr><th>Total Marks</th><td>${results[rollNo].totalMarks}</td></tr>
                <tr><th>Obtained Marks</th><td>${results[rollNo].obtainedMarks}</td></tr>
                <tr><th>Percentage</th><td>${results[rollNo].percentage}%</td></tr>
            </table>
        `;
    } else {
        resultTable.innerHTML = `<p>No result found for Roll No: ${rollNo}</p>`;
    }
}
