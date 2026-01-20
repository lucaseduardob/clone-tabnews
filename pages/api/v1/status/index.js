function status(request, response) {
  response.status(200).json({ value: "Deu certo" });
}

export default status;
