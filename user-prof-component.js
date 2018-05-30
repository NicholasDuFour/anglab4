"use strict";

const userProfile = {
  template: `
  <div class="container">
    <img src="grant.png" alt="Grant Chirpus in a tshirt and cheerful">
    <p class = "name"> {{ $ctrl.userInfo.name }}</p>
    <p class = "contact"> {{ $ctrl.userInfo.contact }}</p>
    <p class = "bio"> {{ $ctrl.userInfo.bio }}</p>
    <button><a href="#!/edit-profile">Edit</a></button>
  </div>
  `,

  controller: ["ProfileService", function(ProfileService){
    const vm = this;
    vm.userInfo = ProfileService.getUserProfile();

  }]
}

angular
  .module("app")
  .component("userProfile", userProfile)
