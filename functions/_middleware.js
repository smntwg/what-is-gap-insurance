export async function onRequest(context) {
  const host = (context.request.headers.get("Host") || "").split(":")[0].toLowerCase();
  if (host === "www.what-is-gap-insurance.co.uk") {
    const url = new URL(context.request.url);
    url.hostname = "what-is-gap-insurance.co.uk";
    url.protocol = "https:";
    url.port = "";
    return Response.redirect(url.toString(), 301);
  }
  return context.next();
}
