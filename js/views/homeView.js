function processData(data) {
  return data.map(function(item){
    return `
      <li class="turtle-list-item" data-turtle-id="${item.objectId}">
        <img class="homePic" src ="${item.Picture}">
        <div class="name">${item.FirstName}</div>
      </li>
    `;
  }).join('');
}

export default function(data) {
  return `
    <div class="turtle-list">
      <h1>Ninjas</h1>
      <div>
        <button class="addNew">Add New Ninja</button>
      </div>
      <ul>${processData(data)}</ul>
    </div>
  `;
}