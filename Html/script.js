const teachers = [
    { no: 1, code: "T0000", name: "TBA", sex: "[M]", company: "Mol", contact: "00000000" },
    { no: 2, code: "T0001", name: "Vann Bunthirith", sex: "[M]", company: "Mol", contact: "012626763" },
    { no: 3, code: "T0002", name: "Makara Sela", sex: "[M]", company: "Mol", contact: "012626764" },
    { no: 4, code: "T0003", name: "Vong Proshel", sex: "[M]", company: "Mol", contact: "012626765" },
    { no: 5, code: "T0004", name: "Sok Monol", sex: "[M]", company: "Private Sector", contact: "012999999" },
    { no: 6, code: "T0006", name: "Som Kosal", sex: "[M]", company: "Mol", contact: "012626767" },
    { no: 7, code: "T0007", name: "Vong Makara", sex: "[M]", company: "Private Sector", contact: "012896532" },
    { no: 8, code: "T0008", name: "Ouk Nary", sex: "[F]", company: "Mol", contact: "012896578" },
    { no: 9, code: "T0009", name: "N. Johnson", sex: "[M]", company: "Private Sector", contact: "012626769" },
  ];
  
  const tableBody = document.getElementById("teacher-table");
  
  // Function to render table rows
  function renderTable() {
    tableBody.innerHTML = ""; // Clear existing rows
    teachers.forEach((teacher) => {
      const row = 
        <tr>
          <td>${teacher.no}</td>
          <td>${teacher.code}</td>
          <td>${teacher.name}</td>
          <td>${teacher.sex}</td>
          <td>${teacher.company}</td>
          <td>${teacher.contact}</td>
          <td><button class="on-off">On/Off</button></td>
          <td><button class="delete" onclick="deleteRow(${teacher.no})">Delete</button></td>
          <td><button class="edit">Edit</button></td>
        </tr>
      ;
      tableBody.innerHTML += row;
    });
  }
  
  // Function to delete a row
  function deleteRow(no) {
    const index = teachers.findIndex((teacher) => teacher.no === no);
    if (index !== -1) {
      teachers.splice(index, 1);
      renderTable();
    }
  }
  
  // Initial render
  renderTable();