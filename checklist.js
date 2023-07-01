 // Adiciona um novo item à lista
 function addItem() {
    const input = document.getElementById('new-item-input');
    const text = input.value.trim();
    if (text !== '') {
      const item = createItem(text);
      document.getElementById('checklist').appendChild(item);
      input.value = '';
    }
  }

  // Cria um novo item da lista
  function createItem(text) {
    const item = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    const label = document.createElement('label');
    label.textContent = text;
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Excluir';
    const editButton = document.createElement('button');
    editButton.textContent = 'Editar';

    checkbox.addEventListener('change', function() {
      if (checkbox.checked) {
        label.classList.add('done');
      } else {
        label.classList.remove('done');
      }
    });

    deleteButton.addEventListener('click', function() {
      item.remove();
    });

    editButton.addEventListener('click', function() {
      const newText = prompt('Digite o novo texto:');
      if (newText !== null && newText.trim() !== '') {
        label.textContent = newText;
      }
    });

    item.appendChild(checkbox);
    item.appendChild(label);
    item.appendChild(deleteButton);
    item.appendChild(editButton);

    return item;
  }

  // Apaga todos os itens da lista
  function clearAll() {
    const checklist = document.getElementById('checklist');
    while (checklist.firstChild) {
      checklist.firstChild.remove();
    }
  }

  // Adiciona o evento de clique para adicionar um novo item
  document.getElementById('add-item-button').addEventListener('click', addItem);

  // Adiciona o evento de pressionar Enter para adicionar um novo item
  document.getElementById('new-item-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      addItem();
      event.preventDefault();
    }
  });

  // Adiciona o evento de clique para apagar todos os itens
  document.getElementById('clear-all-button').addEventListener('click', clearAll);

  // Adiciona o evento de pressionar Enter para adicionar um novo item
document.getElementById('new-item-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      addItem();
      event.preventDefault();
    }
  });