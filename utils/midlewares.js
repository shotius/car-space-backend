const errorHandler = (error, request, response, next) => {
  console.log(error.message);

  if (error.name === "CastError") {
    return response.status(400).send({ error: "malformed Id" });
  } else if (error.name === "ValidationError") {
    return response.status(400).send({ error: error.message });
  }
  next(error);
};

const unknownEndpoint = (request, response) => {
    response.status(404).send({error: "unknow endpoint"})
}

module.exports = {
    errorHandler,
    unknownEndpoint
}