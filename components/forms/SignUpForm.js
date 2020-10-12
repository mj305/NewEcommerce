import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

const SignUpForm = () => {
  const { register, handleSubmit, errors } = useForm();

  const signUpUser = async (data) => {
    try {
      const result = await axios.post(
        "https://api.bigcommerce.com/stores/m48amdwp20/v3/customers",
        {
          data,
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
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = (data) => {
    const signUpData = [
      {
        email: data.email,
        first_name: data.firstName,
        last_name: data.lastName,
        phone: data.number,

        addresses: [
          {
            first_name: data.firstName,
            last_name: data.lastName,
            address1: data.address1,
            address2: data.address2,
            city: data.city,
            state_or_province: data.state,
            postal_code: data.zipcode,
            country_code: data.country,
            phone: data.number,
          },
        ],
        attributes: [
          {
            attribute_id: 1,
            attribute_value: "string",
          },
        ],
        authentication: {
          force_password_reset: true,
          new_password: data.password,
        },
        accepts_product_review_abandoned_cart_emails: true,
        store_credit_amounts: [
          {
            amount: 123,
          },
        ],
      },
    ];
    signUpUser(signUpData);
  };

  if (errors) {
    console.log("Error: ", errors);
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="First Name"
          name="firstName"
          ref={register({ required: true })}
        />
        <input
          name="lastName"
          placeholder="Last Name"
          ref={register({ required: true })}
        />
        <input
          placeholder="Commpany"
          name="company"
          ref={register({ required: true })}
        />
        <input
          placeholder="email"
          name="email"
          ref={register({ required: true })}
        />
        <input
          placeholder="Phone Number"
          name="number"
          ref={register({ required: true })}
        />
        <input
          placeholder="Address 1"
          name="address1"
          ref={register({ required: true })}
        />{" "}
        <input
          placeholder="Address 2"
          name="address2"
          ref={register({ required: true })}
        />
        <input
          placeholder="City"
          name="city"
          ref={register({ required: true })}
        />
        <input
          placeholder="Country"
          name="country"
          ref={register({ required: true })}
        />
        <input
          placeholder="State"
          name="state"
          ref={register({ required: true })}
        />
        <input
          placeholder="Zip Code"
          name="zipcode"
          ref={register({ required: true })}
        />
        <input
          placeholder="User Name"
          name="username"
          ref={register({ required: true })}
        />
        <input
          placeholder="Password"
          name="password"
          ref={register({ required: true })}
        />
        <input type="submit" />
      </form>
    </>
  );
};

export default SignUpForm;
