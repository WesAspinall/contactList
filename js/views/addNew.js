export default function(data) {
  return `
      <button class="back-button" data-to="">
        <i class="fa fa-arrow-left"></i>
      </button>

<div class="addNewForm">

<form>
    <div>
        <label for="name">Name:</label>
        <input type="text" id="FirstName" />
    </div>
    <div>
        <label for="weapon">Weapon:</label>
        <input type="text" id="Weapon"/>
    </div>
    <div>
        <label for="mail">E-mail:</label>
        <input type="email" id="Email" />
    </div>
    <div>
        <label for="picUrl">Picture URL:</label>
        <input type="text" id="picUrl"/>
    </div>
    <div>
        <label for="location">Location:</label>
        <input type="text" id="Location"/>
    </div>
    <br>
    <button class="submit">Submit New Ninja</button>

</form>
</div>    
  `;
}