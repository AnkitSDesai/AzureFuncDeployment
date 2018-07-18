module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if (req.query.number) {
        let sq = req.query.number * req.query.number;

        context.res = {
            //updating comment lines
            body: {
                square: sq,
                num: req.query.number

            }

        };
    } else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
    }
    context.done();
};