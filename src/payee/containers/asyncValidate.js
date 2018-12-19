import axios from "axios";

const asyncValidate = (values /*, dispatch, props, blurredField*/) => {
  let url = "external/api/asyncvalidatenpi.json";
  return axios.get(url).then(response => {
    console.log(response);
    if (response.status === 200 && response.data.isValid) {
      let error = {
        npis: response.data.message
      };
      throw error;
    }
  });

  /*sleep(1000) // simulate server latency
    .then(() => {
      console.log("**************   async validating", values.npis);
      if (["2223334445"].includes("2223334445")) {
        throw { npis: "NPI is not valid" };
      }
    });*/
};

export default asyncValidate;
