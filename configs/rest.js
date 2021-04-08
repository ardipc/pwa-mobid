const BASE                          = `https://ms.ved.carsworld.id`
const VERSION                       = `2`

const API_BASE                      = `${BASE}/${VERSION}`

export const API_PROPINSI           = `${API_BASE}/p/wilayah/propinsi`
export const API_KOTA               = `${API_BASE}/p/wilayah/kota`

export const API_KATEGORI           = `${API_BASE}/p/merchant/category`
export const API_MERCHANT           = `${API_BASE}/p/merchant`
export const API_KONSULTASI         = `${API_BASE}/p/konsultasi/0`

export const API_GET_PROFILE        = `${API_BASE}/p/user`

export const API_POSTS              = `https://carsworld.co.id/wp-json/wp/v2/posts?page=1&per_page=5`
export const API_POSTS_ONE          = `https://carsworld.co.id/wp-json/wp/v2/posts`
export const API_POSTS_CATEGORY     = `https://carsworld.co.id/wp-json/wp/v2/categories?parent=0`

export const API_OTP_REQUEST        = `${API_BASE}/p/user/otpRequest`
export const API_OTP_VALIDATE       = `${API_BASE}/p/user/otpValidate`

export const API_MY_FAVORIT         = `${API_BASE}/p/merchant/myFav`
