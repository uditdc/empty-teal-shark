import { http } from "@blockless/sdk/assembly"

export function GET(req: http.Request): http.Response {
  const body = `Blog Index`
  return new http.Response(body).status(200)
}