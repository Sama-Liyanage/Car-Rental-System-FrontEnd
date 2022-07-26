const carBaseUrl="http://localhost:8080/api/v1/car";
loadAllCars();



//Start Admin Car Validation Section
function checkValidationAdminCar() {

    let adminCarId = $('#adCarId').val();
    let adminCarBrand = $('#adCarBrand').val();
    let adminCarColor = $('#adCarColor').val();
    let adminCarType = $('#adCarType').val();
    let adminCarPass = $('#adCarPassengers').val();
    let adminCarTran = $('#adCarTransmission').val();
    let adminCarFuel = $('#adCarFuel').val();
    let adminCarExKm = $('#adCarExtraKm').val();
    let adminCarReg = $('#adCarRegistration').val();
    let adminCarDam = $('#adCarDamage').val();
    let adminCarDRate = $('#adCarDailyRate').val();
    let adminCarMRate = $('#adCarMonthlyRate').val();
    let adminCarMPrice = $('#adCarMillagePrice').val();
    let adminCarDuration = $('#adCarDuration').val();

    if (adminCarId != "") {
        if (adminCarBrand != "") {
            if (adminCarColor != "") {
                if (adminCarType != "") {
                    if (adminCarPass != "") {
                        if (adminCarTran != "") {
                            if (adminCarFuel != "") {
                                if (adminCarExKm != "") {
                                    if (adminCarReg != "") {
                                        if (adminCarDam != "") {
                                            if (adminCarDRate != "") {
                                                if (adminCarMRate != "") {
                                                    if (adminCarMPrice != "") {
                                                        if (adminCarDuration) {
                                                            return true;
                                                        } else {
                                                            $('#adCarDuration').css({
                                                                'border': '2px #FF0000FF solid'
                                                            });
                                                            $('#adCarDuration').focus();
                                                            alert("Please Enter Car Duration");
                                                            return false;
                                                        }
                                                    } else {
                                                        $('#adCarMillagePrice').css({
                                                            'border': '2px #FF0000FF solid'
                                                        });
                                                        $('#adCarMillagePrice').focus();
                                                        alert("Please Enter Car M Price");
                                                        return false;
                                                    }
                                                } else {
                                                    $('#adCarMonthlyRate').css({
                                                        'border': '2px #FF0000FF solid'
                                                    });
                                                    $('#adCarMonthlyRate').focus();
                                                    alert("Please Enter adminCarMRate");
                                                    return false;
                                                }
                                            } else {
                                                $('#adCarDailyRate').css({
                                                    'border': '2px #FF0000FF solid'
                                                });
                                                $('#adCarDailyRate').focus();
                                                alert("Please Enter adminCarDRate");
                                                return false;
                                            }
                                        } else {
                                            $('#adCarDamage').css({
                                                'border': '2px #FF0000FF solid'
                                            });
                                            $('#adCarDamage').focus();
                                            alert("Please Enter adminCarDam");
                                            return false;
                                        }
                                    } else {
                                        $('#adCarRegistration').css({
                                            'border': '2px #FF0000FF solid'
                                        });
                                        $('#adCarRegistration').focus();
                                        alert("Please Enter adminCarReg");
                                        return false;
                                    }
                                } else {
                                    $('#adCarExtraKm').css({
                                        'border': '2px #FF0000FF solid'
                                    });
                                    $('#adCarExtraKm').focus();
                                    alert("Please Enter Driver adminCarExKm");
                                    return false;
                                }
                            } else {
                                $('#adCarFuel').css({
                                    'border': '2px #FF0000FF solid'
                                });
                                $('#adCarFuel').focus();
                                alert("Please Enter adminCarFuel");
                                return false;
                            }
                        } else {
                            $('#adCarTransmission').css({
                                'border': '2px #FF0000FF solid'
                            });
                            $('#adCarTransmission').focus();
                            alert("Please Enter adminCarTran");
                            return false;
                        }
                    } else {
                        $('#adCarPassengers').css({
                            'border': '2px #FF0000FF solid'
                        });
                        $('#adCarPassengers').focus();
                        alert("Please Enter adminCarPass");
                        return false;
                    }
                } else {
                    $('#adCarType').css({
                        'border': '2px #FF0000FF solid'
                    });
                    $('#adCarType').focus();
                    alert("Please Enter adminCarType");
                    return false;
                }
            } else {
                $('#adCarColor').css({
                    'border': '2px #FF0000FF solid'
                });
                $('#adCarColor').focus();
                alert("Please Enter adminCarColor");
                return false;
            }
        } else {
            $('#adCarBrand').css({
                'border': '2px #FF0000FF solid'
            });
            $('#adCarBrand').focus();
            alert("Please Enter adminCarBrand");
            return false;
        }
    } else {
        $('#adCarId').css({
            'border': '2px #FF0000FF solid'
        });
        $('#adCarId').focus();
        alert("Please Enter adminCarId");
        return false;
    }
}
//End Admin Car Validation Section

