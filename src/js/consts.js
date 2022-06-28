let cONTACT_FORM_SUBMIT_URL = "/v1/submitData"
let dEMO_FORM_SUBMIT_URL = "/v1/submitData"
let qUOTE_FORM_SUBMIT_URL = "/v1/submitData"
let rESUME_FORM_SUBMIT_URL = "/v1/applyCareer"


if (process.env.NODE_ENV === 'production') {
    // We are running in production mode

} else {
    // We are running in development mode
    cONTACT_FORM_SUBMIT_URL = "http://localhost:5000/v1/submitData"
    dEMO_FORM_SUBMIT_URL = "http://localhost:5000/v1/submitData"
    qUOTE_FORM_SUBMIT_URL = "http://localhost:5000/v1/submitData"
    rESUME_FORM_SUBMIT_URL = "http://localhost:5000/v1/applyCareer"
}

export const CONTACT_FORM_SUBMIT_URL = cONTACT_FORM_SUBMIT_URL;
export const DEMO_FORM_SUBMIT_URL = dEMO_FORM_SUBMIT_URL;
export const QUOTE_FORM_SUBMIT_URL = qUOTE_FORM_SUBMIT_URL;
export const RESUME_FORM_SUBMIT_URL = rESUME_FORM_SUBMIT_URL;
