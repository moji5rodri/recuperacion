document.addEventListener("DOMContentLoaded", function() {
    var forms = document.querySelectorAll("form");
    var form = forms[0];
    
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        var first_name = document.querySelectorAll("#first_name")[0].value;
        var last_name = document.querySelectorAll("#last_name")[0].value;
        var career = $('input[name="career"]:checked').val();

        var message = document.querySelectorAll("#message")[0];
        message.innerHTML = message.innerHTML + "<span>" + first_name + " " + last_name + " " + career + "</span>";
        
        var payload = {
            'first_name': first_name,
            'last_name': last_name,
            'career' : career,
        }
        
        $.post("/find", payload);
      }
    );
})
