const root = document.querySelector('[data-practice-pilot]');
if (root) {
  const en = root.dataset.lang === 'en';
  const text = (es, english) => en ? english : es;
  const grid = root.querySelector('[data-grid-form]');
  const updateGrid = (columns, gap, announce = true) => {
    const output = root.querySelector('[data-grid-output]');
    output.style.gridTemplateColumns = `repeat(${columns}, minmax(0, 1fr))`;
    output.style.gap = `${gap}px`;
    root.querySelector('[data-grid-code]').textContent = `grid-template-columns: repeat(${columns}, minmax(0, 1fr)); gap: ${gap}px;`;
    root.querySelector('[data-grid-status]').textContent = !announce ? '' : columns === 3 && gap === 16
      ? text('Configuración del reto conseguida. ¿Por qué aparecen dos filas?', 'Challenge configuration reached. Why are there two rows?')
      : text('Vista actualizada. Compara las columnas y la separación con el reto.', 'Preview updated. Compare the columns and gap with the challenge.');
  };
  grid.addEventListener('submit', event => {
    event.preventDefault();
    if (!grid.reportValidity()) return;
    const values = new FormData(grid);
    updateGrid(Number(values.get('columns')), Number(values.get('gap')));
  });
  grid.addEventListener('reset', () => updateGrid(2, 8, false));
  const dom = root.querySelector('[data-dom-form]');
  const list = root.querySelector('[data-dom-output]');
  const domStatus = root.querySelector('[data-dom-status]');
  dom.addEventListener('submit', event => {
    event.preventDefault();
    const input = dom.elements.namedItem('topic');
    const value = input.value.trim();
    if (!value) { domStatus.textContent = text('Entrada vacía: no se añadió ningún elemento.', 'Empty input: no item was added.'); return; }
    if (list.children.length >= 20) { domStatus.textContent = text('Límite de 20 temas. Restablece la práctica para continuar.', '20-topic limit. Reset the exercise to continue.'); return; }
    const item = document.createElement('li');
    item.textContent = value;
    list.append(item);
    input.value = '';
    input.focus();
    const unique = new Set(Array.from(list.children, node => node.textContent.toLocaleLowerCase())).size;
    domStatus.textContent = unique >= 3
      ? text('Tres temas distintos registrados. Explica qué hizo append.', 'Three different topics recorded. Explain what append did.')
      : text('Tema añadido. Prueba también una entrada vacía.', 'Topic added. Try an empty input too.');
  });
  dom.addEventListener('reset', () => { list.replaceChildren(); domStatus.textContent = ''; });
  const formula = root.querySelector('[data-formula-form]');
  formula.addEventListener('submit', event => {
    event.preventDefault();
    if (!formula.reportValidity()) return;
    const values = new FormData(formula);
    const quantity = Number(values.get('quantity'));
    const price = Number(values.get('price'));
    const discount = Number(values.get('discount'));
    const total = quantity * price * (1 - discount / 100);
    root.querySelector('[data-formula-output]').textContent = total.toFixed(2);
    root.querySelector('[data-formula-status]').textContent = quantity === 4 && price === 25 && discount === 10
      ? text('Resultado esperado: 90. Explica por qué se divide C2 entre 100.', 'Expected result: 90. Explain why C2 is divided by 100.')
      : text('Resultado calculado. Cambia una sola entrada y compara.', 'Result calculated. Change one input and compare.');
  });
  formula.addEventListener('reset', () => {
    root.querySelector('[data-formula-output]').textContent = '50.00';
    root.querySelector('[data-formula-status]').textContent = '';
  });
}
