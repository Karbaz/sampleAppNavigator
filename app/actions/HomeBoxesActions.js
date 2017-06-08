import {STATICS,getGetRequestParams,getCustomStaticUrl} from '../ApiUrl'
import {generateToken} from '../Helper'
import {getApiData} from '../ApiCall'
import {getHomeBoxes,storeHomeBoxes} from '../AsyncStorage'
export const SHOW_LOADING = "SHOW_LOADING"
export const FETCH_STATIC_DATA = "FETCH_STATIC_DATA"

export
const commonAction =(type,payload)=>{
  return{
    type:type,
    payload:payload
  }
}


const makeStaticCall = (dispatch) => {
  let header = getGetRequestParams()
  let url = getCustomStaticUrl('new_home_box,mobile_slider,images,get_men,bottom_menu,path,get_menu,bottom_menu,blog_path,contact_us,cancel_reasons_for_user,payment_offers,card_details')
  getApiData(header,url,((error,jsonStatus,jsonError,jsonResponse)=>{
    storeHomeBoxes(jsonResponse)
    dispatch(commonAction(FETCH_STATIC_DATA,jsonResponse))
  }))
}


export
const checkIfDataCacheAndMakeCall = (dispatch) => {
  generateToken((error,response)=>{
    if (response) {
      getHomeBoxes((error,response)=>{
        if (!response) {
          makeStaticCall(dispatch)
        }else{
          dispatch(commonAction(FETCH_STATIC_DATA,response))
          setTimeout(function () {
            makeStaticCall(dispatch)
            dispatch(commonAction(FETCH_STATIC_DATA,response))
          },5000)
        }
      })
    }
  })
}
