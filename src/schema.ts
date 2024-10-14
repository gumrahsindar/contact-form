import { z } from 'zod'

export const schema = z.object({
  firstName: z.string().min(1, 'This field is required'),
  lastName: z.string().min(1, 'This field is required'),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  queryType: z.enum(['general-enquiry', 'support-request'], {
    message: 'Please select a query type',
  }),
  message: z.string().min(1, 'This field is required'),
  consent: z.boolean().refine((value) => value === true, {
    message: 'To submit this form, please consent to being contacted',
  }),
})
