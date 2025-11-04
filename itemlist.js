const addBtn = document.getElementById('addBtn');
const removeBtn = document.getElementById('removeBtn');
const clearBtn = document.getElementById('clearBtn');
const listArea = document.getElementById('listArea');
const input = document.getElementById('itemInput');


addBtn.addEventListener('click', function() {
  const text = input.value.trim();
  if (text === "") return; // لو فاضي، ما يعملش حاجة

  const p = document.createElement('p');
  p.textContent = text;
  listArea.appendChild(p); // يضيف العنصر تحت
  input.value = ""; // يمسح الـ input
});


removeBtn.addEventListener('click', function() {
  const paragraphs = listArea.getElementsByTagName('p');
  if (paragraphs.length > 0) {
    listArea.removeChild(paragraphs[paragraphs.length - 1]);
  }
});


clearBtn.addEventListener('click', function() {
  listArea.innerHTML = "";
});
