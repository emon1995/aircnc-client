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
