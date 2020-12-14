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


    // --Filtering by keys--

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

    // Select the input element and get the raw HTML node and get the value property of the input element
    var inputDate = d3.select('#datetime').property('value')
    var inputCity = d3.select('#city').property('value')
    var inputState = d3.select('#state').property('value')
    var inputCountry = d3.select('#country').property('value')
    var inputShape = d3.select('#shape').property('value')

    // Get a reference to the table body
    var tbody = d3.select("tbody");

    // Use the form input to filter the data by multiple criteria
    // Reference:  Bragg, Johnny.  Personal communication. 12/13/2020.
    var filteredData = tableData

    if (inputDate.length > 0) {
        filteredData = filteredData.filter(event => event.datetime === inputDate)
    }    
    if (inputCity.length > 0) {
        filteredData = filteredData.filter(event => event.city === inputCity)
    } 
    if (inputState.length > 0) {
        filteredData = filteredData.filter(event => event.state === inputState)
    }
    if (inputCountry.length > 0) {
        filteredData = filteredData.filter(event => event.country === inputCountry)
    }
    if (inputShape.length > 0) {
        filteredData = filteredData.filter(event => event.shape === inputShape)
    }

    // Display filteredData using createTable function
    createTable(filteredData)

}






