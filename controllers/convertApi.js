//figure out the API URL.
const convertApi = (api) => {
  return api
    .split(" ")     // convert api string to array to mapping it
    .map((element) => {
      return String.fromCharCode(parseInt(element, 2));   //convert binary to decimal and then convert it to char using String.fromCharCode
    })
    .reverse()  // reverse the url because it's reversed
    .join("");  //convert api array to string
};
