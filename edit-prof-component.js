"use strict";

const editProfile = {
  template: `

  <form ng-submit="$ctrl.editProfile($ctrl.user)">
  <p>Please use the form below to update your profile</p>
    <p class="inputheads">Name</p>
    <input type="text" placeholder="name" ng-model="$ctrl.user.name">
    <p class="inputheads">Contact</p>
    <input type="text" placeholder="contact" ng-model="$ctrl.user.contact">
    <p class="inputheads">Bio</p>
    <textarea class="bio-update" type="text" ng-model="$ctrl.user.bio"></textarea>
    <button>Update</button>
  </form>
  `,
  controller: ["$location","ProfileService", function($location,ProfileService){
    const vm = this;
    vm.user = angular.copy(ProfileService.getUserProfile());
    vm.editProfile = (user) =>{
      ProfileService.setUserProfile(user);
      $location.path("/user-profile");
    }
  }]
}

angular
  .module("app")
  .component("editProfile", editProfile)
