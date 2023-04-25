import axios from "axios";

axios.defaults.baseURL = "https://6443dfb1466f7c2b4b5c3e78.mockapi.io/users";
const limitUsers = 3

export const fetchAllUsers = async () => {
  try {
    const response = await axios.get();
    return response.data
  } catch (e) {
    console.log(e.message)
  }
};

export const fetchUsers = async (page = 1) => {
    try {
      const response = await axios.get(`?page=${page}&limit=${limitUsers}`);
      return response.data
    } catch (e) {
      console.log(e.message)
    }
  };

  export const updUsers = async (id, following, followers) =>{
    try {
      const response = await axios.put(`${id}`, {following: following, followers: followers});
      return response.data
    } catch (e) {
      console.log(e.message)
    }
  };




