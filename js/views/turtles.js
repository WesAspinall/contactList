function proccessData(data) {
  return data.map(function(item) {
    return `
      <li class='turtles-list-item'data-turtles-id="${item.objectId}">${item.FirstName}</li>
      <li class='turtles-list-item'data-turtles-id="${item.objectId}">${item.Weapon}</li>
      <li class='turtles-list-item'data-turtles-id="${item.objectId}">${item.Location}</li>
      <li class='turtles-list-item'data-turtles-id="${item.objectId}">${item.Email}</li>

    `
  }).join('');
}

function turtlesTemplate(data) {
  return `
    <h2>
    <ul>${proccessData(data)}</ul>
    </h2>
  `;
}

export default turtlesTemplate