document.getElementById('medical-table-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var patients = document.getElementById('patients').value;
    var parameters = document.getElementById('parameters').value;

    generateMedicalTable(patients, parameters);
});

function generateMedicalTable(patients, parameters) {
    var tableContainer = document.getElementById('medical-table-container');
    var tableHTML = '<table>';

    tableHTML += '<thead><tr><th>Patient</th>';
    for (var i = 1; i <= parameters; i++) {
        tableHTML += '<th>Parameter ' + i + '</th>';
    }
    tableHTML += '</tr></thead>';

    tableHTML += '<tbody>';
    for (var j = 1; j <= patients; j++) {
        tableHTML += '<tr><td>Patient ' + j + '</td>';
        for (var k = 1; k <= parameters; k++) {
            var value = Math.floor(Math.random() * 100) + 1;
            tableHTML += '<td>' + value + '</td>';
        }
        tableHTML += '</tr>';
    }
    tableHTML += '</tbody></table>';

    tableContainer.innerHTML = tableHTML;
}
