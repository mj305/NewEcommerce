import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";

const getLoginUrl = (
  customerId,
  storeHash,
  storeUrl,
  clientId,
  clientSecret
) => {
  const dateCreated = Math.round(new Date().getTime() / 1000);
  const payload = {
    iss: clientId,
    iat: dateCreated,
    jti: uuidv4(),
    operation: "customer_login",
    store_hash: storeHash,
    customer_id: customerId,
  };
  let token = jwt.sign(payload, clientSecret, { algorithm: "HS256" });
  return `${storeUrl}/login/token/${token}`;
};

const clientId = "mo78lgyuf4r77ko38g7ve7eh2abhwei";
const clientSecret =
  "8d2dcbcde0e2a59be703950b34fd8c3ddb857d8f60f0f5d16e495f9d05e836a3";
const customerId = "fdjdfd";
const storeHash = "m48amdwp20";
const storeUrl = "https://test7258.mybigcommerce.com";
/* const storeUrl = "https://api.bigcommerce.com/stores/m48amdwp20/v3/";
 */

const loginUrl = getLoginUrl(
  customerId,
  storeHash,
  storeUrl,
  clientId,
  clientSecret
);
console.log(loginUrl);
