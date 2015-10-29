export default function(data){
  return `
      <h1>${data.FirstName}</h1>
      <li>${data.Weapon}</li>
      <li>${data.Location}</li>
      <li>${data.Email}</li> `;
}