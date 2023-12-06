const cspConfig = {
  defaultSrc: "'self'",
  scriptSrc: "'self' 'unsafe-inline' https://cdn.example.com",
  styleSrc: "'self' 'unsafe-inline' https://fonts.googleapis.com",
  imgSrc:
    "'self' data: https://example.com https://postsrc.com/ http://127.0.0.1:8000/ https://via.placeholder.com/",
  fontSrc: "'self' https://fonts.gstatic.com",
  connectSrc: "'self' http://127.0.0.1:8000/",
};

export default cspConfig;
