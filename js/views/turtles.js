function proccessData(data) {
  return data.map(function(item) {
    return `
      <div class ="turtle">
      <li class='turtles-list-item'data-turtles-id="${item.objectId}">
      <span>${item.FirstName}</span>
      </li>
      </div>
     `;
  }).join('');
  
}

export default function(data) {
    return
    `<div class="ninja-list">
      <h1>Ninja Turtles</h1>
      <ul>${processData(data)}</ul>
    </div>
  `;

}