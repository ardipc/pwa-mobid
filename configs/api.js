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

  API_POSTS_TAGS
} from './rest'

export async function userOTPRequest(nohp) {
  const json = {
    nohp: nohp,
    via: 'sms'
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

export async function getAllMerchant() {
  const res = await axios.post(API_MERCHANT)
  const { result } = res.data
  return result
}

export async function getOneMerchant(id) {
  const res = await axios.get(`${API_MERCHANT}/${id}`)
  const { result } = res.data
  return result
}

export async function getAllKonsultasi() {
  const res = await axios.post(API_KONSULTASI)
  const { result } = res.data
  return result
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

export async function getAllKategoriPost() {
  const res = await axios.get(API_POSTS_CATEGORY)
  return res.data
}

export async function getMyFavorit(kunci) {
  const options = {
    headers: {
      'X-ACCESS-TOKEN': kunci
    }
  }
  const res = await axios.get(API_MY_FAVORIT, options)
  return res.data.result
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
