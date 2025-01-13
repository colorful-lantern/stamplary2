document.addEventListener('DOMContentLoaded', function() {
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      var tooltip = new bootstrap.Tooltip(tooltipTriggerEl);
      tooltip.show();
      return tooltip;
  });
});