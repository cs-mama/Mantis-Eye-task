

document.addEventListener('DOMContentLoaded', function() {
    // Initial load of the first database
    loadDatabase('/database1');
  });
  
  function loadDatabase(databaseEndpoint) {
    fetch(databaseEndpoint)
      .then(response => response.json())
      .then(records => displayRecords(records))
      .catch(error => console.error('Error loading database:', error));
  }
  
  function displayRecords(records) {
    const table = document.getElementById('recordsTable');
    table.innerHTML = ''; // Clear previous records
  
    // Add table header
    const header = table.createTHead();
    const row = header.insertRow();
    for (const key in records[0]) {
      const th = document.createElement('th');
      th.textContent = key;
      row.appendChild(th);
    }
  
    // Add records to the table
    const body = table.createTBody();
    records.forEach(record => {
      const row = body.insertRow();
      for (const key in record) {
        const cell = row.insertCell();
        cell.textContent = record[key];
      }
    });
  }
  