import './App.scss'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import type { FormData } from './types'
import ConfirmMessage from './components/confirm-message'
import ReactDOM from 'react-dom'
import { zodResolver } from '@hookform/resolvers/zod'
import { schema } from './schema'

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
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = () => {
    setShowModal(true)
    reset()
  }

  console.log(errors)

  return (
    <main>
      <form onSubmit={handleSubmit(onSubmit)} className='form'>
        <div className='form__container'>
          <h1 className='form__header heading'>Contact Us</h1>
          <div className='form__layout'>
            <div className='form-line'>
              <div className='form__name'>
                <div>
                  <label htmlFor='first-name'>
                    First Name <span aria-hidden>*</span>
                  </label>
                  <input
                    className={errors.firstName ? 'error-input' : ''}
                    {...register('firstName')}
                    type='text'
                    id='first-name'
                    autoComplete='given-name'
                    aria-invalid={errors.firstName ? 'true' : 'false'}
                    aria-describedby='first-name-error'
                  />
                  <p className='error' id='first-name-error'>
                    {errors.firstName?.message}
                  </p>
                </div>
                <div>
                  <label htmlFor='last-name'>
                    Last Name <span aria-hidden>*</span>
                  </label>
                  <input
                    className={errors.lastName ? 'error-input' : ''}
                    {...register('lastName')}
                    type='text'
                    id='last-name'
                    autoComplete='family-name'
                    aria-invalid={errors.lastName ? 'true' : 'false'}
                    aria-describedby='last-name-error'
                  />
                  <p className='error' id='last-name-error'>
                    {errors.lastName?.message}
                  </p>
                </div>
              </div>
            </div>
            <div className='form-line'>
              <label htmlFor='email'>
                Email <span aria-hidden>*</span>
              </label>
              <input
                className={errors.email ? 'error-input' : ''}
                {...register('email')}
                type='email'
                id='email'
                autoComplete='email'
                aria-required
                aria-invalid={errors.email ? 'true' : 'false'}
                aria-describedby='email-error'
              />
              <p className='error' id='email-error'>
                {errors.email?.message}
              </p>
            </div>
            <div className='form-line'>
              <fieldset>
                <legend>
                  Query Type <span aria-hidden>*</span>
                </legend>
                <div className='form__query-type'>
                  <label
                    htmlFor='general-enquiry'
                    className='query-type-option'
                  >
                    <input
                      {...register('queryType')}
                      type='radio'
                      value='general-enquiry'
                      id='general-enquiry'
                      aria-required
                      aria-invalid={errors.queryType ? 'true' : 'false'}
                      aria-describedby='query-type-error'
                    />
                    General Enquiry
                  </label>
                  <label
                    className='query-type-option'
                    htmlFor='support-request'
                  >
                    <input
                      {...register('queryType')}
                      type='radio'
                      value='support-request'
                      id='support-request'
                      aria-required
                      aria-invalid={errors.queryType ? 'true' : 'false'}
                      aria-describedby='query-type-error'
                    />
                    Support Request
                  </label>
                </div>
                <p className='error' id='query-type-error'>
                  {errors.queryType?.message}
                </p>
              </fieldset>
            </div>
            <div className='form-line'>
              <label htmlFor='message'>
                Message <span aria-hidden>*</span>
              </label>
              <textarea
                className={errors.message ? 'error-input' : ''}
                {...register('message')}
                id='message'
                aria-required
                aria-invalid={errors.message ? 'true' : 'false'}
                aria-describedby='message-error'
              />
              <p className='error' id='message-error'>
                {errors.message?.message}
              </p>
            </div>
            <div className='form-line'>
              <label className='form__consent' htmlFor='consent'>
                <input
                  {...register('consent')}
                  type='checkbox'
                  name='consent'
                  id='consent'
                  aria-required
                  aria-invalid={errors.consent ? 'true' : 'false'}
                  aria-describedby='consent-error'
                />
                I hereby consent to being contacted by the team
                <span aria-hidden>*</span>
              </label>
              <p className='error' id='consent-error'>
                {errors.consent?.message}
              </p>
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
