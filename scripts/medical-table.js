// Получение формы и контейнера для результатов
const form = document.getElementById('medicalDataForm');
const tableContainer = document.getElementById('medicalTableContainer');

// Добавление слушателя события отправки формы
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращение перезагрузки страницы

    // Получение значений из формы
    const patientName = form.elements.patientName.value;
    const patientAge = form.elements.patientAge.value;
    const patientGender = form.elements.patientGender.value;
    const diagnosis = form.elements.diagnosis.value;
    const bloodPressure = form.elements.bloodPressure.value;
    const heartRate = form.elements.heartRate.value;
    const temperature = form.elements.temperature.value;

    // Создание объекта с данными пациента
    const patientData = {
        patientName,
        patientAge,
        patientGender,
        diagnosis,
        bloodPressure,
        heartRate,
        temperature
    };

    // Получение текущих данных из локального хранилища, если они там есть
    let savedPatientData = JSON.parse(localStorage.getItem('patientData')) || [];

    // Добавление новых данных о пациенте в массив
    savedPatientData.push(patientData);

    // Сохранение обновленных данных в локальное хранилище
    localStorage.setItem('patientData', JSON.stringify(savedPatientData));

    // Создание таблицы и добавление её в контейнер результатов
    const table = generateMedicalTable(savedPatientData);
    tableContainer.innerHTML = ''; // Очищаем контейнер перед добавлением новой таблицы
    tableContainer.appendChild(table);
});

// Функция для генерации таблицы на основе введенных параметров
function generateMedicalTable(patientDataArray) {
    const table = document.createElement('table');

    // Создание заголовка таблицы
    const headerRow = table.insertRow();
    for (const key in patientDataArray[0]) {
        if (patientDataArray[0].hasOwnProperty(key)) {
            addCell(headerRow, key);
        }
    }

    // Добавление данных о пациенте в таблицу
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

// Функция для добавления ячейки в строку таблицы
function addCell(row, text) {
    const cell = row.insertCell();
    const textNode = document.createTextNode(text);
    cell.appendChild(textNode);
}

// При загрузке страницы проверяем наличие сохраненных данных в локальном хранилище и заполняем таблицу
window.onload = function() {
    const savedPatientData = JSON.parse(localStorage.getItem('patientData')) || [];
    if (savedPatientData.length > 0) {
        const table = generateMedicalTable(savedPatientData);
        tableContainer.appendChild(table);
    }
};

// Получение кнопки для сброса данных
const resetDataButton = document.getElementById('resetDataButton');

// Добавление слушателя события клика на кнопку для сброса данных
resetDataButton.addEventListener('click', function() {
    // Очистка локального хранилища
    localStorage.removeItem('patientData');
    // Очистка таблицы
    tableContainer.innerHTML = '';
});

