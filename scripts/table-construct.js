// Подписываемся на событие отправки формы
document.getElementById('medical-table-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем отправку формы

    // Получаем значения полей формы
    var patients = document.getElementById('patients').value;
    var parameters = document.getElementById('parameters').value;

    // Генерируем таблицу
    generateMedicalTable(patients, parameters);
});

// Функция для генерации медицинской таблицы
function generateMedicalTable(patients, parameters) {
    var tableContainer = document.getElementById('medical-table-container');
    var tableHTML = '<table>';

    // Генерируем заголовок таблицы
    tableHTML += '<thead><tr><th>Patient</th>';
    for (var i = 1; i <= parameters; i++) {
        tableHTML += '<th>Parameter ' + i + '</th>';
    }
    tableHTML += '</tr></thead>';

    // Генерируем тело таблицы
    tableHTML += '<tbody>';
    for (var j = 1; j <= patients; j++) {
        tableHTML += '<tr><td>Patient ' + j + '</td>';
        for (var k = 1; k <= parameters; k++) {
            // Генерируем случайное значение параметра для каждого пациента
            var value = Math.floor(Math.random() * 100) + 1;
            tableHTML += '<td>' + value + '</td>';
        }
        tableHTML += '</tr>';
    }
    tableHTML += '</tbody></table>';

    // Выводим таблицу в контейнер
    tableContainer.innerHTML = tableHTML;
}
