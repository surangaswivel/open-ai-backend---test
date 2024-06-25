

const getMessage = async (req, res) => {
  return res.status(200).json(
    {
      message: "Success",
      data:process.env.MESSAGE
    }
  );
}
module.exports = { getMessage };
