import { TableDataInput } from "../Types";
const TableData = async (postUrl,method, data)  => {
  const options={
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: data ? JSON.stringify(data) : null,
  }
  try {
    const response = await fetch(postUrl,options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
export default TableData
