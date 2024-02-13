export const TableData = async (postUrl,method, data)  => {
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
export const checkToken = async (getUrl,method, data)  => {
  const options={
    method: method,
    headers: {
      'Authorization': 'Bearer '+data, 
    },
  }
  try {
    const response = await fetch(getUrl,options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