function clearCarFields() {
    $('#adCarId').val("");
    $('#adCarBrand').val(-1);
    $('#adCarColor').val(-1);
    $('#adCarType').val(-1);
    $('#adCarPassengers').val(-1);
    $('#adCarTransmission').val(-1);
    $('#adCarFuel').val(-1);
    $('#adCarExtraKm').val("");
    $('#adCarRegistration').val("");
    $('#adCarDamage').val("");
    $('#adCarDailyRate').val("");
    $('#adCarMonthlyRate').val("");
    $('#adCarMillagePrice').val("");
    $('#adCarDuration').val("");
    $('#searchCar').val("");
}

//Start Admin Car Save Section
$('#btnAdminCarSave').click(function () {


    if (checkValidationAdminCar()) {
        let adminCarId = $('#adCarId').val();
        let adminCarBrand = $('#adCarBrand').val();
        let adminCarColor = $('#adCarColor').val();
        let adminCarType = $('#adCarType').val();
        let adminCarPass = $('#adCarPassengers').val();
        let adminCarTran = $('#adCarTransmission').val();
        let adminCarFuel = $('#adCarFuel').val();
        let adminCarExKm = $('#adCarExtraKm').val();
        let adminCarReg = $('#adCarRegistration').val();
        let adminCarDam = $('#adCarDamage').val();
        let adminCarDRate = $('#adCarDailyRate').val();
        let adminCarMRate = $('#adCarMonthlyRate').val();
        let adminCarMPrice = $('#adCarMillagePrice').val();
        let adminCarDuration = $('#adCarDuration').val();

        $.ajax({
            method: "POST",
            url: carBaseUrl,
            dataType: 'Json',
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify({
                "carId": adminCarId,
                "carBrand": adminCarBrand,
                "carType": adminCarType,
                "carNmbOfPassengers": adminCarPass,
                "carTransmissionType": adminCarTran,
                "carFuelType": adminCarFuel,
                "carPriceForExtraKM": adminCarExKm,
                "carRegistrationNumber": adminCarReg,
                "carColour": adminCarColor,
                "carDailyRate": adminCarDRate,
                "carMonthlyRate": adminCarMRate,
                "carLossDamageWaiver": adminCarDam,
                "carFreeMillagePrice": adminCarMPrice,
                "carFreeMillageDuration": adminCarDuration
            }),

            success: function (res) {

                if (res.code == 200) {
                    loadAllCars();
                    clearCarFields();
                    getLastCarId();
                    alert("car Successfully Saved");
                }
            },
            error: function (ob) {
                alert(ob.responseJSON.message);
            }
        });
    }
});
//End Admin Car Save Section

//Start Get All Car
$('#btnAdminCarGetAll').click(function () {
    loadAllCars();
    clearCarFields();
});
function loadAllCars() {
    $('#tblCarBody').empty();
    $.ajax({
        url: carBaseUrl,
        method: 'GET',
        async: false,
        dataType: 'json',
        success: function (res) {
            let values = res.data;
            for (i in values) {
                let adminCarId = values[i].carId;
                let adminCarReg = values[i].carRegistrationNumber;
                let adminCarBrand = values[i].carBrand;
                let adminCarPass = values[i].carNmbOfPassengers;
                let adminCarTran = values[i].carTransmissionType;
                let adminCarType = values[i].carType;
                let adminCarColor = values[i].carColour;
                let adminCarFuel = values[i].carFuelType;

                $('#tblCarBody').append(`<tr><td>${adminCarId}</td><td>${adminCarReg}</td><td>${adminCarBrand}</td><td>${adminCarPass}</td><td>${adminCarTran}</td><td>${adminCarType}</td><td>${adminCarColor}</td><td>${adminCarFuel}</td></tr>`)
            }
        }
    });
}
//End Get All Car

