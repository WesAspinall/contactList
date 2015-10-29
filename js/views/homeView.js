function proccessData(data) {
  return data.map(function(item) {
    return `
      <li class='turtle-list-item'data-turtle-id="${item.objectId}">
      <span>${item.FirstName}</span>
      </li>
     `;
  }).join('');
  
}

export default function(data) {
    return
    `<div class="turtle_list">
      <h1>Ninja Turtles</h1>
      <ul>${processData(data)}</ul>
    </div>
  `;

}