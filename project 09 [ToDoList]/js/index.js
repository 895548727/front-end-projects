var dones = [];
var undones = [];
var nu = 0, nd = 0, x = 0;
var undone_list = document.querySelector('#undone ul');
var done_list = document.querySelector('#done ul');
var input = document.querySelector('.input input');
var submit = document.querySelector('.input button');
var nums = document.getElementsByClassName('number');
var clearAll = document.querySelector('.clear button');
window.onkeypress = function (e) {
  if (input.value != '' && e.keyCode == 13) {
    submit.click();
  }
}
submit.addEventListener('click', (function () {
  var li = encapsule(input.value);
  input.value = '';
  update(li);
}));
undone_list.addEventListener('click', function (e) {
  if (e.target.tagName.toLowerCase() == 'input') {
    finish(e.target.parentNode.dataset.index);
    e.target.disabled = 'true';
  } else if (e.target.tagName.toLowerCase() == 'span') {
    e.target.contentEditable = true;
  } else if (e.target.className == 'delete') {
    if (e.target.parentNode.parentNode.parentNode.id == 'undone') {
      dele(e.target.parentNode.dataset.index, undones);
    } else {
      dele(e.target.parentNode.dataset.index, dones);
    }
  }
})
done_list.addEventListener('click', function (e) {
  if (e.target.tagName.toLowerCase() == 'span') {
    e.target.contentEditable = true;
  } else if (e.target.className == 'delete') {
    if (e.target.parentNode.parentNode.parentNode.id == 'undone') {
      dele(e.target.parentNode.dataset.index, undones);
    } else {
      dele(e.target.parentNode.dataset.index, dones);
    }
  }
})
clearAll.onclick = reset;
function encapsule(str) {
  var li = document.createElement('li');
  var checkbox = document.createElement('input');
  var span = document.createElement('span');
  var del = document.createElement('div');
  li.dataset.index = x++;
  checkbox.type = 'checkbox';
  span.innerText = str;
  del.classList.add('delete');
  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(del);
  return li;
}
function init() { }
function update(li) {
  undones.unshift(li);
  render(undones, dones);
}
function render(l1, l2) {
  undone_list.innerHTML = "";
  done_list.innerHTML = '';
  if (l1 instanceof Array && l2 instanceof Array) {
    for (var i = 0; i < l1.length; i++) {
      undone_list.appendChild(l1[i]);
    }
    for (var i = 0; i < l2.length; i++) {
      done_list.appendChild(l2[i]);
    }
  }
  nu = undones.length;
  nd = dones.length;
  nums[0].innerText = nu;
  nums[1].innerText = nd;
}
function dele(n, l) {
  var i;
  for (i = 0; i < l.length; i++) {
    if (l[i].dataset.index == n)
      break;
  }
  l.splice(i, 1);
  render(undones, dones);
}
function finish(n) {
  var i;
  for (i = 0; i < undones.length; i++) {
    if (undones[i].dataset.index == n)
      break;
  }
  dones.unshift(undones.splice(i, 1)[0]);
  render(undones, dones);
}
function reset() {
  undones = [];
  dones = [];
  x = 0;
  render(undones, dones);
}