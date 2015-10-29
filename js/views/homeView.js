function processData(data) {
  return data.map(function(item){
    return `
      <li class="turtle-list-item" data-turtle-id="${item.objectId}">
        <span>${item.FirstName}</span>
      </li>
    `;
  }).join('');
}

export default function(data) {
  return `
    <div class="turtle-list">
      <h1>Ninjas</h1>
      <ul>${processData(data)}</ul>
    </div>
  `;
}