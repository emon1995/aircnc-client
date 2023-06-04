// bookings data post
export const addBookings = async (bookingsData) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/bookings`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(bookingsData),
  });

  const data = await response.json();
  return data;
};

// update bookings status patch
export const updateStatus = async (id, status) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/rooms/status/${id}`,
    {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status }),
    }
  );

  const data = await response.json();
  return data;
};

// get all bookings for a user by email
export const getBookings = async (email) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/bookings?email=${email}`,
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    }
  );

  const data = await response.json();
  return data;
};

// get all bookings for a host by email
export const getHostBookings = async (email) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/bookings/host?email=${email}`,
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    }
  );

  const data = await response.json();
  return data;
};

// delete bookings
export const deleteBookings = async (id) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/bookings/${id}`,
    {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    }
  );

  const data = await response.json();
  return data;
};
