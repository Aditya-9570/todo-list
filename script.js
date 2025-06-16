const nameInput = document.getElementById("inputname ")
const idInput = document.getElementById(" inputid")
const classInput = document.getElementById("inputclass ")
const rollInput = document.getElementById(" inputroll")
const registerBtn = document.getElementById(" savebutton")
const tableBody = document.getElementById("tbodyedit")



let editTargetRow = null;

registerBtn.addEventListener("click", () => {
  const name = nameInput.value;
  const id = idInput.value;
  const studentClass = classInput.value;
  const roll = rollInput.value;
  if(editTargetRow){
    editTargetRow.cell[0].textContent=name;
    editTargetRow.cell[1].textContent=id;
    editTargetRow.cell[2].textContent=sclass;
    editTargetRow.cell[3].textContent=roll;
    editTargetRow=null;
    registerBtn.textContent="REGISTER"
  }else{
    const newRow= document.createElement("tr");
    newRow.innerHTML=
    `
    <td> ${name}  </td>
    <td> ${id}  </td>
    <td> ${sclass}  </td>
    <td> ${roll}  </td>
    <td>
    <button class="edit-btn">Edit</button>
    <button class="delete-btn">Delete</button>  
    
    </td>
    `;
     tableBody.appendChild(newRow);

  }

  nameInput.value = idInput.value =  classInput.value =  rollInput.value = "";
});
function updateActionButtons() {
  const editBtns = document.querySelectorAll(".edit-btn");
  const deleteBtns = document.querySelectorAll(".delete-btn");

  editBtns.forEach((btn) => {
    btn.onclick = function () {
      const row = btn.closest("tr");
      nameInput.value = row.cells[0].textContent;
      idInput.value = row.cells[1].textContent;
      classInput.value = row.cells[2].textContent;
      rollInput.value = row.cells[3].textContent;

      editTargetRow = row;
      registerBtn.textContent = "UPDATE";
    };
  });

  deleteBtns.forEach((btn) => {
    btn.onclick = function () {
      const row = btn.closest("tr");
      row.remove();
      if (editTargetRow === row) {
        editTargetRow = null;
        registerBtn.textContent = "REGISTER";
      }
    };
  });
}



