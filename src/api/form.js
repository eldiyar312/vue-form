export const sendData = async (
    url = '', 
    method = 'GET', 
    body = {}
  ) => {

  if( body ){
    body = JSON.stringify(body)
  }

  const uri = 'http://localhost:5000'

  const option = {
    method,
    body,
    headers: { 'Content-Type': 'application/json' }
  }

  const req = await fetch( uri + url, option )

  if(!req.status){
    console.log(`error request! status: ${req.status}`)
  }

  const response = req.json()

  return response
}