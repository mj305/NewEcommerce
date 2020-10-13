import axios from "axios";

const handler = async (req, res) => {
  /* console.log(data); */
  try {
    const result = await axios.post(
      "https://api.bigcommerce.com/stores/m48amdwp20/v3/customers",
      {
        data: req.body.data.data,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "X-Auth-Client": "4b90lbc8d76whmbmtttdxx6zqyhpohw",
          "X-Auth-Token": "ckuij76tgurkmapz1gspgbihq7doxd9",
        },
      }
    );
    console.log(result);

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ name: "SUCCESS" }));
  } catch (error) {
    console.log("Error: ", error);
    res.end(JSON.stringify({ name: "ERROR" }));
  }
};

export default handler;
