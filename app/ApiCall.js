export
const getApiData=(header ,url ,callback)=>{
  let jsonStatus,jsonError,jsonResponse;
  try{
    fetch(url, header)
    .then((response) => {
      jsonStatus=response
      return response.json();
      })
    .catch((error) => {
      jsonError=error
    })
    .then((response) => {
      jsonResponse=response
      callback(null,jsonStatus,jsonError,jsonResponse)
    });
  }catch (apiError) {
    callback(apiError,jsonStatus,jsonError,jsonResponse)
  }
}
  