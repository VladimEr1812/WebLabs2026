const form = document.getElementById('medicalDataForm');
const tableContainer = document.getElementById('medicalTableContainer');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const patientName = form.elements.patientName.value;
    const patientAge = form.elements.patientAge.value;
    const patientGender = form.elements.patientGender.value;
    const diagnosis = form.elements.diagnosis.value;
    const bloodPressure = form.elements.bloodPressure.value;
    const heartRate = form.elements.heartRate.value;
    const temperature = form.elements.temperature.value;

    const patientData = {
        patientName,
        patientAge,
        patientGender,
        diagnosis,
        bloodPressure,
        heartRate,
        temperature
    };

    let savedPatientData = JSON.parse(localStorage.getItem('patientData')) || [];

    savedPatientData.push(patientData);

    localStorage.setItem('patientData', JSON.stringify(savedPatientData));

    const table = generateMedicalTable(savedPatientData);
    tableContainer.innerHTML = '';
    tableContainer.appendChild(table);
});

function generateMedicalTable(patientDataArray) {
    const table = document.createElement('table');

    const headerRow = table.insertRow();
    for (const key in patientDataArray[0]) {
        if (patientDataArray[0].hasOwnProperty(key)) {
            addCell(headerRow, key);
        }
    }

    patientDataArray.forEach(patientData => {
        const dataRow = table.insertRow();
        for (const key in patientData) {
            if (patientData.hasOwnProperty(key)) {
                addCell(dataRow, patientData[key]);
            }
        }
    });

    return table;
}

function addCell(row, text) {
    const cell = row.insertCell();
    const textNode = document.createTextNode(text);
    cell.appendChild(textNode);
}

window.onload = function() {
    const savedPatientData = JSON.parse(localStorage.getItem('patientData')) || [];
    if (savedPatientData.length > 0) {
        const table = generateMedicalTable(savedPatientData);
        tableContainer.appendChild(table);
    }
};

const resetDataButton = document.getElementById('resetDataButton');

resetDataButton.addEventListener('click', function() {
    localStorage.removeItem('patientData');
    tableContainer.innerHTML = '';
});

