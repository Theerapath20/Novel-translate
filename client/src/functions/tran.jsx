import axios from 'axios'

export const tran = async(data) => {
  return await axios.post("http://localhost:5000/api/tran",data);
}
