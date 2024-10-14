import './App.scss'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import type { FormData } from './types'
import ConfirmMessage from './components/confirm-message'
import ReactDOM from 'react-dom'

function App() {
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    if (showModal) {
      const timer = setTimeout(() => {
        setShowModal(false)
      }, 5000)

      return () => clearTimeout(timer)
    }
  }, [showModal])

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>()

  const onSubmit = () => {
    setShowModal(true)
    reset()
  }

  return (
    <main>
      <form noValidate onSubmit={handleSubmit(onSubmit)} className='form'>
        <div className='form__container'>
          <h1 className='form__header heading'>Contact Us</h1>
          <div className='form__layout'>
            <div className='form-line'>
              <div className='form__name'>
                <div>
                  <label htmlFor='first-name'>
                    First Name <span aria-hidden>*</span>
                    <span className='sr-only'>Required</span>
                  </label>
                  <input
                    className={errors.firstName ? 'error-input' : ''}
                    {...register('firstName', {
                      required: {
                        value: true,
                        message: 'This field is required',
                      },
                    })}
                    type='text'
                    id='first-name'
                    aria-invalid={errors.firstName ? 'true' : 'false'}
                    aria-describedby={
                      errors.firstName ? 'first-name-error' : ''
                    }
                  />
                  {errors.firstName && (
                    <p role='alert' id='first-name-error' className='error'>
                      {errors.firstName.message}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor='last-name'>
                    Last Name <span aria-hidden>*</span>
                    <span className='sr-only'>Required</span>
                  </label>
                  <input
                    className={errors.lastName ? 'error-input' : ''}
                    {...register('lastName', {
                      required: {
                        value: true,
                        message: 'This field is required',
                      },
                    })}
                    type='text'
                    id='last-name'
                    aria-invalid={errors.lastName ? 'true' : 'false'}
                    aria-describedby={errors.lastName ? 'last-name-error' : ''}
                  />
                  {errors.lastName && (
                    <p role='alert' id='last-name-error' className='error'>
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className='form-line'>
              <label htmlFor='email'>
                Email <span aria-hidden>*</span>
                <span className='sr-only'>Required</span>
              </label>
              <input
                className={errors.email ? 'error-input' : ''}
                {...register('email', {
                  required: {
                    value: true,
                    message: 'This field is required',
                  },
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: 'Please enter a valid email address',
                  },
                })}
                type='email'
                id='email'
                aria-invalid={errors.email ? 'true' : 'false'}
                aria-describedby={errors.email ? 'email-error' : ''}
              />
              {errors.email && (
                <p role='alert' id='email-error' className='error'>
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className='form-line'>
              <fieldset>
                <legend>
                  Query Type <span aria-hidden>*</span>
                  <span className='sr-only'>Required</span>
                </legend>
                <div className='form__query-type'>
                  <label
                    htmlFor='general-enquiry'
                    className='query-type-option'
                  >
                    <input
                      {...register('queryType', {
                        required: {
                          value: true,
                          message: 'Please select a query type',
                        },
                      })}
                      type='radio'
                      value='general-enquiry'
                      id='general-enquiry'
                      aria-invalid={errors.queryType ? 'true' : 'false'}
                      aria-describedby={
                        errors.queryType ? 'query-type-error' : ''
                      }
                    />
                    General Enquiry
                  </label>
                  <label
                    className='query-type-option'
                    htmlFor='support-request'
                  >
                    <input
                      {...register('queryType', {
                        required: {
                          value: true,
                          message: 'Please select a query type',
                        },
                      })}
                      type='radio'
                      value='support-request'
                      id='support-request'
                      aria-invalid={errors.queryType ? 'true' : 'false'}
                      aria-describedby={
                        errors.queryType ? 'query-type-error' : ''
                      }
                    />
                    Support Request
                  </label>
                </div>
                {errors.queryType && (
                  <p role='alert' id='query-type-error' className='error'>
                    {errors.queryType.message}
                  </p>
                )}
              </fieldset>
            </div>
            <div className='form-line'>
              <label htmlFor='message'>
                Message <span aria-hidden>*</span>
                <span className='sr-only'>Required</span>
              </label>
              <textarea
                className={errors.message ? 'error-input' : ''}
                {...register('message', {
                  required: {
                    value: true,
                    message: 'This field is required',
                  },
                })}
                id='message'
                aria-invalid={errors.message ? 'true' : 'false'}
                aria-describedby={errors.message ? 'message-error' : ''}
              ></textarea>
              {errors.message && (
                <p role='alert' id='message-error' className='error'>
                  {errors.message.message}
                </p>
              )}
            </div>
            <div className='form-line'>
              <label className='form__consent' htmlFor='consent'>
                <input
                  {...register('consent', {
                    required: {
                      value: true,
                      message: 'Please consent to being contacted by the team',
                    },
                  })}
                  type='checkbox'
                  name='consent'
                  id='consent'
                  aria-invalid={errors.consent ? 'true' : 'false'}
                  aria-describedby={errors.consent ? 'consent-error' : ''}
                />
                I hereby consent to being contacted by the team
                <span aria-hidden>*</span>
              </label>
              {errors.consent && (
                <p role='alert' id='consent-error' className='error'>
                  {errors.consent.message}
                </p>
              )}
            </div>
          </div>
          <button>Submit</button>
        </div>
      </form>
      {showModal && ReactDOM.createPortal(<ConfirmMessage />, document.body)}
    </main>
  )
}

export default App
