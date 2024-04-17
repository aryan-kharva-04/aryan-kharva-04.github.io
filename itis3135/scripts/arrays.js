let persons = [];
let salaries = [];

function addSalary() {
    const name = document.getElementById("name").value.trim();
    const salary = document.getElementById("salary").value.trim();

    if (name === "" || salary === "") {
        alert("Please enter both name and salary.");
        return;
    }

    if (isNaN(salary)) {
        alert("Salary must be a number.");
        return;
    }

    persons.push(name);
    salaries.push(parseFloat(salary));

    document.getElementById("name").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("name").focus();
    dropdown();
}

function modifySalary() {
    const employeeIndex = document.getElementById("employee-list").selectedIndex;
    const newSalary = document.getElementById("new-salary").value.trim();

    if (employeeIndex === -1) {
        alert("Please select an employee.");
        return;
    }

    if (newSalary === "") {
        alert("Please enter a new salary.");
        return;
    }

    if (isNaN(newSalary)) {
        alert("New salary must be a number.");
        return;
    }

    salaries[employeeIndex] = parseFloat(newSalary);
    document.getElementById("new-salary").value = "";
    dropdown();
}


function displayResults() {
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";

    const totalSalary = salaries.reduce((sum, salary) => sum + salary, 0);
    const averageSalary = totalSalary / salaries.length;
    const highestSalary = Math.max(...salaries);

    const heading = document.createElement("h2");
    heading.textContent = "Results";
    resultsDiv.appendChild(heading);

    const averageSalaryParagraph = document.createElement("p");
    averageSalaryParagraph.textContent = `Average Salary: $${averageSalary.toFixed(2)}`;
    resultsDiv.appendChild(averageSalaryParagraph);

    const highestSalaryParagraph = document.createElement("p");
    highestSalaryParagraph.textContent = `Highest Salary: $${highestSalary.toFixed(2)}`;
    resultsDiv.appendChild(highestSalaryParagraph);
}

function displaySalary() {
    const resultsTable = document.getElementById("results_table");

    while (resultsTable.rows.length > 1) {
        resultsTable.deleteRow(1);
    }

    for (let i = 0; i < persons.length; i++) {
        const row = resultsTable.insertRow(-1);
        const nameCell = row.insertCell(0);
        const salaryCell = row.insertCell(1);

        nameCell.textContent = persons[i];
        salaryCell.textContent = `$${salaries[i].toFixed(2)}`;
    }
}

//function for the dropdown menu
function dropdown() {
    const employeeList = document.getElementById("employee-list");
    employeeList.innerHTML = "";

    for (let i = 0; i < persons.length; i++) {
        const option = document.createElement("option");
        option.value = i;
        option.textContent = `${persons[i]} - $${salaries[i].toFixed(2)}`;
        employeeList.appendChild(option);
    }
}

window.onload = function() {
    document.getElementById("name").focus();
    dropdown();
};