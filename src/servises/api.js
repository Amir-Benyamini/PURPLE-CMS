class API {
  async fetchUser() {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
        "Access-Control-Allow-Origin": "*",
      },
    };
    const response = await fetch(`http://localhost:4000/user`, options);
    return response;
  }

  async updateUser(id, update) {
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        update,
      }),
    };
    const response = await fetch(
      `http://localhost:4000/user/update/${id}`,
      options
    );
    return response;
  }
}

module.exports = new API();
