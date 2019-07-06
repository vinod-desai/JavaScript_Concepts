let user = {
  name: "Vinod Desai",
  phone: [8095771525, 8105253505],
  address: {
    personal: {
      city: "Koppal",
      state: "Karnataka",
      area: "Yelburga"
    },
    office: {
      city: "Bengaluru",
      area: {
        landmark: "Whitefield"
      }
    }
  },
  job: "Software Developer"
};
let recursion = (obj, parent) => {
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      // console.log(typeof obj[key] + " " + key);
      recursion(obj[key], parent + "_" + key);
    } else {
      finalObj[parent + "_" + key] = obj[key];
      arr.push(obj[key]);
    }
    // console.log(typeof obj[key] + " " + key + " " + finalObj);
  }
};

let finalObj = {};
let arr = [];
recursion(user, "user", finalObj);

console.log(finalObj);
// console.log(arr);
