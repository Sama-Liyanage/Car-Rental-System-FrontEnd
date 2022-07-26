const adminBaseUrl="http://localhost:8080/api/v1/admin";



//Start Admin Validation Section
function checkValidationAdminProfile() {

    let id = $('#adminID').val();
    let email = $('#adminEmail').val();
    let name = $('#adminName').val();
    let password = $('#adminPassword').val();
    let confPassword = $('#adminConfirmPassword').val();

    if (id != "") {
        if (email != "") {
            if (name != "") {
                if (password != "") {
                    if (confPassword) {
                        return true;
                    } else {
                        $('#adminConfirmPassword').css({
                            'border': '2px #FF0000FF solid'
                        });
                        $('#adminConfirmPassword').focus();
                        return false;

                    }
                } else {
                    $('#adminPassword').css({
                        'border': '2px #FF0000FF solid'
                    });
                    $('#adminPassword').focus();
                    return false;
                }
            } else {
                $('#adminName').css({
                    'border': '2px #FF0000FF solid'
                });
                $('#adminName').focus();
                return false;
            }
        } else {
            $('#adminEmail').css({
                'border': '2px #FF0000FF solid'
            });
            $('#adminEmail').focus();

            return false;
        }
    } else {
        $('#adminID').css({
            'border': '2px #FF0000FF solid'
        });
        $('#adminID').focus();
        return false;
    }
}

//End Admin Validation Section

//Clear Text Fields
function clear() {
    $('#adminID').val();
    $('#adminEmail').val();
    $('#adminName').val();
    $('#adminPassword').val();
    $('#adminConfirmPassword').val();
}


//Start Admin Save Section
$('#btnAdminUpdate').click(() => {

    console.log("admin update clicked");

    if (checkValidationAdminProfile()) {
        let admin_id = $('#adminID').val();
        let admin_email = $('#adminEmail').val();
        let admin_name = $('#adminName').val();
        let admin_cpw = $('#adminConfirmPassword').val();

        console.log(admin_email);

        $.ajax({
            method: "PUT",
            url: adminBaseUrl,
            data: JSON.stringify({
                "adminID": admin_id,
                "email": admin_email,
                "userName": admin_name,
                "password": admin_cpw
            }),
            dataType: 'Json',
            contentType: "application/json; charset=utf-8",
            success: function (res) {
                if (res.code == 200) {
                    alert("Admin Successfully Updated");
                    clear();
                }
            },
            error: function (ob) {
                alert(ob.responseJSON.message);

            }
        });
    }

});

function saveAdmin(){
    if (checkValidationAdminProfile()) {
        let admin_id = $('#adminID').val();
        let admin_email = $('#adminEmail').val();
        let admin_name = $('#adminName').val();
        let admin_cpw = $('#adminConfirmPassword').val();

        $.ajax({
            method: "POST",
            url: adminBaseUrl,
            data: JSON.stringify({
                "adminID": admin_id,
                "email": admin_email,
                "userName": admin_name,
                "password": admin_cpw
            }),
            dataType: 'Json',
            contentType: "application/json; charset=utf-8",
            success: function (res) {
                if (res.code == 200) {
                    alert("Admin Successfully Saved");
                    clear();
                }
            },
            error: function (ob) {
                alert(ob.responseJSON.message);

            }
        });
    }

}
//End Admin Save Section




