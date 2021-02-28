$("#update-user").submit((e) => {
  e.preventDefault();

  let array = $("#update-user").serializeArray();
  let data = {};

  array.map((item, index) => {
    data[item["name"]] = item["value"];
  });

  console.log(data);

  let request = {
    url: `http://localhost:3000/api/users/${data.id}`,
    method: "PUT",
    data: data,
  };

  $.ajax(request).done((res) => {
    alert("Data Updated successfully");
  });
});

if (window.location.pathname == "/") {
  $ondelete = $(".table tbody td a.delete");
  $ondelete.click(function () {
    var id = $(this).attr("data-id");

    var request = {
      url: `http://localhost:3000/api/users/${id}`,
      method: "DELETE",
    };

    if (confirm("Do you really want to delete this record?")) {
      $.ajax(request).done((response) => {
        alert("Data Deleted Successfully!");
        location.reload();
      });
    }
  });
}
