function filterTables() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue, tbody, brs, divs;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    //table = document.getElementsByClassName("stockTable");
    divs = document.getElementsByClassName("tbl-div");
    //tr = table.getElementsByTagName("tr");

    //alert(table.length);

    // Loop through all table rows, and hide those who don't match the search query
    for (j = 0; j < divs.length; j++) {
        table = divs[j].getElementsByClassName("stockTable")[0];
        tbody = table.getElementsByTagName("tbody")[0];
        tr = tbody.getElementsByTagName("tr")[0];
        td = tr.getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            //alert(txtValue);
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                divs[j].style.display = "";
            } else {
                divs[j].style.display = "none";
            }
        }
    }

    /* brs = document.getElementsByTagName("br");

    if (filter.length > 3) {
        for (i = 0; i < brs.length; j++) {
            brs[i].style.display = "none";
        }
    } else {
        for (i = 0; i < brs.length; j++) {
            brs[i].style.display = "";
        }
    } */

}