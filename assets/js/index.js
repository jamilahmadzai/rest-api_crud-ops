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
