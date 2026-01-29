self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('paymentrequest', event => {
  event.respondWith(
    Promise.resolve({
      methodName: event.methodData[0].supportedMethods,
      details: {
        status: "success",
        message: "Test payment successful"
      }
    })
  );
});
