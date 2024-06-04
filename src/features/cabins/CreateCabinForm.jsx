// import styled from "styled-components";
import { useForm } from "react-hook-form";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";

import { useCreateCabin } from "./useCreateCabin";
import { useEditCabin } from "./useEditCabin";

function CreateCabinForm({cabinToEdit = {},onCloseModal}) {
  const {isCreating, createCabin} = useCreateCabin()
  const {isEditing,editCabin} = useEditCabin();
  const isWorking = isEditing || isCreating;

  const {id: editid, ...editValues} = cabinToEdit;
  const isEditSession = Boolean(editid);

  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });
  const { errors } = formState;
  
  function onSubmit(data){
    // mutate(data);
    const image = typeof data.image === 'string' ? data.image : data.image[0]
    if(isEditSession) editCabin({newCabinData: {...data,image},id: editid},{ onSuccess: (data) => { reset();onCloseModal?.(); }});
    else createCabin({...data,image: image},{
      onSuccess: (data) => {reset();onCloseModal?.();},
    })
  }
  function onError(errors){
    // console.log(errors)
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit,onError)} type={onCloseModal ? 'modal' : 'regular'}>

      <FormRow label="Cabin Name" error={errors?.name?.message} >
        <Input type="text" id="name" {...register('name',{required: "This Field is required!"})} />
      </FormRow>

      <FormRow label="Maximum capacity" error={errors?.maxCapacity?.message} >
        <Input type="number" id="maxCapacity" {...register('maxCapacity',{required: "This Field is required!",min: {value: 1,message: 'Capactiy should be at least 1'},})} />
      </FormRow>

      <FormRow label="Regular Price" error={errors?.regularPrice?.message} >
        <Input type="number" id="regularPrice" {...register('regularPrice',{required: "This Field is required!"})} />
      </FormRow>

      <FormRow label="Discount" error={errors?.discount?.message}>
        <Input type="number" id="discount" defaultValue={0} {...register('discount',{required: "This Field is required!",validate: (value) => value <=  getValues().regularPrice || 'Discount should be less than regular price'})} />
      </FormRow>

      <FormRow label="Description" error={errors?.description?.message}>
        <Textarea type="number" id="description" defaultValue="" {...register('description',{required: "This Field is required!"})}  />
      </FormRow>

      <FormRow label="Image">
        <FileInput id="image" accept="image/*" type="file" {...register("image",{required: isEditSession ? false : "This field is required"})} />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset" onClick={() => onCloseModal?.()}>
          Cancel
        </Button>
        <Button disabled={isWorking}>{isEditSession ? 'Edit Cabin' : 'Add cabin'}</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
