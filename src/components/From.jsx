import { Link } from 'react-router-dom'
import PhoneNumberValidation from './PhoneNumber'
import React, { useState } from 'react'
import { check } from 'prettier'
import { useMutation } from '@tanstack/react-query'
import { createUser } from '../api/users'
import { useNavigate } from 'react-router-dom'

const Form = () => {
  const navigate = useNavigate()

  const createUserMutation = useMutation({
    mutationFn: () => createUser({ name, mail, phone }),
    onSuccess: () => {
      console.log('Form Submitted Successfully!')
      setMail('')
      setName('')
      setPhone('')
      setChecked(false)
      setErrors({})
      navigate('/checkout')
    },
  })

  const [name, setName] = useState('')
  const [mail, setMail] = useState('')
  const [phone, setPhone] = useState('')
  const [checked, setChecked] = useState(false)
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState('')

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailPattern.test(email)
  }

  const validatePhone = (phone) => {
    const phonePattern = /^\+?[1-9]\d{8,14}$/
    return phonePattern.test(phone)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    let newErrors = {}

    if (!name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!mail.trim()) {
      newErrors.mail = 'Email is required'
    } else if (!validateEmail(mail.trim())) {
      newErrors.mail = 'Invalid email format'
    }

    if (!phone.trim()) {
      newErrors.phone = 'Phone is required'
    } else if (!validatePhone(phone.trim())) {
      newErrors.phone = 'Invalid Phone number'
    }

    if (!checked) {
      newErrors.checked = 'You must agree to the terms'
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    console.log('Form Submitted Successfully!')
    createUserMutation.mutate()
  }

  return (
    <div className='section-join-today w-full' id='signup-form'>
      <div className=''>
        <div className='container-large'>
          <div className='padding-section-medium _4-rem-padding'>
            <div className='signup_wrapper'>
              <img
                src='https://gemhunters.co/images/signup-left_1signup-left.webp'
                alt=''
                className='signup_image-left to-right'
                style={{
                  willChange: 'transform',
                  transform:
                    'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                  transformStyle: 'preserve-3d',
                }}
              />
              <img
                src='https://gemhunters.co/images/signup-right_1signup-right.webp'
                alt=''
                className='signup_image-right to-left'
                style={{
                  willChange: 'transform',
                  transform:
                    'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                  transformStyle: 'preserve-3d',
                }}
              />

              <div className='signup_text-wrapper'>
                <h2 className='heading-style-h1-2'>Join Gem Hunters Today</h2>
                <p className='paragraph-25'>
                  Join 1,400+ other Gem Hunters and receive instant access to
                  our digital lobbies allowing you to gain insight and private
                  alpha in real time.
                </p>

                <div className='w-form w-full md:w-6/12'>
                  <form
                    id='signup-form'
                    method='POST'
                    name='email-form'
                    data-name='Email Form'
                    className='signup-form'
                    aria-label='Email Form'
                    onSubmit={handleSubmit}
                  >
                    <input
                      type='hidden'
                      name='_token'
                      defaultValue='b19MTWfAiZCBC5GCvvKUFQU1KMb8Ob33i0IB4s7i'
                      autoComplete='off'
                    />{' '}
                    <input type='hidden' name='tid' id='tid' defaultValue={1} />
                    <input
                      className='text-field-2 w-input'
                      style={{ fontSize: 16 }}
                      maxLength={256}
                      name='name'
                      data-name='Name'
                      placeholder='Name'
                      type='text'
                      id='name'
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                    />
                    <input
                      className='text-field-2 w-input'
                      style={{ fontSize: 16 }}
                      maxLength={256}
                      name='email'
                      data-name='Email'
                      placeholder='Email'
                      id='email'
                      value={mail}
                      onChange={(event) => setMail(event.target.value)}
                    />
                    <PhoneNumberValidation value={phone} onChange={setPhone} />
                    <input
                      id='submit-btn'
                      type='submit'
                      data-wait='Please wait...'
                      className='button-3 center large-btn w-button'
                      value={'JOIN NOW'}
                    />
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 20,
                      }}
                    >
                      <div className='checkbox-wrapper '>
                        <input
                          type='checkbox'
                          id='terms'
                          name='terms'
                          required=''
                          checked={checked}
                          onChange={() => setChecked(!checked)}
                        />
                        <label
                          style={{ marginBottom: 'auto' }}
                          className='checkbox-label'
                          htmlFor='terms'
                        ></label>
                        <span
                          className='paragraph-27 text'
                          style={{
                            textAlign: 'left',
                            textTransform: 'none',
                            textDecoration: 'none',
                            color: 'gray',
                            marginTop: 'auto',
                            marginBottom: 'auto',
                            paddingTop: 3,
                          }}
                        >
                          I agree to the{' '}
                          <a href='/terms' style={{ color: 'gray' }}>
                            Terms and Conditions
                          </a>{' '}
                          &amp;
                          <a href='/privacy-policy' style={{ color: 'gray' }}>
                            Privacy Policy
                          </a>
                          , agree to receive auto and AI calls and texts at the
                          number &amp; email provided above from DBH Digital LLC
                          &amp; I understand this consent is not required to
                          purchase.
                        </span>
                      </div>
                    </div>
                    <div
                      id='form-error'
                      className='text-danger'
                      style={{ paddingTop: 20, color: '#d5edffd9' }}
                    >
                      {errors.name ||
                        errors.mail ||
                        errors.phone ||
                        errors.checked ||
                        (createUserMutation.isPending
                          ? 'We are redirecting you to the payment page...'
                          : createUserMutation.isError
                            ? 'Error occurred'
                            : '')}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Form
