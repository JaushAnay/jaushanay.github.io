// Project filter. Without JavaScript, every project simply stays visible.
(function () {
  var group = document.querySelector('.filters');
  if (!group) return;
  var buttons = group.querySelectorAll('button');
  var cards = document.querySelectorAll('.cards-all .card');
  var status = document.querySelector('.filter-status');
  group.hidden = false;

  function apply(id) {
    var shown = 0;
    buttons.forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.dataset.filter === id));
    });
    cards.forEach(function (c) {
      var match = id === 'all' || c.dataset.tracks.split(' ').indexOf(id) !== -1;
      c.hidden = !match;
      if (match) shown++;
    });
    if (status) status.textContent = 'Showing ' + shown + ' project' + (shown === 1 ? '' : 's');
  }

  buttons.forEach(function (b) {
    b.addEventListener('click', function () {
      var id = b.dataset.filter;
      apply(id);
      history.replaceState(null, '', id === 'all' ? location.pathname : '#' + id);
    });
  });

  var start = location.hash.slice(1);
  var known = Array.prototype.some.call(buttons, function (b) { return b.dataset.filter === start; });
  apply(known ? start : 'all');
})();
