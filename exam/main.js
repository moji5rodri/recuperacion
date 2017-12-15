document.addEventListener("DOMContentLoaded", function() {
    var forms = document.querySelectorAll("form");
    var form = forms[0];

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        var first_name = document.querySelectorAll("#first_name")[0].value;
        var last_name = document.querySelectorAll("#last_name")[0].value;
        var nota_1 = document.querySelectorAll("#nota_1")[0].value;
        var nota_2 = document.querySelectorAll("#nota_2")[0].value;
        var nota_3 = document.querySelectorAll("#nota_3")[0].value;

        var message = document.querySelectorAll("#message")[0];
        message.innerHTML = message.innerHTML + "<span>" + first_name + " " + last_name + " " + nota_1 + " " + nota_2 + " " + nota_3 + "</span>";

        var payload = {
            'first_name': first_name,
            'last_name': last_name,
            'nota_1' : nota_1,
            'nota_2' : nota_2,
            'nota_3' : nota_3
        }

        $.post("/find", payload);
      }
    );
})
