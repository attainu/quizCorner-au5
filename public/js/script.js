function enabled() {
    document.getElementById('password').removeAttribute('disabled');
    document.getElementById('userphone').removeAttribute('disabled');
    document.getElementById('useraddress').removeAttribute('disabled');
    document.getElementById('btnupdate').removeAttribute('disabled');

}
$('document').ready(function() {

  
   
    $('#reset').click(function() {

        var email = $('#resInp').val();
        $.ajax({
            type: "POST",
            url: "/forgot",
            data: { 'field': email },
            success: function(response) {
                // console.log(response);
                console.log('success');

            },
            error: function(response) {
                // console.log(response);
                console.log('error');

            }
        });
    })
});

function setProfilePic()
{
        $('#profilepicid').click();
        $('#profilepicid').on('change',function()
        {
            $('#updatebtn').click();
        })   
     
}

$('.btn-save').click(function() {
    $(".toast").toast("show")
});

var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 40);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}

