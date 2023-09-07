export async function checkAuth(req) {
  const session = req.session
  const authorized = session?.authorized ? session?.authorized : false

  if (!authorized){
    if (req.method === 'GET') {
      return {
        location: '/login'
      }
    }
    return {
      status: 401
    }
  }
}