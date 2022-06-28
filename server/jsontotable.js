module.exports = function json2table(json, classes) {
    var cols = Object.keys(json[0]);
    var bodyRows = '';
    classes = classes || '';
    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    json.map(function(row) {
      cols.map(function(colName) {
        bodyRows += '<tr>';
        bodyRows += '<th>' + capitalizeFirstLetter(colName) + '</th>';
        bodyRows += '<td>' + row[colName] + '</td>';
        bodyRows += '</tr>';
      })
    });
  
    return '<table class="' +
           classes +
           '"><tbody>' +
           bodyRows +
           '</tbody></table>';
  }