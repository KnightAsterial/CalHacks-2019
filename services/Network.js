export function getUser(userID){
  return new Promise(function(resolve, reject){
    testEvents = [
      {name: "CodeBase Rager", numBids: 1, color: "#65BFA4", status: "active"},
      {name: "TDX Throwdown", numBids: 1, color: "#D1ADFF", status: "active"},
      {name: "CalHacks Closing Ceremony", numBids: 60, color: "#FFB26B", status: "inactive"},
      {name: "Math Club Hangout", numBids: 72, color: "#FFB26B", status: "inactive"},
      {name: "Tech x Trash", numBids: 3, color: "#F36464", status: "inactive"}
    ]
    resolve({name: "Parth Shah", events: testEvents});
  });
}