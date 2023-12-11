// IMPROVE: define csp in http headers
const generateCSPConfig = (configContent) => {
  return Object.entries(configContent)
    .map(([directive, value]) => `${directive} ${value}`)
    .join("; ");
};

const cspConfigContent = {
  "default-src": "'self'",
  "script-src": "'self' 'unsafe-inline' https://cdn.example.com",
  "style-src": "'self' 'unsafe-inline' https://fonts.googleapis.com",
  "img-src":
    "'self' data: https://example.com https://postsrc.com/ http://127.0.0.1:8000/ https://via.placeholder.com/",
  "font-src": "'self' https://fonts.gstatic.com",
  "connect-src": "'self' http://127.0.0.1:8000/",
};

const cspConfig = generateCSPConfig(cspConfigContent);
export default cspConfig;
