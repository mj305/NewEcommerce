import request, { post } from "request";

const handler = (req, res) => {
  const options = {
    uri: "https://api.bigcommerce.com/stores/m48amdwp20/v3/customers",
    headers: {
      "Content-Type": "application/json",
      "X-Auth-Client": "4b90lbc8d76whmbmtttdxx6zqyhpohw",
      "X-Auth-Token": "ckuij76tgurkmapz1gspgbihq7doxd9",
    },
    method: "POST",
    json: req.body.data,
  };

  request(options, (error, response, body) => {
    if (error) {
      res.end(JSON.stringify({ name: "ERROR" }));
    } else {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(body));
    }
  });
};

export default handler;
