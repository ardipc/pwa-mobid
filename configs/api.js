import axios from 'axios'
import {
  API_PROPINSI,
  API_KOTA,

  API_KATEGORI,
  API_MERCHANT,
  API_KONSULTASI,

  API_POSTS,
  API_POSTS_ONE,
  API_POSTS_CATEGORY,

  API_OTP_REQUEST,
  API_OTP_VALIDATE,

  API_MY_FAVORIT,
  API_TAGS,

  API_BOOKMARK,
  API_BOOKMARK_DEL,

  API_POSTS_TAGS,
  API_CATEGORIES,

  API_GET_PROFILE
} from './rest'

export async function userOTPRequest(nohp, via) {
  const json = {
    nohp: nohp,
    via: via
  }

  const res = await axios.post(API_OTP_REQUEST, json)
  return res.data
}

export async function userOTPValidate(nohp, otp) {
  const json = {
    nohp, otp
  }
  const res = await axios.post(API_OTP_VALIDATE, json)
  return res.data
}

export async function getPropinsi() {
  const res = await axios.get(API_PROPINSI)
  return res.data.result
}

export async function getKota(id) {
  const res = await axios.get(`${API_KOTA}/${id}`)
  return res.data.result
}

export async function getAllKategori() {
  const res = await axios.get(API_KATEGORI)
  const { result } = res.data
  return result
}

export async function getPostByTags(id) {
  const res = await axios.get(`${API_POSTS}&tags=${id}`)
  return res.data
}

export async function getTags() {
  const res = await axios.get(API_POSTS_TAGS)
  return res.data
}

export async function getAllMerchant(body) {
  const res = await axios.post(API_MERCHANT, body)
  return res.data
}

export async function getOneMerchant(id) {
  const res = await axios.get(`${API_MERCHANT}/${id}`)
  const { result } = res.data
  return result
}

export async function getAllKonsultasi(id = "0") {
  const res = await axios.post(API_KONSULTASI+"/"+id)
  const { result, metadata } = res.data
  return metadata.count > 0 ? result : []
}

export async function getLatestPosts() {
  const res = await axios.get(API_POSTS)
  return res.data
}

export async function getPostsByCategories(id) {
  const res = await axios.get(`${API_POSTS}&categories=${id}`)
  return res.data
}

export async function getOnePosts(id) {
  const res = await axios.get(`${API_POSTS_ONE}/${id}`)
  return res.data
}

export async function getPostTerkait(catId) {
  const res = await axios.get(`${API_POSTS_ONE}?categories=${catId}&page=1&per_page=4`)
  return res.data
}

export async function getAllKategoriPost() {
  const res = await axios.get(API_POSTS_CATEGORY+'?parent=0')
  return res.data
}

export async function getKategoriById(ids) {
  const temp = []
  for(var i=0; i<ids.length; i++) {
    const res = await axios.get(API_POSTS_CATEGORY+'/'+ids[i])
    if(!res.data.hasOwnProperty('code')) {
      temp.push(res.data.name)
    }
  }

  return temp
}

export async function getMyFavorit(kunci) {
  const options = {
    headers: {
      'X-ACCESS-TOKEN': kunci
    }
  }
  const res = await axios.get(API_MY_FAVORIT, options)
  return res.data.metadata.count > 0 ? res.data.result : []
}

export async function getAllTags(id) {
  const res = await axios.get(`${API_TAGS}/${id}`)
  return res.data
}

export async function addBookmark(token, id) {
  const options = {
    headers: {
      'X-ACCESS-TOKEN': token
    }
  }
  const res = await axios.get(`${API_BOOKMARK}/${id}`, options)
  return res.data
}

export async function delBookmark(token, id) {
  const options = {
    headers: {
      'X-ACCESS-TOKEN': token
    }
  }
  const res = await axios.get(`${API_BOOKMARK_DEL}/${id}`, options)
  return res.data
}

export async function updateProfile(token, form) {
  const options = {
    headers: {
      'X-ACCESS-TOKEN': token
    }
  }
  const res = await axios.post(`${API_GET_PROFILE}/update`, form, options)
  return res.data
}
