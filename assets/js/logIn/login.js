$('#btnLogin').click(function () {

    let userName = $('#txtUserName').val();
    let password = $('#txtPassword').val();
    if (checkInputField()) {
        $.ajax({
            method: "get",
            url: '' + userName + '/' + password,
            async: false,
            success: function (response) {
                var role = response.data;
                console.log(role);
                if (role == "Admin") {
                    loginSave("Admin");
                    alertify.success('Admin Login', 'success', 2);
                    location.replace("adminDashBoard.html");
                } else if (role == "Driver") {
                    alertify.success('Driver Login', 'success', 2);
                    location.replace("driverDashBoard.html");
                    loginSave("Driver");

                } else if (role == "Customer") {
                    alertify.success('Customer Login', 'success', 2);
                    location.replace("customerDashBoard.html");
                    loginSave("Customer");

                } else {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Oops...',
                        text: 'User Name or Password Not matching!' + '\n' +
                            ' Please use the Create New Button to create a new account',
                    })
                }
            }
        });
    } else {
        // $('#driverID').css('border', '3px solid red');
    }
});