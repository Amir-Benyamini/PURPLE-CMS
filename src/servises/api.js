const baseUrl = "http://localhost:4000";

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
    const response = await fetch(`${baseUrl}/user`, options);
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
    const response = await fetch(`${baseUrl}/user/update/${id}`, options);
    return response;
  }

  async updateUserImage(id, imageFile) {
    const data = new FormData();
    data.append("userImage", imageFile);
    const options = {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: data,
    };
    const response = await fetch(`${baseUrl}/user/updateImage/${id}`, options);
    return response;
  }
}

module.exports = new API();
