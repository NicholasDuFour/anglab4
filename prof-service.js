"use strict";

function ProfileService () {
  let userInfo = {
    name: "Grant",
    contact: "grant@grandcircus.co",
    bio: "I am pretty cool. I a great job.  I am pretty ok at AngularJS.  Catch me on that slack!"
  }

  const getUserProfile = () => {
    return userInfo
  }

  const setUserProfile = (user) => {
    userInfo = user
  }

  return {
    getUserProfile,
    setUserProfile
  }
}

angular
  .module("app")
  .factory("ProfileService", ProfileService)
