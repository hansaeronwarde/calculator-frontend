import axios from "axios";

const baseUrl = process.env.REACT_APP_CALCULATOR_URL;

export const insertUser = async (os) => {
  try {
    const response = await axios.post(`${baseUrl}/v1/app/user`, { os: os });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const insertTransaction = async (user, transaction) => {
  try {
    const response = await axios.post(
      `${baseUrl}/v1/app/user/${user}/transaction`,
      {
        calculation: transaction,
      }
    );
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const getTransactions = async (user) => {
  try {
    const response = await axios.get(
      `${baseUrl}/v1/app/user/${user}/transaction`
    );
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const deleteTransactions = async (user) => {
  try {
    const response = await axios.delete(
      `${baseUrl}/v1/app/user/${user}/transaction`
    );
    return response;
  } catch (err) {
    console.log(err);
  }
};
