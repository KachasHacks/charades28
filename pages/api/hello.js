// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import config from './config'
import videoToken from './tokens';

export default (req, res) => {
  const identity = req.body.identity
  const room = req.body.room
  const token = videoToken(identity, room, config);
  res.statusCode = 200
  res.json({ token: token.toJwt() })
}
