$(document).ready(function() {
    
    $(".form-control").on("submit", function(event) {
    event.preventDefault();

    var id = $(this).children(".burger_id").val();

    console.log(id)
    $.ajax({
        method: "PUT",
        url: "/burgers/" + id
    }).then(function(data) {
        // reload 
        location.reload();
    })

    })
});
