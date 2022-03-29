// () that throws an error
module.exports = 
{
    errorHandler:(err) =>
    {
        throw new Error(err)
    }
}