export const sendData = async (
    url = '', 
    method = 'GET', 
    body = {}
  ) => {

  if( body ){
    body = JSON.stringify(body)
  }

  const uri = 'https://rocky-refuge-77020.herokuapp.com'

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