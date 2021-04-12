import fetchJson from '../../lib/fetchJson'
import withSession from '../../lib/session'

import { userOTPValidate } from '../../configs/api'

export default withSession(async (req, res) => {
  const { nohp, otp } = await req.body
  const { success, code, message, metadata, result } = await userOTPValidate(nohp, otp)

  if(success) {
    const user = { isLoggedIn: true, success, code, message, metadata, result }
    req.session.set('user', user)
    await req.session.save()
    res.json(user)
  }
  else {
    res.json({ success, code, message })
  }

})
