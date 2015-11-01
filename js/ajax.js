// $(document).ready(function() {
//   $('#ButtonSubmit').on('click', function(e) {
//     e.preventDefault();
//     postToGoogleSpreadsheet();
//   });
// });


$(document).ready(function() {

  selectSchedule();
  $('#ButtonSubmit').on('click', function() {
    var email         = $('#email').val();
    var fullName      = $('#full-name').val();
    var address       = $('#address').val();
    var city          = $('#city').val();
    var phoneNumber   = $('#phone-number').val();
    var deliveryDate  = $('#delivery-date').val();
    var schedule      = $('.schedule button.btn-active').html();

    $.ajax({
      url: "https://docs.google.com/forms/d/1sGL92SNy3ZgXrrCC4_Frx5LohgCTin8ilPc6hA-R_iU/formResponse",
      data: {
        "entry_753376097": fullName,
        "entry_1295862764": email,
        "entry_821287296": address,
        "entry_264134378": city,
        "entry_1812072116": phoneNumber,
        "entry_1967276050": deliveryDate,
        "entry_914462665": schedule
      },
      type: "POST",
      dataType: "xml",
      statusCode: {
        0: function () {
        },
        200: function () {
        }
      }
    })
  });
});


// Utilities //

function selectSchedule() {
  $('.schedule button').on('click', function(e) {
    $('.schedule button').removeClass('btn-active');
    e.preventDefault();
    $(this).addClass('btn-active');
  });
}
