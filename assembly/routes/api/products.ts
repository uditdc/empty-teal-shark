import { http } from "@blockless/sdk/assembly"

export function GET(req: http.Request): http.Response {
  const response = new http.Client().get('https://reqres.in/api/products')

  return new http.Response(response.stringify())
    .header('Content-Type', 'application/json')
    .status(200)
}
