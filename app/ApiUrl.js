import {NetInfo} from 'react-native';
import {getAccessToken,getTokenId} from './AsyncStorage';

export const LIVE_URL = 'https://www.bewakoof.com/v1/';
const STAGING_URL = 'https://staging.bewakoof.com/v1/';
const DEVEL = "https://devel.bewakoof.com/v1/";
const DEVEL3 = "https://devel3.bewakoof.com/v1/";
const SNEHAL_URL = 'http://192.168.1.136:3000/v1/';
const SUKHADA_URL = 'http://192.168.1.17:3000/v1/';
const LOCAL_URL = 'http://192.168.1.19:3000/v1/';
const UAT = "https://uatserv.bewakoof.com/v1/";
const NIKITA = "https://192.168.1.22:3000/";
const APIS_URL = "https://apis.bewakoof.com/";

export const urlToUse = LIVE_URL;

export const WEB_URL = 'https://www.bewakoof.com/';
export const STATICS = urlToUse+'statics?fields=new_home_box,mobile_slider,images,path,get_menu,contact_us,card_details,bottom_menu,return_policy,delivery,cancel_reasons_for_user,blog_path,payment_offers,ratings';
export const LOGIN = urlToUse+'authentication';
export const CATEGORY_URL = urlToUse +'categories/';
export const CONTACTUS_FORM = urlToUse +'contact_us/form';
export const COLLECTION_URL = urlToUse +'collections/';
export const CATEGORY_COLLECTION_PARAMETER ='?product_fields=id,name,description,url,mrp,price,rank,color_name,parent_category,child_category_url,sizes,display_image,original_image,additional_image,size_chart,status,product_description,fabric_detail,model_description,fit_description,delivery_and_return_policy,launched_at,parent_category_url,cod_statement,offer_statement,sort_by_new,product_type,tabular_description,in_stock,limited_edition,shipping_tat_daywise';
export const USER = urlToUse +'users';
export const EXPECTED_DELIVERY_ADDRESS  = urlToUse +'addresses?fields=expected_delivery_date';
export const USER_ADDRESS = urlToUse +'addresses';
export const USER_WISH_LIST = urlToUse+'wishlists'
export const BAG = urlToUse+'carts'
export const ORDERS = urlToUse+'orders?fields=address,is_prepaid,user,status,updated_at,order_products,cod_money,shipping_money,amount,total,discount,final_amount,product_sizes,view_status,cancellable,order_process,amount_deducted_from_wallet,cancellation_message,can_return,payable_amount,order_timeline.is_cancel_requested'
export const ORDERS_30 = urlToUse+'orders?fields=address,is_prepaid,user,status,updated_at,order_products,cod_money,shipping_money,amount,total,discount,final_amount,product_sizes,view_status,cancellable,order_process,amount_deducted_from_wallet,cancellation_message,can_return,payable_amount,latest_orders,order_timeline,is_cancel_requested'
export const ORDER_DETAIL = `${urlToUse}orders`
export const INSIDE_NOTIFICATION = urlToUse+'statics?fields=notification';
export const PRODUCTS = urlToUse+'products/';
export const WISHLIST = urlToUse+'wishlists/';
export const CHECKPIN = urlToUse + "courier_locations?filters=";
export const SENTOTP = `${urlToUse}authentication/generate_otp`
export const APPLY_COUPON = `${urlToUse}carts/apply_coupon`
export const FORGOT_PASSWORD = `${urlToUse}password/new?email`
export const WALLET = `${urlToUse}wallets`
export const ORDERS_RETURN = urlToUse+'orders/'
export const SEARCH=`${urlToUse}categories?filters`
export const CONTACT_US_RETRUN_ORDERS = `${urlToUse}orders?fields=user,status,order_products,cod_money,amount,total,product_sizes,view_status,cancellable,order_process,cancellation_message,can_return,payable_amount&limit=200`
export const CONTACT_US = `${urlToUse}contact_us`;
export const PIN_INFO = `${urlToUse}locations/`;
export const FANBOOK = `${urlToUse}fanbooks?fields=image,product&limit=1000`;
export const FANBOOK_IMAGE_POST = `${urlToUse}fanbooks`;
export const PRODUCT_PREFIX='www.bewakoof.com/p/';
export var token = "";
export const VALIDATE_PAYMENT_CARD = `${urlToUse}transactions/verify_card`;
export const GET_SAVED_CARDS = `${urlToUse}transactions/get_cards`;
export const CREATE_ORDER = `${urlToUse}orders`;
const GIFT_CARD_URL = 'gift-cards'
export const GIFT_CARD = `${urlToUse}categories/${GIFT_CARD_URL}`
export const APPLY_WALLET = `${urlToUse}/gift_cards/`
export var AccessToken ="";
export const API_TOKEN = 'ZjBkZTU5ZmY5MTIwMmY0MzE4ZjhmODRkMTA5YmU0YWU6NjRjOTUwMGItODVjZS00MmZhLWFlOGYtNTAyZmFlOWIzYmRj';
export const URL_TYPE = `${urlToUse}statics/urltype?url=`
export var jumpToCart = 0;
export const RETURN_ORDER_IMAGE_PATH = `https://images.bewakoof.com/web/`
getAccessToken(function  (error,accessKey) {
  if (error) {
    AccessToken = ''
  }else{
    AccessToken = accessKey;
  }
})

getTokenId(function  (error,result) {
    if (error) {
    token = ''
  }else{
    token = result;
  }
})

getJumpToCart(function  (error,result) {
    if (error) {
    jumpToCart = 0
  }else{
    jumpToCart = result;
  }
})

export function setAccessToken(key){
  AccessToken=key;
}

export function getAccessTokenStatic(){
  return AccessToken;
}

export function setTokenId(key){
  token=key;
}

export function getTokenIdStatic(){
  return token;
}

export function setJumpToCart(jump){
  jumpToCart=jump;
}

export function getJumpToCart(){
  return jumpToCart;
}

export function getCustomStaticUrl(params){
  return  urlToUse+'statics?fields='+params;
}

export function getGetRequestParams(accessToken){
  var getObject={
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'API-TOKEN': API_TOKEN,
      'Access-Token' : AccessToken,
      'TOKEN' : token,
    }
  }

  if (!token) {
    delete getObject.headers['TOKEN']
  }

  if (!AccessToken) {
    delete getObject.headers['Access-Token']
  }

  return getObject
}


export function getPostRequestParams(body,overrideMethod){
var requestBody = JSON.stringify(body);
  var getObject={
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'API-TOKEN': API_TOKEN,
      'Access-Token' : AccessToken,
      'TOKEN' : token,
      'X-Http-Method-Override': (overrideMethod || '')
    },
    body: requestBody
  }

  if (!token) {
    delete getObject.headers['TOKEN']
  }

  if (!AccessToken) {
    delete getObject.headers['Access-Token']
  }
  
  return getObject
}