//Start Car Update Section
$('#btnAdminCarUpdate').click(function () {
    updateCar();
});
function updateCar() {
    if (checkValidationAdminCar()) {
        let adminCarId = $('#adCarId').val();
        let adminCarBrand = $('#adCarBrand').val();
        let adminCarColor = $('#adCarColor').val();
        let adminCarType = $('#adCarType').val();
        let adminCarPass = $('#adCarPassengers').val();
        let adminCarTran = $('#adCarTransmission').val();
        let adminCarFuel = $('#adCarFuel').val();
        let adminCarExKm = $('#adCarExtraKm').val();
        let adminCarReg = $('#adCarRegistration').val();
        let adminCarDam = $('#adCarDamage').val();
        let adminCarDRate = $('#adCarDailyRate').val();
        let adminCarMRate = $('#adCarMonthlyRate').val();
        let adminCarMPrice = $('#adCarMillagePrice').val();
        let adminCarDuration = $('#adCarDuration').val();

        $.ajax({
            method: "PUT",
            url: carBaseUrl,
            contentType: "application/json",
            async: false,
            data: JSON.stringify(
                {
                    "carId": adminCarId,
                    "carBrand": adminCarBrand,
                    "carColour": adminCarColor,
                    "carType": adminCarType,
                    "carNmbOfPassengers": adminCarPass,
                    "carTransmissionType": adminCarTran,
                    "carFuelType": adminCarFuel,
                    "carPriceForExtraKM": adminCarExKm,
                    "carRegistrationNumber": adminCarReg,
                    "carLossDamageWaiver": adminCarDam,
                    "carDailyRate": adminCarDRate,
                    "carMonthlyRate": adminCarMRate,
                    "carFreeMillagePrice": adminCarMPrice,
                    "carFreeMillageDuration": adminCarDuration
                }
            ),
            success: function (data) {
                loadAllCars();
                clearCarFields();
                getLastCarId();
                getCarRegNo();
                alert("Car Successfully Updated");
                return true;
            },

            error: function (ob) {
                alert(ob.responseJSON.message);
            }
        });
    }
}
//End Car Update Section

//Start Delete Car Section
$('#btnAdminCarDelete').click(function () {
    let id = $("#adCarId").val();
    if (id != "") {
        $.ajax({
            method: "DELETE",
            url: carBaseUrl+"/" +id,
            async: true,
            success: function (response) {
                loadAllCars();
                getCarRegNo();
                getLastCarId();
                clearCarFields();
                alert("Car Successfully Deleted")
            },
            error: function (ob) {
                alert(ob.responseJSON.message);
            }
        });
    }

});
//End Delete Car Section

//Start Search Car Section
$("#btncarSearch").click(function (){
        $("#tblCarBody").empty();
        let id = $("#searchCar").val();
        if (id != "") {
            $.ajax({
                method: "get",
                url: carBaseUrl + "/" +id,
                async: true,
                dataType: 'json',
                success: function (response) {
                    var data = response.data;

                    $('#adCarId').val(data.carId);
                    $('#adCarBrand').val(data.carBrand);
                    $('#adCarColor').val( data.carColour);
                    $('#adCarType').val(data.carType);
                    $('#adCarPassengers').val(data.carNmbOfPassengers);
                    $('#adCarTransmission').val(data.carTransmissionType);
                    $('#adCarFuel').val(data.carFuelType);
                    $('#adCarExtraKm').val(data.carPriceForExtraKM);
                    $('#adCarRegistration').val(data.carRegistrationNumber);
                    $('#adCarDamage').val(data.carLossDamageWaiver);
                    $('#adCarDailyRate').val(data.carDailyRate);
                    $('#adCarMonthlyRate').val(data.carMonthlyRate);
                    $('#adCarMillagePrice').val(data.carFreeMillagePrice);
                    $('#adCarDuration').val(data.carFreeMillageDuration);

                    loadAllCars();
                }
            });
        } else {
        }


});
//End Search Car Section

//Start Clear Fields Section
$("#btnAdminCarClearAll").click(function (){
    clearCarFields();
});