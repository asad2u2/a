// International telephone format
// get the country data from the plugin
$(document).ready(function() {
var countryData = window.intlTelInputGlobals.getCountryData(),
    input = document.querySelector("#country_field");
  
// init plugin
var iti = window.intlTelInput(input,{
  initialCountry: "AE",
  preferredCountries: ["AE"],
  hiddenInput:false,
  showSelectedDialCode: true,
  separateDialCode: true,
  utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js" // just for formatting/placeholders etc
});

//Append Value To Phone Field
input.addEventListener("countrychange", function() {
  var countryData = iti.getSelectedCountryData();
  var countryName = countryData.name.replace(/ *\([^)]*\) */g, '');
  var countryCode = countryName + ": 00" + countryData.dialCode;
  $("#country_name_code").val(countryCode);
  iti.setNumber("+" + countryData.dialCode);
});

var countryData = iti.getSelectedCountryData();
var countryName = countryData.name.replace(/ *\([^)]*\) */g, '');
var countryCode = countryName + ": 00" + countryData.dialCode;
$("#country_name_code").val(countryCode);
iti.setNumber("+" + countryData.dialCode);
  $('#country_field').focus();
});
