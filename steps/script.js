//Go To Step 2
$(document).on('click', '.goToStepTwo', function(event) {
  //Desktop
  $('#stepTwo')
    .removeClass('deactive closed')
    .addClass('active open');
  $('#stepTwoContent')
    .addClass('show')
    .removeClass('deactive__content closed hide')
    .addClass('active__content');
  $('html, body').animate(
    {
      scrollTop: $('#stepTwo').offset().top
    },
    400
  );
  //Mobile
  $('#stepOne, #stepOneContent, .stepOneMobile')
    .addClass('mobileNotActive')
    .removeClass('mobileIsActive');
  $('#stepTwo,#stepTwoContent, .stepTwoMobile').addClass('mobileIsActive');
  return false;

});
//Go To Step Three
$(document).on('click', '.goToStepThree', function(event) {
  $('#stepThree')
    .removeClass('deactive closed')
    .addClass('active open');
  $('#stepThreeContent')
    .addClass('show')
    .removeClass('deactive__content closed hide')
    .addClass('active__content');
  $('html, body').animate(
    {
      scrollTop: $('#stepThree').offset().top
    },
    400
  );
  //Mobile
  $('#stepTwo, #stepTwoContent, .stepTwoMobile')
    .addClass('mobileNotActive')
    .removeClass('mobileIsActive');
  $('#stepThree,#stepThreeContent, .stepThreeMobile').addClass('mobileIsActive');
  event.preventDefault();
});
//

//Click header to show and hide content
$(document).on('click', '.active.open', function(event) {
  $(this)
    .closest('div')
    .next('div')
    .addClass('hide')
    .removeClass('show');
  $(this)
    .addClass('closed')
    .removeClass('open');
  event.preventDefault();
});

$(document).on('click', '.active.closed', function(event) {
  $(this)
    .closest('div')
    .next('div')
    .addClass('show')
    .removeClass('hide');
  $(this)
    .addClass('open')
    .removeClass('closed');
  event.preventDefault();
});

//Mobile click step and see content
$(document).on('click', '.stepTwoMobile', function(event) { 
  //hide step 1 and 3
  //Desktop
  $('#stepTwo')
    .removeClass('deactive closed')
    .addClass('active open');
  $('#stepTwoContent')
    .addClass('show')
    .removeClass('deactive__content closed hide')
    .addClass('active__content');
  $('html, body').animate(
    {
      scrollTop: $('#stepTwo').offset().top
    },
    400
  );
  //Mobile
  $('#stepOne, #stepOneContent, .stepOneMobile, #stepThree, #stepThreeContent, .stepThreeMobile')
    .addClass('mobileNotActive')
    .removeClass('mobileIsActive');
  //show step 2
  $('#stepTwo,#stepTwoContent, .stepTwoMobile').addClass('mobileIsActive');
  return false;
  event.preventDefault();
});