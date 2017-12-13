$( document ).ready(function() {
  // Flash messages
  $(".message .close").on("click", function() {
    $(this)
      .closest(".message")
      .transition("fade");
  });

  // Date picker
  $(".date-picker").datepicker();

  // Modals
  var updateProfileButton = "#updateProfileButton";
  var deleteThingButton = "#deleteThingButton";
  var deleteUseDateButton = ".trash";
  openModal(updateProfileButton);
  openModal(deleteThingButton);

  // Delete use date modal
  $(deleteUseDateButton).on("click", function() {
    var date = $(this).siblings("span").text();
    var index = $(this).attr("id");
    $("#thisDate").text(date);
    $("#usageDatesIndex").val(index);
    openModal(deleteUseDateButton);
  })

  // Update per-use cost display based on user input
  $("#newPurchasePrice").on("keyup", function() {
    var input = $("#newPurchasePrice").val();
    var divisor = $("#useCount").val();
    $("#resultCostPerUse").val(parseFloat(updateCostPerUse(input, divisor)).toFixed(2));
  })
});

// Calculate per-use Cost
function updateCostPerUse(purchasePrice, useCount) {
  var costPerUse = purchasePrice / useCount;
  return costPerUse;
}

function openModal(buttonId) {
  $(buttonId).on("click", function() {
    $(".ui.tiny.modal")
      .modal("show");
  });
}
