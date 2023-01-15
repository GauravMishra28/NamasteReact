let url="https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"


export const fetchApi= async()=>{
  try{
  const res= await fetch(url)
  const data= await res.json()
  return data
  }catch(err){
  console.log(err)
  }
  }


