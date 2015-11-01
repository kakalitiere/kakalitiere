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

    });
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
