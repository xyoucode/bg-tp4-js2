"use strict"; // Slide 50-51, 141: Strict mode enabled

// Slide 37: Declare and initialize lines counter and total points variables
let lignes = 0;
let total_points = 0;

// Slide 38, 40: Define the array of literal objects containing persons data
let persons = [
    { nom: 'nom-1', prenom: 'prenom-1', points: 5 },
    { nom: 'nom-2', prenom: 'prenom-2', points: 10 },
    { nom: 'nom-3', prenom: 'prenom-3', points: 15 }
];

// Slide 45: Initialization function to loop through the array and insert rows
function init() {
    // Slide 44: Using for..of loop to iterate over the persons array
    for (let p of persons) {
        doInsert(p.nom, p.prenom, p.points);
    }
}

// Slide 45: Function to handle data, update counters, and refresh summary
function doInsert(nom, prenom, points) {
    // Slide 41: Increment lines counter by 1
    lignes++;
    
    // Slide 41: Add the current points parameter to total_points
    total_points += parseInt(points);
    
    // Call the row insertion function with the current counter and data
    doInsertRowTable(lignes, nom, prenom, points);
    
    // Call update_summary function to refresh the summary display (Slide 40)
    update_summary();
}

// Slide 45: Function to update the summary space in the DOM
function update_summary() {
    // Slide 61-64: Retrieve summary elements using getElementById
    const element_lignes = document.getElementById("p1");
    const element_points = document.getElementById("p3");

    // Slide 90-91: Modify text content using innerText to reflect current variables
    element_lignes.innerText = lignes + " ligne(s)";
    element_points.innerText = "Total point(s)= " + total_points;
}

// Slide 45: Function to insert a new row into the table DOM
function doInsertRowTable(num, nom, prenom, points) {
    // Slide 56-57, 76-78: Retrieve the table element using CSS selector
    const table = document.querySelector("table");

    // Slide 104: Dynamically create a new table row element
    const row = document.createElement("tr");
    row.setAttribute("class", "row_item"); // Slide 106-107

    // Slide 104: Create table data elements (columns)
    const col1 = document.createElement("td");
    const col2 = document.createElement("td");
    const col3 = document.createElement("td");
    const col4 = document.createElement("td");
    const col5 = document.createElement("td");

    // Slide 90-91: Set text content using innerText
    col1.innerText = num;
    col2.innerText = nom;
    col3.innerText = prenom;
    col4.innerText = points;

    // Slide 104: Create checkbox input element
    const chkbox = document.createElement("input");
    chkbox.setAttribute("type", "checkbox"); // Slide 106-107
    col5.appendChild(chkbox); // Slide 103

    // Slide 106-107: Assign corresponding CSS classes
    col1.setAttribute("class", "col_number");
    col2.setAttribute("class", "col_text");
    col3.setAttribute("class", "col_text");
    col4.setAttribute("class", "col_number");
    col5.setAttribute("class", "col_chkbox");

    // Slide 97-98: Append columns to row and row to table
    row.append(col1, col2, col3, col4, col5);
    table.append(row);
}

// Slide 33, 45: Function to display the persons array contents in the console
function consoleTableau() {
    console.table(persons);
}

// Slide 139: Automatically execute init function when the window loads
window.onload = function() {
    init();
};
