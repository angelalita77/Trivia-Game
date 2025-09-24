export const globalErr =  (req, _res, next) => {
    console.log(`${req.method} - ${req.url} from ${req.ip}`);
    next();
}

export const log =  (err, req, res, next) => {
    res.json({ msg: `X Error - ${err.message}`});
};