export default function(data) {
  return `
    <div class="turtle">
      <button class="back-button" data-to="">
        <i class="fa fa-arrow-left"></i>
      </button>
      <div class="picture">
        <img src="${data.Picture}">
      </div>
      <h1>${data.FirstName}</h1>
      <p>Weapon: ${data.Weapon}
      <p>Location: ${data.Location}</p>
      <p>Email: ${data.Email}</p>
    </div>
  `;
}