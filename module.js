modules: [
    ['nextjs-brotli', {
      filter: (req, res) => {
        if (/^\/api/.test(req.originalUrl)) {
           return false
         }
         return shrinkRay.filter(req, res)
       }
     }
    ]
]