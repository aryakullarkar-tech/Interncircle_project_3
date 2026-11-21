(function () {
  'use strict';

  var switchBtn = document.getElementById('billing-switch');
  var labelMonthly = document.getElementById('label-monthly');
  var labelYearly = document.getElementById('label-yearly');
  var amounts = document.querySelectorAll('.amount');
  var periods = document.querySelectorAll('.period');
  var notes = document.querySelectorAll('.billed-note');

  var isYearly = false;

  // Show the price for the chosen billing cycle.
  // Yearly price is shown per month (yearly total / 12, with 20% off).
  function applyBilling() {
    amounts.forEach(function (el) {
      var monthly = Number(el.dataset.monthly);
      var yearlyTotal = Number(el.dataset.yearly);
      var value = isYearly ? Math.round(yearlyTotal / 12) : monthly;

      el.classList.add('is-changing');
      setTimeout(function () {
        el.textContent = value;
        el.classList.remove('is-changing');
      }, 150);
    });

    periods.forEach(function (el) { el.textContent = '/month'; });

    notes.forEach(function (el) {
      el.textContent = isYearly ? el.dataset.yearly : el.dataset.monthly;
    });

    switchBtn.classList.toggle('is-yearly', isYearly);
    switchBtn.setAttribute('aria-checked', String(isYearly));
    labelMonthly.classList.toggle('is-active', !isYearly);
    labelYearly.classList.toggle('is-active', isYearly);
  }

  switchBtn.addEventListener('click', function () {
    isYearly = !isYearly;
    applyBilling();
  });

  // Clicking the text labels also switches the billing cycle.
  labelMonthly.addEventListener('click', function () {
    isYearly = false;
    applyBilling();
  });

  labelYearly.addEventListener('click', function () {
    isYearly = true;
    applyBilling();
  });

  applyBilling();
})();
