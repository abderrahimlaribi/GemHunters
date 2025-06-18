import React, { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const PhoneNumberValidation = ({ value, onChange }) => {
  const validatePhoneNumber = (number) => {
    const phoneNumberPattern = /^\+?[1-9]\d{8,14}$/ // International format
    return phoneNumberPattern.test(number)
  }

  const handleChange = (value) => {
    onChange(value)
  }

  return (
    <div>
      <PhoneInput
        country={'us'}
        inputProps={{
          name: 'phone',
          autoComplete: 'tel',
        }}
        placeholder='Phone'
        disabled={false}
        value={value}
        onChange={handleChange}
      />
    </div>
  )
}

export default PhoneNumberValidation
