// IMPROVE: define csp in http headers

const cspConfigContent = {
  defaultSrc: "'self'",
  scriptSrc: "'self' 'unsafe-inline' https://cdn.example.com",
  styleSrc: "'self' 'unsafe-inline' https://fonts.googleapis.com",
  imgSrc:
    "'self' data: https://example.com https://postsrc.com/ http://127.0.0.1:8000/  http://127.0.0.1:8000/api/user-infos/show http://127.0.0.1:8000/api/jobs/get-job-posting https://via.placeholder.com/",
  fontSrc: "'self' https://fonts.gstatic.com",
  connectSrc:
    "'self' http://127.0.0.1:8000/ http://127.0.0.1:8000/api/refresh-token http://127.0.0.1:8000/api/user-infos/show http://127.0.0.1:8000/api/jobs/get-job-posting",
};

const cspConfig = `default-src ${cspConfigContent.defaultSrc}; script-src ${cspConfigContent.scriptSrc}; style-src ${cspConfigContent.styleSrc}; img-src ${cspConfigContent.imgSrc}; font-src ${cspConfigContent.fontSrc}; connect-src ${cspConfigContent.connectSrc};`;
export default cspConfig;
