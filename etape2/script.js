"use strict"; // Slide 50-51, 141: Strict mode enabled

// Slide 45: Function declaration with parameters
function doInsertRowTable(num, nom, prenom, points) {
    // Slide 56-57, 76-78: Retrieve the table element using CSS selector (DOM manipulation step 1)
    const table = document.querySelector("table");

    // Slide 104: Dynamically create a new table row element from scratch
    const row = document.createElement("tr");

    // Slide 106-107: Manipulate HTML attributes using setAttribute
    row.setAttribute("class", "row_item");

    // Slide 104: Create table data elements (columns) dynamically
    const col1 = document.createElement("td");
    const col2 = document.createElement("td");
    const col3 = document.createElement("td");
    const col4 = document.createElement("td");
    const col5 = document.createElement("td");

    // Slide 90-91: Modify the text content of each column using innerText
    col1.innerText = num;
    col2.innerText = nom;
    col3.innerText = prenom;
    col4.innerText = points;

    // Slide 104: Create a checkbox input element for the last column
    const chkbox = document.createElement("input");
    chkbox.setAttribute("type", "checkbox"); // Slide 106-107
    
    // Slide 103: Append the checkbox as a child to the fifth column
    col5.appendChild(chkbox);

    // Slide 106-107: Assign corresponding CSS classes using setAttribute
    col1.setAttribute("class", "col_number");
    col2.setAttribute("class", "col_text");
    col3.setAttribute("class", "col_text");
    col4.setAttribute("class", "col_number");
    col5.setAttribute("class", "col_chkbox");

    // Slide 97-98: Append all columns to the row element
    row.append(col1, col2, col3, col4, col5);

    // Slide 97-98, 103: Append the row to the table element
    table.append(row);
}
