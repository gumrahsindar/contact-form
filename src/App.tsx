import './App.scss'

import { useForm } from 'react-hook-form'

type FormData = {
  firstName: string
  lastName: string
  email: string
  queryType: string
  message: string
  consent: boolean
}

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()
  const onSubmit = (data: FormData) => {
    console.log('data', data)
    console.log('errors', errors)
  }

  console.log('errors', errors)
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
                    First Name <span>*</span>
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
                  />
                  {errors.firstName && (
                    <p className='error'>{errors.firstName.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor='last-name'>
                    Last Name <span>*</span>
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
                  />
                  {errors.lastName && (
                    <p className='error'>{errors.lastName.message}</p>
                  )}
                </div>
              </div>
            </div>
            <div className='form-line'>
              <label htmlFor='email'>
                Email <span>*</span>
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
              />
              {errors.email && <p className='error'>{errors.email.message}</p>}
            </div>
            <div className='form-line'>
              <fieldset>
                <legend>
                  Query Type <span>*</span>
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
                    />
                    Support Request
                  </label>
                </div>
                {errors.queryType && (
                  <p className='error'>{errors.queryType.message}</p>
                )}
              </fieldset>
            </div>
            <div className='form-line'>
              <label htmlFor='message'>
                Message <span>*</span>
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
              ></textarea>
              {errors.message && (
                <p className='error'>{errors.message.message}</p>
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
                />
                I hereby consent to being contacted by the team <span>*</span>
              </label>
              {errors.consent && (
                <p className='error'>{errors.consent.message}</p>
              )}
            </div>
          </div>
          <button>Submit</button>
        </div>
      </form>
    </main>
  )
}

export default App
