// Assign the data from `data.js` to a descriptive variable
var tableData = data;

// Get a reference to the table body
var tbody = d3.select('tbody')

// function to create/load the data in the html table
function createTable(data) {

    // To clear the table if search renders no value
    tbody.html("");

    // Loop Through `data`
    data.forEach(sighting => {
        // Use d3 to append one table row `tr` for each sighting object
        var row = tbody.append('tr')

    // Use d3 to append a cell to the row per sighting value
    Object.entries(sighting).forEach(([key, value]) => {
        var cell = row.append('td')
        cell.text(value)
    })
})
}

// Display table data using the createTable function
createTable(tableData)

    // --Filtering by Date--

// Select the input element and get the raw HTML node
var inputElement = d3.select('#datetime')

// Select the button and the form
var button = d3.select('#filter-btn')
var form = d3.select("#form");

// Create event handlers 
button.on('click', handleClick)
form.on("submit", handleClick);

// Complete the event handler function for the form
function handleClick() {

    // Prevent the page from refreshing
    d3.event.preventDefault()

    // Get the value property of the input element
    var inputValue = inputElement.property('value')

    // Use the form input to filter the data by date
    var filteredData = tableData.filter(event => event.datetime === inputValue)

    // Display filteredData using createTable function
    createTable(filteredData)
}



