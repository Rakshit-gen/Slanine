'use client'

import React, { useState } from 'react'
import { TEMPLATE } from '../../_components/TemplateListSection'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Loader2Icon, LoaderPinwheel } from 'lucide-react'

interface PROPS{
    selectedTemplate?:TEMPLATE
    userFormInput:any
    loading:boolean
}

const FormSection = ({selectedTemplate,userFormInput,loading}:PROPS) => {
    const [formData,setFormData]=useState<any>()
    const onSubmit=(e:any)=>{
        e.preventDefault()
        userFormInput(formData)
    }
    const handleInputChange=(event:any)=>{
        const {name,value}=event.target;
        setFormData({...formData,[name]:value})

    }
  return (

    <div className='p-5 shadow-md border rounded-lg bg-white'>
        <h2 className='font-bold text-2xl mb-2 text-purple'>{selectedTemplate?.name}</h2>
        <p className='text-gray-700'>{selectedTemplate?.desc}</p>
        <form className='mt-6' onSubmit={onSubmit}>
            {selectedTemplate?.form?.map((item,index)=>(
                <div className='my-2 flex flex-col gap-2 mb-7'>
                    <br />
                    <label className='font-bold'>{item.label}</label>
                    
                    {item.field=='input'?
                    <Input name={item.name} required={item?.required} onChange={handleInputChange} />
                    :item.field=='textarea'?
                    <Textarea name={item.name} required={item?.required} onChange={handleInputChange} />:null
}

                </div>
            ))}
            <Button type='submit' className='w-full py-3' disabled={loading}>{loading&&<Loader2Icon className='animate-spin' />} Submit</Button>
        </form>
    </div>
  )
}

export default FormSection