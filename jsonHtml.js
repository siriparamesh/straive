// json2html.js
export default function json2html(data) {
    // Create the table element
    let html = `<table data-user="siriparamesh8@gmail.com">
      <thead>
        <tr><th>Name</th><th>Age</th><th>Gender</th></tr>
      </thead>
      <tbody>`;
  
    // Loop through the array and create table rows
    data.forEach(item => {
      html += `<tr>
        <td>${item.Name || ''}</td>
        <td>${item.Age || ''}</td>
        <td>${item.Gender || ''}</td>
      </tr>`;
    });
  
    // Close the table
    html += `</tbody></table>`;
  
    // Return the generated HTML as a string
    return html;
  }
  
  