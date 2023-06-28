import { http } from "@blockless/sdk/assembly"

export function GET(req: http.Request): http.Response {
  const html = `This page is rendered via WASM; Current Time: ` + Date.now().toString()

  return new http.Response(html)
    .status(200)
}