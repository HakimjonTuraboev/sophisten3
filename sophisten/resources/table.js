
function edit_row(no)
{
    document.getElementById("edit_button"+no).disabled = true;
    document.getElementById("save_button"+no).disabled = false;

    let system=document.getElementById("system_row"+no);
    let modal=document.getElementById("modal_row"+no);
    let funkt=document.getElementById("funkt_row"+no);
    let object=document.getElementById("object_row"+no);
    let process=document.getElementById("process_row"+no);

    let system_data=system.innerHTML;
    let modal_data=modal.innerHTML;
    let funkt_data=funkt.innerHTML;
    let object_data=object.innerHTML;
    let process_data=process.innerHTML;

    system.innerHTML="<input type='text' id='system_text"+no+"' value='"+system_data+"'>";
    modal.innerHTML="<input type='text' id='modal_text"+no+"' value='"+modal_data+"'>";
    funkt.innerHTML="<input type='text' id='funkt_text"+no+"' value='"+funkt_data+"'>";
    object.innerHTML="<input type='text' id='object_text"+no+"' value='"+object_data+"'>";
    process.innerHTML="<input type='text' id='process_text"+no+"' value='"+process_data+"'>";

}

function save_row(no)
{
    let system_val=document.getElementById("system_text"+no).value;
    let modal_val=document.getElementById("modal_text"+no).value;
    let funkt_val=document.getElementById("funkt_text"+no).value;
    let object_val=document.getElementById("object_text"+no).value;
    let process_val=document.getElementById("process_text"+no).value;

    document.getElementById("system_row"+no).innerHTML=system_val;
    document.getElementById("modal_row"+no).innerHTML=modal_val;
    document.getElementById("funkt_row"+no).innerHTML=funkt_val;
    document.getElementById("object_row"+no).innerHTML=object_val;
    document.getElementById("process_row"+no).innerHTML=process_val;

    document.getElementById("edit_button"+no).disabled = false;
    document.getElementById("save_button"+no).disabled = true;
}

function delete_row(no)
{
    document.getElementById("row"+no+"").outerHTML="";
}

function add_row()
{
    let new_system=document.getElementById("new_system").value;
    let new_modal=document.getElementById("new_modal").value;
    let new_funkt=document.getElementById("new_funkt").value;
    let new_object=document.getElementById("new_object").value;
    let new_process=document.getElementById("new_process").value;

    let table=document.getElementById("data_table");
    let table_len=(table.rows.length)-1;
    let row = table.insertRow(table_len).outerHTML=

        "<tr id='row"+table_len+"'>" +
        "<td id='system_row"+table_len+"'>"+new_system+"</td>" +
        "<td id='modal_row"+table_len+"'>"+new_modal+"</td>" +
        "<td id='funkt_row"+table_len+"'>"+new_funkt+"</td>" +
        "<td id='object_row"+table_len+"'>"+new_object+"</td>" +
        "<td id='process_row"+table_len+"'>"+new_process+"</td>" +

        "<td>" +
        "<button id='edit_button"+table_len+"' class='btn' onclick='edit_row("+table_len+")'>edit</button>"+
        "<button id='save_button"+table_len+"' class='btn' onclick='save_row("+table_len+")'>save</button>" +
        "<button id='delete_button"+table_len+"' class='btn' onclick='delete_row("+table_len+")'>delete</button>" +
        "</td></tr>";

    //document.getElementById("new_system").value="";
    document.getElementById("new_object").value="";
    document.getElementById("new_process").value="";
}
function myFunctionSearch() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("wrapper");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
function myComment() {
}