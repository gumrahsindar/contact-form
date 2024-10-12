import './App.scss'

function App() {
  return (
    <main className='form'>
      <div className='form__container'>
        <h1 className='form__header heading'>Contact Us</h1>
        <div className='form__layout'>
          <div className='form-line'>
            <div className='form__name'>
              <div>
                <label htmlFor='first-name'>
                  First Name <span>*</span>
                </label>
                <input type='text' id='first-name' />
              </div>
              <div>
                <label htmlFor='last-name'>
                  Last Name <span>*</span>
                </label>
                <input type='text' id='last-name' />
              </div>
            </div>
          </div>
          <div className='form-line'>
            <label htmlFor='email'>
              Email <span>*</span>
            </label>
            <input type='email' id='email' />
          </div>
          <div className='form-line'>
            <fieldset>
              <legend>
                Query Type <span>*</span>
              </legend>
              <div className='form__query-type'>
                <label htmlFor='general-enquiry' className='query-type-option'>
                  <input type='radio' name='query-type' id='general-enquiry' />
                  General Enquiry
                </label>
                <label className='query-type-option' htmlFor='support-request'>
                  <input type='radio' name='query-type' id='support-request' />
                  Support Request
                </label>
              </div>
            </fieldset>
          </div>
          <div className='form-line'>
            <label htmlFor='message'>
              Message <span>*</span>
            </label>
            <textarea id='message'></textarea>
          </div>
          <div className='form-line'>
            <label className='form__consent' htmlFor='consent'>
              <input type='checkbox' name='consent' id='consent' />I hereby
              consent to being contacted by the team <span>*</span>
            </label>
          </div>
        </div>
        <button>Submit</button>
      </div>
    </main>
  )
}

export default App
